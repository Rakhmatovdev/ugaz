import { useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWithPopover = ({ type = "doughnut" }) => {
  const [anchorPosition, setAnchorPosition] = useState(null);
  const [popoverData, setPopoverData] = useState(null);

  const handleOpenPopover = (event:any, data:any) => {
    const { clientX, clientY } = event.nativeEvent;
    setAnchorPosition({ top: clientY, left: clientX });
    setPopoverData(data);
  };

  const handleClosePopover = () => {
    setAnchorPosition(null);
    setPopoverData(null);
  };

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable default tooltip to use custom popover
      },
    },
    onClick: (event:any, elements:any) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const label = chartData.labels[elementIndex];
        const value = chartData.datasets[0].data[elementIndex];
        handleOpenPopover(event, { label, value });
      }
    },
  };

  return (
    <div className="relative inline-block">
      {type === "doughnut" ? (
        <Doughnut data={chartData} options={chartOptions} />
      ) : (
        <Pie data={chartData} options={chartOptions} />
      )}

      {/* Popover */}
      {anchorPosition && (
        <div
          className="absolute bg-white border border-gray-300 shadow-lg rounded-lg p-4"
          style={{
            top: anchorPosition.top,
            left: anchorPosition.left,
            transform: "translate(-50%, -100%)", // Adjust popover position
          }}
        >
          <button
            className="absolute top-1 right-1 text-gray-500 hover:text-red-500"
            onClick={handleClosePopover}
          >
            &times;
          </button>
          <div className="text-sm text-gray-800">
            <p className="font-semibold">{popoverData?.label}</p>
            <p>{popoverData?.value} votes</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartWithPopover;
