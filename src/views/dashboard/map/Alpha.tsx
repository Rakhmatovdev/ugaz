import {  Collapse, CollapseProps } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";
import Cancel from '../../../../public/svg/Cancel';

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
      <div className="w-[465px]  rounded-2xl border absolute top-4 left-4 z-[550] bg-white">
        <div className="flex items-start  justify-between p-4 ">
          <div className="flex gap-x-4">
        <img src={'/public/svg/logo.svg'} width={60} height={60} alt={'logo'} />
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
        
        <div>
      

    <div className="px-4 flex flex-col space-y-3 ">
        {Statistica.map((item) => ( <div className="flex border rounded-xl px-4 py-2 justify-between items-center" key={item.id}>
     <p className="text-sm font-medium w-[180px]"> {item.name} </p>
     <p className="text-[18px] font-semibold">{item.value} {item.id==1 && <>m<span className="align-super text-xs">3</span></>}</p>
    </div>))}
    </div>
          <Collapse
            items={items}
            expandIcon={({ isActive }) => (
              <ArrowDown  className="mt-2" style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}  strokeColor="#171429"/>
            )}
            expandIconPosition="end"
            className="bg-white border mx-4 my-2 rounded-xl"
            onChange={onChange}
        collapsible="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Alpha;
