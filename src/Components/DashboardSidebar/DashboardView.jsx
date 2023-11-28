import AdminDashboard from "../../Layouts/Deshboard/AdminDashboard/AdminDashboard";
import DelivaryManDashboard from "../../Layouts/Deshboard/DelivaryManDeshboard/DelivaryManDashboard";
import UserDeshboard from "../../Layouts/Deshboard/UserDashboard/UserDeshboard";
import useAuth from "../../Hooks/useAuth";
import { FcAutomatic } from "react-icons/fc";
import { Link } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";


export default function DashboardView() {
  const {users} =useAuth()
  const {data} = useUsers()

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
          data?.map((user, index) => (user?.role === 'admin') ? <AdminDashboard key={index} /> : (user?.role === 'deliverymen') ? <DelivaryManDashboard key={index}/> : <UserDeshboard key={index}/>
          )
        }

        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <Link  className="flex items-center p-2 space-x-3 rounded-md">
              <FcAutomatic/>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <button className="flex items-center p-2 space-x-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
