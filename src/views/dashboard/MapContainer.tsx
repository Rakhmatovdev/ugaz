import { useQuery } from "@tanstack/react-query";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useMemo } from "react";
import Chart from "react-apexcharts";
import ReactDOM from "react-dom";
import {
  GeoJSON,
  MapContainer as LeafletMapContainer,
  Pane,
  TileLayer,
  useMap,
} from "react-leaflet";
import { TailSpin } from "react-loader-spinner";
import uzbService from "../../services/uzb.service";
import MaskLayer from "./MackLayer";

const ResizeMap = () => {
  const map: any = useMap();
  map._onResize();
  return null;
};
const CustomMap = () => {
  const center: [number, number] = [41.3775, 63.5853];

  const { data, isPending, error } = useQuery({
    queryKey: ["geoJson"],
    queryFn: uzbService.geo_json,
  });

  const outputArray = useMemo(() => {
    return (
      data?.data?.maps_list
        ?.filter((val: any) => val.geometry)
        .map((item: any) => {
          let geometry;
          let region_name;

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

  const onEachFeature = useCallback(
    (feature: any, layer: any) => {
      const bounds = layer.getBounds().getCenter(); // Get center for the marker
      const map = useMap(); // Access the map instance
  
      // Example data for chart and popup
      const digitizedCount = 4;
      const nonDigitizedCount = 20;
      const digitizedPercent = Math.round(
        (digitizedCount / (digitizedCount + nonDigitizedCount)) * 100
      );
      const nonDigitizedPercent = 100 - digitizedPercent;
  
      // Donut Chart React Component
      const DonutChart = () => {
        return (
          <Chart
            options={{
              chart: {
                type: "donut",
              },
              labels: ["Oцифровано", "He oцифровано"],
              colors: ["#4fa94d", "#ff4d4d"],
            }}
            series={[digitizedPercent, nonDigitizedPercent]}
            type="donut"
            width="80"
            height="80"
          />
        );
      };
  
      // Render the React chart to a temporary div
      const tempDiv = document.createElement("div");
      ReactDOM.render(<DonutChart />, tempDiv);
      const chartHtml = tempDiv.innerHTML;
  
      // Add marker with a custom icon
      L.marker(bounds, {
        icon: L.divIcon({
          className: "custom-chart-marker",
          html: `<div>${chartHtml}</div>`, // Insert the rendered chart HTML
          iconSize: [100, 100], // Customize icon size
        }),
      })
        .addTo(map)
        .bindPopup(
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
            </div>`,
          { className: "custom-popup" }
        );
      layer.on("click", () => {
        //@ts-ignore
        const bounds = layer.getBounds();
        map.flyToBounds(bounds, {
          padding: [5, 5],
          duration: 1.5,
        });
      });
      ReactDOM.unmountComponentAtNode(tempDiv);
      tempDiv.remove();
    },
    [] 
  );




  if (error) return <p>Error loading data: something went wrong</p>;

  return (
    <LeafletMapContainer
      center={center}
      zoom={6}
      zoomControl={false}
      className="rounded-xl"
      style={{ width: "100%", height: "600px" }}
      scrollWheelZoom={false}
    >
      <ResizeMap />
      <Pane style={{ zIndex: 500 }} name="">
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      </Pane>

      <Pane name="geoJsonPane">
        {outputArray.length > 0 && (
          <GeoJSON
            key={JSON.stringify(outputArray)}
            data={{
              type: "FeatureCollection",
              //@ts-ignore
              features: outputArray || [],
            }}
            onEachFeature={onEachFeature}
          />
        )}
      </Pane>

      <MaskLayer />
    </LeafletMapContainer>
  );
};

export default CustomMap;