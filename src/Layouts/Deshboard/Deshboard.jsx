import { Outlet } from "react-router-dom";
import DashboardView from "../../Components/DashboardSidebar/DashboardView";


const Deshboard = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-5 grid-cols-4">
                <div className="col-span-1">
                    <DashboardView/>
                </div>
                <div className="lg:col-span-4 col-span-3 ">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;