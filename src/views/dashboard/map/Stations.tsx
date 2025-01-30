import { Collapse, CollapseProps } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";

const Stations = () => {
 



  const stations = [
    {
      region_code: "ALL",
      region_name: "Все регионы",
      total_filling_station: 337,
    },
    {
      region_code: "23",
      region_name: "КАРАКАЛПАКСТАН RES",
      total_filling_station: 32,
    },
    {
      region_code: "22",
      region_name: "ХОРЕЗМСКАЯ ОБЛАСТЬ",
      total_filling_station: 29,
    },
    {
      region_code: "21",
      region_name: "НАВОИЙСКАЯ ОБЛАСТЬ",
      total_filling_station: 18,
    },
    {
      region_code: "20",
      region_name: "БУХАРСКАЯ ОБЛАСТЬ",
      total_filling_station: 53,
    },
    {
      region_code: "19",
      region_name: "СУРХАНДАРЬИНСКАЯ ОБЛАСТЬ",
      total_filling_station: 19,
    },
    {
      region_code: "18",
      region_name: "КАШКАДАРЬИНСКАЯ ОБЛАСТЬ",
      total_filling_station: 26,
    },
    {
      region_code: "17",
      region_name: "АНДИЖАНСКАЯ ОБЛАСТЬ",
      total_filling_station: 14,
    },
    {
      region_code: "16",
      region_name: "НАМАНГАНСКАЯ ОБЛАСТЬ",
      total_filling_station: 19,
    },
    {
      region_code: "15",
      region_name: "ФЕРГАНСКАЯ ОБЛАСТЬ",
      total_filling_station: 41,
    },
    {
      region_code: "14",
      region_name: "САМАРКАНДСКАЯ ОБЛАСТЬ",
      total_filling_station: 18,
    },
    {
      region_code: "13",
      region_name: "ДЖИЗАКСКАЯ ОБЛАСТЬ",
      total_filling_station: 3,
    },
    {
      region_code: "12",
      region_name: "СЫРДАРЬИНСКАЯ ОБЛАСТЬ",
      total_filling_station: 5,
    },
    {
      region_code: "11",
      region_name: "ТАШКЕНТСКАЯ ОБЛАСТЬ",
      total_filling_station: 48,
    },
    {
      region_code: "10",
      region_name: "ГОРОД ТАШКЕНТ",
      total_filling_station: 12,
    },
  ];






  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <span style={{ color: "#3ABAAA" }}>Посмотреть по регионам</span>,
      children: (
        <div>
          {stations.filter((omit:any)=>omit.region_code!=="ALL").map((item:any) => (
            <div key={item.region_code} className="flex p-1 justify-between items-center ">
              <p>{item.region_name}</p>
              <p>{item.total_filling_station}</p>
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
      <div className="w-[280px]  rounded-2xl border absolute top-4 left-4 z-[550] bg-white">
        <div className="flex items-center justify-between p-4">
          <p className="text-[18px] font-medium">Всего заправок</p>
          <p className="text-[24px] font-semibold">{stations[0].total_filling_station}</p>
        </div>
        <hr className="mx-4" />
        <div>
          <Collapse
            items={items}
            expandIcon={({ isActive }) => (
              <ArrowDown
                style={{
                  transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            )}
            expandIconPosition="end"
            className="bg-white"
            onChange={onChange}
            collapsible="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Stations;
