import {useMap} from "react-leaflet";
import {useEffect, useMemo} from "react";
import L from "leaflet";
import UzbekistanBorders from "../../data/uzbekistan-borders.ts";

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