import {Select} from "antd";
import {Option} from "antd/lib/mentions";
import CustomMap from "./MapContainer";
// import MapComponent from "./MapUz.tsx";
// import CustomMap from "./MapContainer.tsx";



const Menu = () => {
    return (
        <section className={''}>
            <div className={'mt-[28.5px] ml-5 flex items-center justify-between w-[92.5vw]'}>
                <p className={'text-2xl font-semibold'}>Дашбоард по Республике Узбекистан</p>
                <div className={'flex gap-3'}>
                    <Select
                        style={{ width: 200 }}
                        className="custom-select"
placeholder={'Выбрать период'}
                    >
                        <Option value="russian" >
                            Выбрать период
                        </Option>
                        <Option value="ozbek">O'zbekcha</Option>
                        <Option value="english">English</Option>
                    </Select>
                    <Select
                        style={{ width: 200 }}
                        className="custom-select"
placeholder={'02/06/2024 '}

                    >
                        <Option value="russian" >
                            02/06/2024
                        </Option>
                        <Option value="ozbek">02/06/2024</Option>
                        <Option value="english">02/06/2024</Option>
                    </Select>
                </div>
            </div>
                    <div className={'mt-4 ml-5'}>
{/*<MapComponent/>*/}
                       <CustomMap/>
                    </div>
        </section>
    );
};

export default Menu;