import {useAppSelector} from "../../config/hooks/useRedux.ts";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import {Outlet} from "react-router";
const Dashboard = () => {
    const count = useAppSelector((state) => state.counter.value)
    console.log(count)
    return (
        <div>
            <Navbar/>
{/*Dashboard*/}
            <div className={'flex'}>
            <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;