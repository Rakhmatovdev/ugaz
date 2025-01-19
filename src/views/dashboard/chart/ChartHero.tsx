import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartHero: React.FC = () => {
  const chartData1 = {
    series: [78, 12, 30],
    options: {
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      labels: ['на АГНКС', 'на АГЗС', 'на АЗС'],
      colors: ['#4D9FFF', '#A16EFF', '#FFA723'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 140
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'right',
        markers: {
          radius: 2,
        },
        formatter: function(seriesName:string, opts:any) {
            return `
              <div style="display: flex; justify-content: space-between; align-items: center; width: 180px;">
                <span>${seriesName}</span>
                <span style="font-weight: 600">${opts.w.globals.series[opts.seriesIndex]}</span>
              </div>
            `;
          }
      }
    },
  };

  const chartData2 = {
    series: [80, 20],
    options: {
      chart: {
        type: 'donut',
        events: {
            mounted: function(chartContext: any) {
              const seriesSum = chartContext.opts.series.reduce((a: number, b: number) => a + b, 0);
              const centerText = `
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-size: 18px; font-weight: 600;">
                  ${seriesSum}%
                </div>
              `;
              chartContext.el.insertAdjacentHTML('beforeend', centerText);
            },},
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Есть данные', 'Нет данных'],
      colors: ['#34C38F', '#F46A6A'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 140
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'right',
        markers: {
          radius: 2,
        },
        formatter: function(seriesName: string, opts: any) {
          return ` <div style="display: flex; justify-content: space-between; align-items: center; width: 180px; ">
                <span>${seriesName}</span>
                <span style="font-weight: 600">${opts.w.globals.series[opts.seriesIndex]}%</span>
              </div>`
        }
      }
    },
  };

  const chartData3 = {
    series: [78, 12, 30],
    options: {
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Тип топлива', 'Тех. осмотр', 'Давление'],
      colors: ['#4D9FFF', '#6E7AFF', '#EC6FBB'],
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
      legend: {
        position: 'right',
        markers: {
          radius: 2,
        },
        formatter: function(seriesName: string, opts: any) {
          return `<div style="display: flex; justify-content: space-between; align-items: center; width: 180px; ">
                <span>${seriesName}</span>
                <span style="font-weight: 600">${opts.w.globals.series[opts.seriesIndex]}</span>
              </div>`
        }
      }
    },
  };

  return (
    <div className='flex justify-between gap-4 mt-4'>
      <div className='w-[33%] h-[231px] p-4 border border-[#e5e5e5] rounded-lg' >
        <h4 className='text-[18px] pb-4'>Кол-во заправленных машин</h4>
        <hr />
    {/* @ts-ignore */}
        <ReactApexChart className="mt-4" options={chartData1.options} series={chartData1.series} type="donut" height={140} />
      </div>

      {/* Chart 2 */}
      <div className='w-[33%] h-[231px] p-4 border border-[#e5e5e5] rounded-lg' >
        <h4 className='text-[18px] pb-4'>Полнота данных прихода газа</h4>
        <hr />
          {/* @ts-ignore */}
        <ReactApexChart  className="mt-4" options={chartData2.options} series={chartData2.series} type="donut" height={140} />
      </div>

      {/* Chart 3 */}
      <div className='w-[33%] h-[231px] p-4 border border-[#e5e5e5] rounded-lg'>
        <h4 className='text-[18px] pb-4'>Кол-во нарушений по категориям</h4>
        <hr />
          {/* @ts-ignore */}
        <ReactApexChart className="mt-4" options={chartData3.options} series={chartData3.series} type="donut" height={140} />
      </div>
    </div>
  );
};

export default ChartHero;
