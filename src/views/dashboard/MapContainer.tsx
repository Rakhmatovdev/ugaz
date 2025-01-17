import { MapContainer as LeafletMapContainer, Pane, TileLayer} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import MaskLayer  from './MackLayer';
import { useQuery } from '@tanstack/react-query';
import uzbService from '../../services/uzb.service';
// import MaskLayer from "./MackLayer.tsx";
// import geoData from "../../data/geoJson.tsx";

const CustomMap = () => {
    const center: [number, number] = [41.3775, 64.5853];
  
    const blackOptions = { color: 'black' }
const {data} = useQuery({
    queryKey: ["geoJson"],
    queryFn: uzbService.geo_json
})
console.log(data?.data);

    return (
        <LeafletMapContainer
            center={center}
            zoom={6}
            style={{width: '100%', height: '600px'}}
        >
            <Pane style={{zIndex: 500}} name={""}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </Pane>
            
            {/* <Pane name="geoJsonPane">
               {geoData && outputArray?.length && ( //outputArray?.length &&
                    <GeoJSON
                        key={JSON.stringify(geoData)}
                       ref={geoJsonRef as any}
                       data={
                           {
                               type: "FeatureCollection",
                               features: outputArray,
                           } as any
                       }
                    //    onEachFeature={onEachFeature}
                   />
               )}
            </Pane> */}

        {/* {data?.data && (data?.data.maps_list.map((multiPolygon: any) =>    <Pane key={multiPolygon} style={{zIndex: 100}} name={""}><Polygon pathOptions={blackOptions} positions={multiPolygon.geometry.coordinates} /></Pane>) )} */}
        <MaskLayer />
   
        </LeafletMapContainer>
    );
};

export default CustomMap;
