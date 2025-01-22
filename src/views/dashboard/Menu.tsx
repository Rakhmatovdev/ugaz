import {Select} from "antd";
import CustomMap from "./MapContainer";
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';
import ChartHero from "./chart/ChartHero";
import CardGaz from "./chart/CardGaz";
import GasVolumeChart from "./chart/Diagramma";
import Stations from "./chart/Stations";
import AllSum from "./map/AllSum";
import FilterA from "./map/FilterA";

const { RangePicker } = DatePicker;
const Menu = () => {
    const today: Dayjs = dayjs();
  const tenDaysAgo: Dayjs = dayjs().subtract(10, 'days');
    return (
        <section className={'h-[93.5vh]  overflow-y-scroll scrollbar-hide w-[94vw] scroll-smooth '}>
            <div className={'mt-[24px] ml-5 flex items-center justify-between  '}>
                <p className={'text-2xl font-semibold'}>Дашбоард по Республике Узбекистан</p>
                <div className={'flex gap-3'}>
                    <Select
                        style={{ width: 200 }}
                        className="custom-select"
                    defaultValue={'Выбрать_период'}
                    >
                        
                        <Select.Option value="С_начала_дня" >
                        С начала дня
                        </Select.Option>
                        <Select.Option value="С_начала_месяца" >
                        С начала месяца
                        </Select.Option>
                        <Select.Option value="С_начала_года" >
                        С начала года                       
                         </Select.Option>
                         <Select.Option value="Выбрать_период" >
                            Выбрать период
                        </Select.Option>
                    </Select>
                    <RangePicker
                    format="YYYY/MM/DD"
                    defaultValue={[tenDaysAgo, today]}
                    className="border"
                    />
                </div>
            </div>
                    <div className={'mt-4 ml-5 relative'}>
                       <CustomMap/>
<ChartHero/>
<CardGaz/>
<GasVolumeChart/>
<Stations/>
<AllSum/>
<FilterA/>
                    </div>
        </section>
    );
};

export default Menu;