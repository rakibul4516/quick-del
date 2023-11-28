import { Link } from "react-router-dom";
import { FcComboChart, FcConferenceCall, FcDataSheet } from "react-icons/fc";


const AdminDashboard = () => {
    return (
        <div className="">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="dark:bg-gray-800 dark:text-gray-50">
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/allparcels" className="flex items-center gap-1">
                            <FcDataSheet className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">All Parcels</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/allusers" className="flex items-center gap-1">
                            <FcConferenceCall className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">All Users</span>
                        </Link>
                    </div>
                </li>
                <li> 
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/alldeliverymen" className="flex items-center gap-1">
                            <FcConferenceCall className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">All DeliveryMen</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/statistics" className="flex items-center gap-1">
                            <FcComboChart className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">Statistics</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AdminDashboard;