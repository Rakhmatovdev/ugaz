import Cancel from '../../../../public/svg/Cancel';
import logoa from '../../../../public/svg/logoa.svg';
import { format } from 'date-fns';
import useStations from '../../../config/hooks/useStation';
import { CSSProperties } from "react";
import { Tabs, Collapse, CollapseProps, theme } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";
import BarChart from "../chart/BarChart";
import HugeiconsFuel from '../../../../public/svg/HugeiconsFuel';
import BarChartK from "../chart/BarChartK";

const Alpha = () => {
  const today=new Date()
  const {setAlphaOneShow,alphaDataOne,kalonkaData}=useStations(data=>data)
console.log(kalonkaData);


  const { token } = theme.useToken();
  const stations = [
    { name: "Имя", value: alphaDataOne?alphaDataOne.owner.first_name:'Jasur', id: 1 },
    { name: "Фамилия", value: alphaDataOne?alphaDataOne.owner.last_name:"Rakhmatov", id: 2 },
    { name: "Телефон", value: alphaDataOne?alphaDataOne.phone: "+998949760926", id: 3 },
  ];
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: '#F8FAFB',
    borderRadius: token.borderRadiusLG,
    border: '1px solid #E5E5E5',
  };
  const Statistica = [
    { name: "Почасовая производительность", value: alphaDataOne?alphaDataOne.hourly_productivity:"0.000", id: 1 },
    { name: "Mаксимальное давление", value: alphaDataOne?alphaDataOne.max_pressure:"0.000", id: 2 },
    { name: "Balance", value: alphaDataOne?alphaDataOne.balance:"0.000", id: 3 },
  ];
  // const totalStations = stations.reduce((sum, station) => sum + station.value, 0);
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const onChangee = (key: string | string[]) => {
    console.log(key);
  };
  const items: CollapseProps["items"] = [
    {
      key: "77",
      label: (
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Owner</p>
          {/* <p className="text-[18px] font-semibold">{format(alphaDataOne?.created_at,"MM/dd/yyyy")}</p> */}
        </div>
      ),
      children: (
        <div className="flex flex-col gap-y-3">
          {stations.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className="text-sm">{item.name}</p>
              <p className="font-semibold">
                {item.value} 
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const myitems:  (panelStyle: CSSProperties) =>  CollapseProps['items'] =  (panelStyle) => [
    kalonkaData[0]?.model &&  {
        key: "fuel-1",
        label: (
          <div className="flex gap-x-4 ">  
            <HugeiconsFuel/>
           <div className="">
           <p className="text-sm font-semibold">
        {kalonkaData.length>0?kalonkaData[0].model:' № 1 Piusi Self Service FM'}
                  </p>
                  <p className="text-[#69757A] text-[12px] ">
                     {kalonkaData.length>0?kalonkaData[0].brand:"Топливо заправочная колонка, 2024"}
                  </p>
           </div>
          </div>
        ),
        style:panelStyle,
        children: (
          <>
          <div className="flex flex-col space-y-3 ">
            {Statistica.map((item) => (
              <div
                className="flex border rounded-xl px-4 py-2 justify-between items-center"
                key={item.id}
              >
                <p className="text-sm font-medium w-[180px]">{item.name}</p>
                <p className="text-[18px] font-semibold">
                  {item.value}{" "}
                  {item.id === 1 && (
                    <>
                      m<span className="align-super text-xs">3</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
         
         <hr />

          <Collapse
            items={items}
            expandIcon={({ isActive }) => (
              <ArrowDown
                className="mt-2"
                style={{
                  transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                }}
                strokeColor="#171429"
              />
            )}
            expandIconPosition="end"
            className="bg-white border my-2 rounded-xl"
            onChange={onChange}
            collapsible="icon"
          />
          <BarChartK />
        </>
        ),
      },
    kalonkaData[1]?.model && {
      key: "fuel-2",
      label: (
        <div className="flex gap-x-4 ">  
          <HugeiconsFuel/>
         <div className="">
         <p className="text-sm font-semibold">
         {kalonkaData.length>0?kalonkaData[1].model:' № 2 Piusi Self Service FM'}
                </p>
                <p className="text-[#69757A] text-[12px] ">
                {kalonkaData.length>0?kalonkaData[1].brand:"Топливо заправочная колонка, 2024"}
                </p>
         </div>
        </div>
      ),
      style:panelStyle,
      children: (
        <div>
        <div className="flex flex-col space-y-3">
          {Statistica.map((item) => (
            <div
              className="flex border rounded-xl px-4 py-2 justify-between items-center"
              key={item.id}
            >
              <p className="text-sm font-medium w-[180px]">{item.name}</p>
              <p className="text-[18px] font-semibold">
                {item.value}{" "}
                {item.id === 1 && (
                  <>
                    m<span className="align-super text-xs">3</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        <Collapse
          items={items}
          expandIcon={({ isActive }) => (
            <ArrowDown
              className="mt-2"
              style={{
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              }}
              strokeColor="#171429"
            />
          )}
          expandIconPosition="end"
          className="bg-white border my-2 rounded-xl"
          onChange={onChange}
          collapsible="icon"
        />
        <BarChartK />
      </div>
      ),
    }
  ]; 


  const tabItems = [
    {
      key: "tab-statistics",
      label: <div className="custom-tab"> <div className="font-medium text-base  ">Статистика</div> </div>,
      children: <div>
      <div className="flex flex-col space-y-3">
        {Statistica.map((item) => (
          <div
            className="flex border rounded-xl px-4 py-2 justify-between items-center"
            key={item.id}
          >
            <p className="text-sm font-medium w-[180px]">{item.name}</p>
            <p className="text-[18px] font-semibold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
  
      <Collapse
        items={items}
        expandIcon={({ isActive }) => (
          <ArrowDown
            className="mt-2"
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
            }}
            strokeColor="#171429"
          />
        )}
        expandIconPosition="end"
        className="bg-white border my-2 rounded-xl"
        onChange={onChange}
        collapsible="icon"
      />
      <BarChart />
    </div>,
    },
    {
      key:"tab-columns",
      label:  <div className="custom-tab"><p className="font-medium text-base">Колонки</p></div>,
      children:  <div>
          <Collapse
      items={myitems(panelStyle)}
      style={{ background: token.colorBgContainer }}
      expandIcon={({ isActive }) => (
        <ArrowDown
          className="mt-4"
          style={{
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
          }}
          strokeColor="#171429"
        />
      )}
      expandIconPosition="end"
      className="my-4  bg-[#F8FAFB]"
      onChange={onChange}
    />
      
  
      </div>
    }
  ]



  return (
    <div>
      <div className="w-[470px] h-[571px] overflow-y-scroll custom-scrollbar rounded-2xl border absolute top-4 p-4  left-4 z-[550] bg-white">
        <div className="flex items-start  justify-between ">
          <div className="flex gap-x-4">
        <img src={logoa} width={60} height={60} alt={'logo'} />
        <div className="flex flex-col justify-between">
            <p className="font-semibold text-xl ">{alphaDataOne?alphaDataOne.name:(<>Alpha Gas</>)}</p>
            <div className="flex gap-2 items-center">
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">{alphaDataOne?alphaDataOne.station_type.key.toUpperCase():(<>АГНКС</>)}</p>
                <p className="text-[12px]  px-3 py-[6px] border border-[#E9E9E9] rounded-full ">Последняя активность: {format(today,'dd/MM/yyyy HH:mm')}</p>
            </div>
        </div>
            </div>
          <button className="text-[24px] font-semibold my-0 " onClick={()=>setAlphaOneShow(false)}>
            <Cancel width={20} height={20} strokeColor="#69757A"/>
          </button>
        </div>
       
    <button className="w-full bg-[#3ABAAA] text-white font-semibold py-[14px] text-sm  rounded-xl my-4">
    Посмотреть отчеты
    </button>
 <div>
          {/* <NavigationTabs/> */}
          <Tabs
    items={tabItems}
      defaultActiveKey="tab-statistics"
      centered
      tabBarStyle={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #E5E5E5",
      }}
      className="custom-tabs"
    />
        </div>
      </div>
    </div>
  );
};

export default Alpha;
