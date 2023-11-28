import { Link } from "react-router-dom";
import { FcContacts,FcDataSheet,FcBusinessman } from "react-icons/fc";


const UserDeshboard = () => {
    return (
        <div className="">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="dark:bg-gray-800 dark:text-gray-50">
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/parcelbooking" className="flex items-center gap-1">
                            <FcContacts className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">Book A Parcel</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/myparcel" className="flex items-center gap-1">
                            <FcDataSheet className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">My Parcels</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                        <Link to="/dashboard/myprofile" className="flex items-center gap-1">
                            <FcBusinessman className="text-4xl"/>
                            <span className="max-sm:hidden font-semibold">My Profile</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default UserDeshboard;