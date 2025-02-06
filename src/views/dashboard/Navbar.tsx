import { message, Select} from "antd";
import Internet from "../../../public/svg/Internet.tsx";
import HeadPhone from "../../../public/svg/ HeadPhone.tsx";
import Help from "../../../public/svg/Help.tsx";
import ArrowDown from "../../../public/svg/ArrowDown.tsx";
import logo from "../../../public/logo.svg";
const { Option } = Select;
import user from "../../../public/svg/user.svg";
import { useState } from "react";
import { ApiOutlined } from "@ant-design/icons";
import axios from "axios";

const Navbar = () => {
    const [Show, setShow] = useState(false)

    const handleChange = (value: string) => {
        console.log(`Selected: ${value}`);
    };

    const sendData = async () => {
        try {
          const response = await axios.post("https://id.egov.uz/api/v1/secure/signIn", {
            login:"rakmatov26",
             password:"wY77ahWiu5"
          });
         localStorage.setItem('accessToken',response.data.data.accessToken)
          setShow(false)
          message.success("Succesfully Authorized Acess Token is saved in LocalStorage"); 
        } catch (error) {
          console.error("Xatolik:", error);        }
      };
      
      
const handleSend= () =>{
    sendData()
}

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
                   <div className={'flex gap-x-2 items-center  relative'} >
                    
                    <img src={user} alt={'user'}  className={'rounded-full border-[#3ABAAA] border-2 w-[28px] h-[28px]'} onClick={()=>setShow(rev=>!rev)}/>
                    <ArrowDown  strokeColor="#171429" onClick={()=>setShow(rev=>!rev)} />
                    {Show && <div onClick={handleSend}  className="absolute w-[105px] cursor-pointer text-purple-700 bg-white top-12 z-[777] px-4 py-2 rounded-xl right-1 border">
                        <ApiOutlined /> ONEID
                    </div>}
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
