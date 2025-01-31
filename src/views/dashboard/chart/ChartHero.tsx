import ReactApexChart from 'react-apexcharts';
import useStations from '../../../config/hooks/useStation';
import { useQuery } from '@tanstack/react-query';
import uzbService from '../../../services/uzb.service';

const ChartHero: React.FC = () => {


  const {contract_data}=useStations(data=>data)
const {data}=useQuery({
  queryKey:['fuel_dispensers'],
  queryFn:uzbService.fuel_dispensers
})
  const chartData1 = {
    series: [data?data.station_types[0].filling_station_count:78,data?data.station_types[1].filling_station_count: 12,data?data.station_types[2].filling_station_count: 30],
    options: {
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      labels: ['на АГНКС', 'на АЗС','на АГЗС',],
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

  const total=contract_data?contract_data.billing_data.taxed+contract_data.billing_data.not_taxed:0

  const chartData2 = {
    series: [contract_data?contract_data.billing_data.taxed:80, contract_data?contract_data.billing_data.not_taxed:20],
    options: {
      chart: {
        type: 'donut',
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
                <span style="font-weight: 600">${(opts.w.globals.series[opts.seriesIndex]*100/total).toFixed(2)}%</span>
              </div>`
        }
      }
    },
  };

  const chartData3 = {
    series: [contract_data?contract_data.transaction_data.paid_count:78,contract_data?contract_data.transaction_data.not_paid_count:12,contract_data?contract_data.transaction_data.partially_paid_count:30],
    options: {
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Оплачен', 'Не оплачен', 'Частично оплачен'],
      colors: ['#4D9FFF', '#EC6FBB','#FFA500'],
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
        <h4 className='text-[18px] pb-4 font-semibold'>Кол-во заправленных машин</h4>
        <hr />
    {/* @ts-ignore */}
        <ReactApexChart className="mt-4" options={chartData1.options} series={chartData1.series} type="donut" height={140} />
      </div>

      {/* Chart 2 */}
      <div className='w-[33%] h-[231px] p-4 border border-[#e5e5e5] rounded-lg' >
        <h4 className='text-[18px] pb-4 font-semibold'>Биллинг</h4>
        <hr />
          {/* @ts-ignore */}
        <ReactApexChart  className="mt-4" options={chartData2.options} series={chartData2.series} type="donut" height={140} />
      </div>

      {/* Chart 3 */}
      <div className='w-[33%] h-[231px] p-4 border border-[#e5e5e5] rounded-lg'>
        <h4 className='text-[18px] pb-4 font-semibold'>Договора</h4>
        <hr />
          {/* @ts-ignore */}
        <ReactApexChart className="mt-4" options={chartData3.options} series={chartData3.series} type="donut" height={140} />
      </div>
    </div>
  );
};

export default ChartHero;
