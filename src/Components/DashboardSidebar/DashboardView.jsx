import AdminDashboard from "../../Layouts/Deshboard/AdminDashboard/AdminDashboard";
import DelivaryManDashboard from "../../Layouts/Deshboard/DelivaryManDeshboard/DelivaryManDashboard";
import UserDeshboard from "../../Layouts/Deshboard/UserDashboard/UserDeshboard";
import useAuth from "../../Hooks/useAuth";
import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";
import { FaHome } from "react-icons/fa";

export default function DashboardView() {
  const { users } = useAuth()
  const { data } = useUsers()

  return (
    <div className=" lg:p-3 space-y-2 w-full  bg-[#e9edc9] dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center p-2 space-x-4">
        <img src={users?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
        <div>
          <h2 className="text-lg font-semibold max-sm:hidden">{users?.displayName}</h2>
        </div>
      </div>
      <div className="divide-y divide-slate-600 dark:divide-gray-700">
        {
          data?.map((user, index) => (user?.role === 'admin') ? <AdminDashboard key={index} /> : (user?.role === 'deliverymen') ? <DelivaryManDashboard key={index} /> : <UserDeshboard key={index} />
          )
        }

        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <div className="flex items-center p-2 space-x-3 rounded-md">
              <Link to="/dashboard" className="flex items-center gap-1">
                <FcSettings className="text-4xl" />
                <span className="max-sm:hidden font-semibold">Settings</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 space-x-3 rounded-md">
              <Link to="/" className="flex items-center gap-1">
                <FaHome className="text-4xl" />
                <span className="max-sm:hidden font-semibold">Home</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}




