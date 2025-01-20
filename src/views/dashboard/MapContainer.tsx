import { MapContainer as LeafletMapContainer,GeoJSON, Pane, TileLayer, useMap, Marker, Popup,} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import MaskLayer  from './MackLayer';
import { useQuery } from '@tanstack/react-query';
import uzbService from '../../services/uzb.service';
import { useMemo } from 'react';
import L from 'leaflet';

const CustomMap = () => {
    const center: [number, number] = [41.3775, 63.5853];
  
const {data,isPending,error} = useQuery({
    queryKey: ["geoJson"],
    queryFn: uzbService.geo_json
})

const outputArray = useMemo(() => {

    return (
      data?.data?.maps_list
        ?.filter((val: any) => val.geometry) 
        .map((item: any) => {
          let geometry;
          let region_name;
          console.log(item);
          
          try {
            geometry = JSON.parse(item.geometry?.replaceAll("'", '"'));
          } catch {
            geometry = JSON.parse(item.geometry);
          }
          try {
            region_name = JSON.parse(item.region_name?.replaceAll("'", '"'));
          } catch {
            region_name = JSON.parse(item.region_name);
          }
console.log(item);

          return {
            type: "Feature",
            id: item.region_id,
            properties: {
              region_id: item.region_id,
              region_name: region_name.kir,
              energy_saving_target: item.energy_saving_target,
              gas_saving_target: item.gas_saving_target,
              id: item.id, 
            },
            geometry,
          };
        }) || []
    );
  }, [data?.data]);

console.log(data?.data);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading data: something weng wrong</p>;
    return (
        <LeafletMapContainer
            center={center}
            zoom={6}
            zoomControl={false}
            className='rounded-xl'
            style={{width: '100%', height: '600px'}}
            scrollWheelZoom={false}
        >
            <Pane style={{zIndex: 500}} name={""}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </Pane>
            
       <Pane name="geoJsonPane">
        {outputArray.length > 0 && (<>
        <GeoJSON
          key={JSON.stringify(outputArray)}
          data={{
            type: "FeatureCollection",
            // @ts-ignore
            features: outputArray || [],
          }}
          onEachFeature={(feature, layer) => {
            console.log(feature);
            const digitizedCount = 4;  
            const nonDigitizedCount = 20; 
            const digitizedPercent = 15;  
            const nonDigitizedPercent = 75; 
            
            layer.bindPopup(
              `<div style="
        background-color: #1a1b2d; 
        color: white; 
        padding: 10px; 
        border-radius: 10px;
        font-family: Arial, sans-serif;
        width: 250px;
      ">
        <strong style="font-size: 16px;">${feature.properties.region_name}</strong>
        <hr style="border-color: rgba(255, 255, 255, 0.2);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center;">
            <span style="background-color: green; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
            <span>Oцифровано</span>
          </div>
          <span>${digitizedCount} (${digitizedPercent}%)</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
          <div style="display: flex; align-items: center;">
            <span style="background-color: red; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 5px;"></span>
            <span>He oцифровано</span>
          </div>
          <span>${nonDigitizedCount} (${nonDigitizedPercent}%)</span>
        </div>
      </div>`,{className:"custom-popup"}
            );

      const map = useMap()

layer.on("click", () => {
  //@ts-ignore
                const bounds = layer.getBounds(); 
                
                map.flyToBounds(bounds, {
                  padding: [5, 5],
                  duration: 1.5,
                });
              });
            
          }}
        />
        {outputArray.map((feature: any) => {
              const bounds = L.geoJSON(feature).getBounds();
              const center = bounds.getCenter();
              return (
                <Marker key={feature.id} position={center} >
                  <Popup>
                    <div>
                      <strong>{feature.properties.region_name}</strong>
                      <br />
                      <span>Energy target: {feature.properties.energy_saving_target}</span>
                      <br />
                      <span>Gas target: {feature.properties.gas_saving_target}</span>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
     </> )}
    
            </Pane>
        <MaskLayer />
        </LeafletMapContainer>
    );
};

export default CustomMap;

