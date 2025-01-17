import {Select} from "antd";
import {Option} from "antd/lib/mentions";
import CustomMap from "./MapContainer";

import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const Menu = () => {
    return (
        <section className={''}>
            <div className={'mt-[28.5px] ml-5 flex items-center justify-between w-[92.5vw]'}>
                <p className={'text-2xl font-semibold'}>Дашбоард по Республике Узбекистан</p>
                <div className={'flex gap-3'}>
                    <Select
                        style={{ width: 200 }}
                        className="custom-select"
                    defaultValue={'Выбрать_период'}
                    >
                        <Option value="Выбрать_период" >
                            Выбрать период
                        </Option>
                    </Select>
                    <RangePicker
                    bordered={true}
                    defaultValue={[null, null]}
                    className="border"
                    />
                </div>
            </div>
                    <div className={'mt-4 ml-5'}>
                       <CustomMap/>
                    </div>
        </section>
    );
};

export default Menu;