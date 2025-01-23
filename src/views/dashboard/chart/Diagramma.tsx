import { Select } from "antd";
import ReactApexChart from "react-apexcharts";

const GasVolumeChart = () => {
  const chartOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#2CA58D", "#E63946","#3ABAAA4D",'#FF4E4E4D'], 
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: Array.from({ length: 31 }, (_, i) => i + 1), 
      labels: {
        style: {
          colors: "#6B7280", 
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 150,
      tickAmount: 6,
      labels: {
        style: {
          colors: "#6B7280", 
          fontSize: "12px",
        },
      },
      
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "#374151", 
      },
    },
    tooltip: {
      theme: "light",
    },
    grid: {
      borderColor: "#E5E7EB", 
    },
  
  };

  const series = [
    {
      name: "Приход газа",
      data: [75, 80, 90, 95, 85, 70, 65, 75, 80, 100, 85, 90, 95, 105, 110, 120, 110, 100, 95, 90, 85, 80, 75, 70, 65, 60, 70, 75, 80, 85, 90],
    },
    {
      name: "Реализованный газ",
      data: [70, 75, 85, 90, 80, 65, 60, 70, 75, 105, 80, 85, 90, 100, 105, 115, 105, 95, 90, 85, 80, 75, 70, 65, 60, 55, 65, 70, 75, 80, 85],
    },
    {
      name: "Положительный дисбаланс",
    },
    {
      name: "Отрицательный дисбаланс",
    },
  ];

  return (
    <div className="w-full mx-auto p-4 mt-4 mb-6 bg-white border rounded-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg ml-4 font-semibold text-gray-700 my-0 ">
        Диаграмма объема прихода и реализованного газа
      </h2>
      <Select 
      defaultValue="Линейная_диаграмма"
      className="w-[200px] mr-2"
      >
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
