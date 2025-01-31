import HugeiconsMenu from "../../../public/svg/HugeiconsMenu.tsx";
import ChartRight from "../../../public/svg/ChartRight.tsx";
import Note05 from "../../../public/svg/Note05.tsx";
import FuelStation from "../../../public/svg/FuelStation.tsx";
import Speed from "../../../public/svg/Speed.tsx";
import Wrench from "../../../public/svg/Wrench.tsx";
import HugeiconsProfil from "../../../public/svg/HugeiconsProfil.tsx";
import {JSX} from "react";
import {Link} from "react-router";

interface Link{
    icon:JSX.Element;
    path:string;
    id:number
}

const Sidebar = () => {
    const myLinks:Link[]=[
        {icon: <HugeiconsMenu/>, path: "/menu",id:1},
        {icon: <ChartRight/>, path: "#",id:2},
        {icon: <Note05/>, path: "#",id:3},
        {icon: <FuelStation/>, path: "#",id:4},
        {icon: <Speed/>, path: "#",id:5},
        {icon: <HugeiconsProfil/>, path: "#",id:6},
        {icon: <Wrench/>, path: "#",id:7},
    ]

    return (
        <div className={'w-16  bg-[#F8FAFB] h-[93.5vh] '}>
          <div className={'flex flex-col pt-5 gap-6 mx-5'}>
              {
                  myLinks?.map((link) => {
                      return (<div key={link.id}>
                          <Link className={''} to={link.path}>  {link.icon}</Link>
                      </div>)
                  })
              }
          </div>
        </div>
    );
};

export default Sidebar;