import { FcDataSheet, FcVoicePresentation } from "react-icons/fc";
import { Link } from "react-router-dom";


const DelivaryManDashboard = () => {
    return (
        <div className="">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="dark:bg-gray-800 dark:text-gray-50">
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/mydeliverylist" className="flex items-center gap-1">
                            <FcDataSheet className="text-4xl" />
                            <span className="max-sm:hidden font-semibold">Delivery List</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/myreviews" className="flex items-center gap-1">
                            <FcVoicePresentation className="text-4xl" />
                            <span className="max-sm:hidden font-semibold">My Reviews</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DelivaryManDashboard;