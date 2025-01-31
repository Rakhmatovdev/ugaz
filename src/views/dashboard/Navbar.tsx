import { Select} from "antd";
import Internet from "../../../public/svg/Internet.tsx";
import HeadPhone from "../../../public/svg/ HeadPhone.tsx";
import Help from "../../../public/svg/Help.tsx";
import ArrowDown from "../../../public/svg/ArrowDown.tsx";
import logo from "../../../public/logo.svg";
const { Option } = Select;
import user from "../../../public/svg/user.svg";

const Navbar = () => {
    const handleChange = (value: string) => {
        console.log(`Selected: ${value}`);
    };

    return (
        <div>
            <div className={'flex px-4 justify-between py-[10px] items-center  border-b'}>
                <div className="flex gap-x-2 items-center">
                    <img src={logo} alt={'logo'} />
                    <p className="logo">uGaz</p>
                </div>
                <div className="flex items-center gap-x-6">
                   <HeadPhone/>
                    <Help/>

                    <Select
                        style={{ width: 135 }}
                        className="custom-select"
                        onChange={handleChange}
                        defaultValue="russian"
                        prefix={<Internet/>}
                    >
                        <Option value="russian" >
                            Русский
                        </Option>
                        <Option value="ozbek">O'zbekcha</Option>
                        <Option value="english">English</Option>
                    </Select>
                   <div className={'flex gap-x-2 items-center'}><img src={user} alt={'user'}  className={'rounded-full border-[#3ABAAA] border-2 w-[28px] h-[28px]'}/>
                    <ArrowDown  strokeColor="#171429"/></div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
