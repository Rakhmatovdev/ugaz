import {useMap} from "react-leaflet";
import {useEffect, useMemo} from "react";
import L from "leaflet";
import UzbekistanBorders from "../../data/uzbekistan-borders.ts";
// import { useQuery } from "@tanstack/react-query";
// import uzbService from "../../services/uzb.service.ts";
// import geoData from "../../data/geoJson.tsx";

(L as any).Mask = L.Polygon.extend({
    options: {
        stroke: false,
        color: "#000",
        fillOpacity: 0.2,
        blur:0.2,
        clickable: true,
        outerBounds: new L.LatLngBounds([-90, -360], [90, 360]),
    },
    initialize: function (latLngs:any, options:any) {
        const outerBoundsLatLngs = [
            this.options.outerBounds.getSouthWest(),
            this.options.outerBounds.getNorthWest(),
            this.options.outerBounds.getNorthEast(),
            this.options.outerBounds.getSouthEast(),
        ];
        (L as any).Polygon.prototype.initialize.call(
            this,
            [outerBoundsLatLngs, latLngs],
            options
        );
    },
});

(L as any).mask = (latLngs:any, options:any) => {
    return new (L as any).Mask(latLngs, options);
};



const MaskLayer =  () => {
    const map = useMap();
  
    
    // const [uzbData, setUzbData] = useState({})


    // const {data}=useQuery({
    //     queryKey: ["uzbekistan_borders"],
    //     queryFn:uzbService.uzbekistan_borders
    // })

    // useEffect(()=>{
    //     console.log(data?.data);
        
    //     if(data?.data) setUzbData(data?.data)
    //     },[data?.data])
    // console.log(uzbData);

//    if(uzbData){
//     const coordsAll = useMemo( async () => {
//         // @ts-ignore
//         const features = uzbData?.features[0].geometry.coordinates;
//         const latLngs = await features
//             .flat()
//             .map((polygon: number[][]) =>
//                 polygon.map((coord: number[]) => new L.LatLng(coord[1],coord[0]))
//             );
//         return latLngs;
//     }, []);

//     useEffect(() => {
//         const maskLayer = (L as any).mask(coordsAll).addTo(map);
//         return () => {
//             map.removeLayer(maskLayer);
//         };
//     }, [coordsAll, map]);

//     return null;
//    }



    const coordsAll = useMemo( () => {
        const features = UzbekistanBorders.features[0].geometry.coordinates;
        const latLngs = features
            .flat()
            .map((polygon: number[][]) =>
                polygon.map((coord: number[]) => new L.LatLng(coord[1], coord[0]))
            );
        return latLngs;
    }, []);

    useEffect(() => {
        const maskLayer = (L as any).mask(coordsAll).addTo(map);

        return () => {
            map.removeLayer(maskLayer);
        };
    }, [coordsAll, map]);

    return null;
};

export default MaskLayer;


// export const outputArray = useMemo(() => {
//     return geoData?.maps_list
//       ?.filter((val: any) => val.geometry)
//       .map((item: any) => {
//         let geometry;
//         try {
//           geometry = JSON.parse(
//             item.geometry?.replaceAll("'", '"') //?? fallbackGeometry
//           );
//         } catch {
//           geometry = JSON.parse(item.geometry )//?? fallbackGeometry);
//         }

//         let region;
//         try {
//           region = JSON.parse(
//             item?.region_name?.replaceAll("'", '"')  //?? fallbackName
//           );
//         } catch {
//           region = JSON.parse(item?.region_name )//?? fallbackName);
//         }

//         let district;
//         try {
//           district = JSON.parse(
//             item?.district_name?.replaceAll("'", '"') //?? fallbackName
//           );
//         } catch {
//           district = JSON.parse(item?.district_name )//?? fallbackName);
//         }

//         return {
//           type: "Feature",
//           id: item.region_id,
//           properties: {
//             region_id: item.region_id,
//             region_name: "uz" ,
//             district_id: item.district_id,
//             district_name:"uz"
//             //   district?.[(queryParams.lang as string) === "uz" ? "kir" : "ru"],
//           },
//           geometry,
//         };
//       });
//   }, [geoData ]); //queryParams?.lang