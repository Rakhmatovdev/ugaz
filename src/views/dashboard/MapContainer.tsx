import { MapContainer as LeafletMapContainer, Pane, TileLayer} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import MaskLayer from './MackLayer';
// import MaskLayer from "./MackLayer.tsx";
// import geoData from "../../data/geoJson.tsx";

const CustomMap = () => {
    const center: [number, number] = [41.3775, 64.5853];

    return (
        <LeafletMapContainer
            center={center}
            zoom={6}
            style={{width: '100%', height: '630px'}}
        >
            <Pane style={{zIndex: 500}} name={""}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
            </Pane>
            {/* <Pane name="geoJsonPane">
               {geoData &&  ( //outputArray?.length &&
                    <GeoJSON
                        key={JSON.stringify(geoData)}
                       ref={geoJsonRef as any}
                       data={
                           {
                               type: "FeatureCollection",
                            //    features: outputArray,
                           } as any
                       }
                    //    onEachFeature={onEachFeature}
                   />
               )}
            </Pane> */}
        <MaskLayer />

        </LeafletMapContainer>
    );
};

export default CustomMap;
