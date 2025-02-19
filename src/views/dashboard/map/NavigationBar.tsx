import { CSSProperties } from "react";
import { Tabs, Collapse, CollapseProps, theme } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";
import BarChart from "../chart/BarChart";
import HugeiconsFuel from '../../../../public/svg/HugeiconsFuel';
import BarChartK from "../chart/BarChartK";
const NavigationTabs: React.FC = () => {
  const { token } = theme.useToken();
  const stations = [
    { name: "Тип топлива", value: 100, id: 1 },
    { name: "Тех. осмотр", value: 52, id: 2 },
    { name: "Давление", value: 12, id: 3 },
  ];
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: '#F8FAFB',
    borderRadius: token.borderRadiusLG,
    border: '1px solid #E5E5E5',
  };
  const Statistica = [
    { name: "Объем реализованного газа", value: "2 100,3", id: 1 },
    { name: "Общая сумма расхода за газ на заправке", value: "100,3 млрд.сум", id: 2 },
    { name: "Кол-во заправленных машин", value: "950 шт.", id: 3 },
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
          <p className="text-sm font-medium">Кол-во нарушений</p>
          <p className="text-[18px] font-semibold">250</p>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-y-3">
          {stations.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className="text-sm">{item.name}</p>
              <p className="font-semibold">
                {item.value} <span className="font-normal">(33%)</span>
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];
  const myitems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: "fuel-1",
        label: (
          <div className="flex gap-x-4 ">  
            <HugeiconsFuel/>
           <div className="">
           <p className="text-sm font-semibold">
                    № 1 Piusi Self Service FM
                  </p>
                  <p className="text-[#69757A] text-[12px] ">
                    Топливо заправочная колонка, 2024
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
    {
      key: "fuel-2",
      label: (
        <div className="flex gap-x-4 ">  
          <HugeiconsFuel/>
         <div className="">
         <p className="text-sm font-semibold">
                  № 2 Piusi Self Service FM
                </p>
                <p className="text-[#69757A] text-[12px] ">
                  Топливо заправочная колонка, 2024
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
    },
    {
        key: "fuel-3",
        label: (
          <div className="flex gap-x-4 ">  
            <HugeiconsFuel/>
           <div className="">
           <p className="text-sm font-semibold">
                    № 3 Piusi Self Service FM
                  </p>
                  <p className="text-[#69757A] text-[12px] ">
                    Топливо заправочная колонка, 2024
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
      },
    {
      key: "fuel-4",
      label: (<>
        <div className="flex gap-x-4 ">  
          <HugeiconsFuel/>
         <div className="">
         <p className="text-sm font-semibold">
                  № 4 Piusi Self Service FM
                </p>
                <p className="text-[#69757A] text-[12px] ">
                  Топливо заправочная колонка, 2024
                </p>
         </div>
        </div>
     </> ),
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
          onChange={onChangee}
          collapsible="icon"
        />
        <BarChartK />
      </div>
      ),
    },
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
   
  );
};

export default NavigationTabs;

