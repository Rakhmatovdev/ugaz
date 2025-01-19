import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


type ChartState = {
  series: number[]; 
  options: ApexOptions;
};

const ApexChart = () => {
  const [state, setState] = useState<ChartState>({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut', 
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200 
          },
          legend: {
            position: 'bottom' 
          }
        }
      }],
      labels: ['A', 'B', 'C', 'D', 'E'], 
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state?.options} series={state.series} type="donut" />
      </div>
    </div>
  );
}

export default ApexChart;
