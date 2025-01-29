import Chart from "react-apexcharts";

const BarChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 4,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["01/06", "02/06", "03/06", "04/06", "05/06", "06/06", "07/06"],
    },
    yaxis: {
      categories: ["0", "25", "50", "75"],
    },
    colors: ["#30B18C", "#F15454", "#B2E5E3", "#FFD1CF"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#4A4A4A",
      },
    },
    tooltip: {
      y: {
        formatter: (val:any) => `${val} m³`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Приход газа",
      data: [50, 60, 70, 55, 50, 60, 70],
    },
    {
      name: "Реализованный газ",
      data: [40, 50, 65, 45, 40, 50, 65],
    },
    {
      name: "Положительный дисбаланс",
      data: [40, 50, 65, 45, 40, 50, 65],
    },
    {
      name: "Отрицательный дисбаланс",
      data: [40, 50, 65, 45, 40, 50, 65],
    },
  ];

  return (
    <div className="border rounded-xl">
      <h3 className="px-4 pt-4 text-sm font-medium ">Объем прихода и реализованного газа</h3>
      {/* @ts-ignore */}
      <Chart options={chartOptions} series={chartSeries} type="bar" height={331} />
    </div>
  );
};

export default BarChart;
