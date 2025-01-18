import { MapContainer as LeafletMapContainer,GeoJSON, Pane, TileLayer,} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import MaskLayer  from './MackLayer';
import { useQuery } from '@tanstack/react-query';
import uzbService from '../../services/uzb.service';
import { useMemo } from 'react';

const CustomMap = () => {
    const center: [number, number] = [41.3775, 64.5853];
  
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
console.log(region_name);

          return {
            type: "Feature",
            id: item.region_id,
            properties: {
              region_id: item.region_id,
              region_name: region_name.kir,
              district_id: item.district_id,
              district_name: "uz", 
            },
            geometry,
          };
        }) || []
    );
  }, [data?.data]);


  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading data: something weng wrong</p>;
    return (
        <LeafletMapContainer
            center={center}
            zoom={6}
            className='rounded-xl'
            style={{width: '100%', height: '600px'}}
        >
            <Pane style={{zIndex: 500}} name={""}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </Pane>
            
       <Pane name="geoJsonPane">
        {outputArray.length > 0 && (
        <GeoJSON
          key={JSON.stringify(outputArray)}
          data={{
            type: "FeatureCollection",
            // @ts-ignore
            features: outputArray || [],
          }}
          onEachFeature={(feature, layer) => {
            console.log(feature);
            const digitizedCount = 4;  // Example data
            const nonDigitizedCount = 20;  // Example data
            const digitizedPercent = 15;  // Example data
            const nonDigitizedPercent = 75;  // Example data
            
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
           
            
          }}
          
        />
      )}
    
            </Pane>
        <MaskLayer />
        </LeafletMapContainer>
    );
};

export default CustomMap;

