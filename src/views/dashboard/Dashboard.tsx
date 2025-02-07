import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import {Outlet} from "react-router";
const Dashboard = () => {
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