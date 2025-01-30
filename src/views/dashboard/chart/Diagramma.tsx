import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import ReactApexChart from "react-apexcharts";
import uzbService from "../../../services/uzb.service";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

const GasVolumeChart = () => {
  const { data } = useQuery({
    queryKey: ["sold gas"],
    queryFn: uzbService.sold_gas,
  });

  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    if (data) {
      const processedData = data?.gas.map((item:any) => ({
        date: new Date(item.date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" }),
        station_total: Math.floor(item.station_total),
        receive_total: Math.floor(item.receive_total),
      }));
      setFormattedData(processedData);
    }
  }, [data]);

  const chartOptions = {
    chart: { type: "area", height: 350, toolbar: { show: false } },
    colors: ["#2CA58D", "#E63946"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.2, stops: [0, 90, 100] },
    },
    xaxis: {
      categories: formattedData?.map((item:any) => format(item?.date,'MM/dd')),
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    legend: { position: "bottom", horizontalAlign: "center", labels: { colors: "#374151" } },
    tooltip: { theme: "light" },
    grid: { borderColor: "#E5E7EB" },
  };

  const series = [
    { name: "Приход газа", data: formattedData.map((item:any) => item.receive_total) },
    { name: "Реализованный газ", data: formattedData.map((item:any) => item.station_total) }
  ];

  return (
    <div className="w-full mx-auto p-4 mt-4 mb-6 bg-white border rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg ml-4 font-semibold text-gray-700 my-0">
          Диаграмма объема прихода и реализованного газа
        </h2>
        <Select defaultValue="Линейная_диаграмма" className="w-[200px] mr-2">
          <Select.Option value="Линейная_диаграмма">Линейная диаграмма</Select.Option>
        </Select>
      </div>
      <hr className="border-gray-200 w-[98%] ml-4 mx-auto mt-4" />
      {/* @ts-ignore */}
      <ReactApexChart options={chartOptions} series={series} type="area" height={333} />
    </div>
  );
};

export default GasVolumeChart;