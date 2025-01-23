import {  Collapse, CollapseProps } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";
import Cancel from '../../../../public/svg/Cancel';
import BarChart from "../chart/BarChart";
import NavigationTabs from "./NavigationBar";

const Alpha = () => {
  const stations = [
    { name: "Тип топлива", value: 100, id: 1 },
    { name: "Тех. осмотр", value: 52, id: 2 },
    { name: "Давление", value: 12, id: 3 }]
    
    const Statistica=[
        { name: "Объем реализованного газа", value: "2 100,3", id: 1 },
        { name: "Общая сумма расхода за газ на заправке", value: "100,3 млрд.сум", id: 2 },
        { name: "Кол-во заправленных машин", value: "950 шт.", id: 3 },
    ]     
    
  const totalStations = stations.reduce((sum, station) => sum + station.value, 0);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <div className="flex justify-between items-center">
     <p className="text-sm font-medium "> Кол-во нарушений</p>
     <p className="text-[18px] font-semibold">250</p>
    </div>,
      children: (
        <div className="flex flex-col gap-y-3">
          {stations.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center " 
            >
              <p className="text-sm">{item.name}</p>
              <p className=" font-semibold">{item.value} <span className="font-normal ">(33%)</span></p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div>
      <div className="w-[465px] h-[571px] overflow-y-scroll custom-scrollbar rounded-2xl border absolute top-4 p-4  left-4 z-[550] bg-white">
        <div className="flex items-start  justify-between ">
          <div className="flex gap-x-4">
        <img src={'/public/svg/logoa.svg'} width={60} height={60} alt={'logo'} />
        <div className="flex flex-col justify-between">
            <p className="font-semibold text-xl ">Alpha Gas</p>
            <div className="flex gap-2">
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">АГНКС</p>
                <p className="text-[12px]  px-3 py-[6px] border border-[#E9E9E9] rounded-full">Последняя активность: 22/11/2024 11:19</p>
            </div>
        </div>
            </div>
          <button className="text-[24px] font-semibold my-0 ">
            <Cancel width={20} height={20} strokeColor="#69757A"/>
          </button>
        </div>
       
    <button className="w-full bg-[#3ABAAA] text-white font-semibold py-[14px] text-sm  rounded-xl my-4">
    Посмотреть отчеты
    </button>
 <div>
          <NavigationTabs/>
        </div>
      </div>
    </div>
  );
};

export default Alpha;
