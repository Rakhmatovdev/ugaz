import { Collapse, CollapseProps } from "antd";
import ArrowDown from "../../../../public/svg/ArrowDown";

const Stations = () => {
  const stations = [
    { name: "Город Ташкент", value: 15, id: 1 },
    { name: "Андижанская область", value: 52, id: 2 },
    { name: "Бухарская область", value: 12, id: 3 },
    { name: "Джизакская область", value: 8, id: 4 },
    { name: "Кашкадарьинская область", value: 10, id: 5 },
    { name: "Навоийская область", value: 24, id: 6 },
    { name: "Наманганская область", value: 39, id: 7 },
    { name: "Самаркандская область", value: 36, id: 8 },
    { name: "Сурхандарьинская область", value: 67, id: 9 },
    { name: "Сырдарьинская область", value: 32, id: 10 },
    { name: "Ташкентская область", value: 12, id: 11 },
    { name: "Ферганская область", value: 21, id: 12 },
    { name: "Хорезмская область", value: 15, id: 13 },
    { name: "Респ. Каракалпакстан", value: 13, id: 14 }, // Fixed duplicate id
  ];

  // Calculate total stations dynamically
  const totalStations = stations.reduce((sum, station) => sum + station.value, 0);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <span style={{ color: "#3ABAAA" }}>
      Посмотреть по регионам
    </span>,
      children: (
        <div>
          {stations.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center " 
            >
              <p>{item.name}</p>
              <p>{item.value}</p>
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
          <p className="text-[24px] font-semibold">
            {totalStations}
          </p>
        </div>
        <hr className="mx-4" />
        <div>
          <Collapse
            items={items}
            expandIcon={({ isActive }) => (
              <ArrowDown  style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }} />
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
