import { useState } from "react";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import useAllParcels from "../../../../Hooks/useAllParcels";
import useAllusers from "../../../../Hooks/useAllusers";
import { toast } from "react-toastify";

const AllUsers = () => {
    const usersdata = useAllusers('user')
    const [users,setusers] = useState(usersdata?.data)
    const {data} = useAllParcels()
    const axiosPublic = useAxiosPublic()
    console.log(usersdata)
    const handleMakeDeliverymen = (id) =>{
        axiosPublic.patch(`/user/${id}`, { setrole: 'deliverymen' })
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount == 1){
                const remainingData = users?.filter(items=>items?._id !==id);
                setusers(remainingData)
                return toast("Deliverymen Added!")

            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleMakeAdmin = (id)=>{
        console.log(id)
        axiosPublic.patch(`/user/${id}`, { setrole: 'admin' })
        .then(res => {
            if(res.data.modifiedCount == 1){
                const remainingData = users?.filter(items=>items?._id !==id);
                setusers(remainingData)
                return toast("Admin added!")
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    console.log(data)
    return (
        <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">All Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700 bg-[#d4a373]">
                        <tr className="text-left">
                            <th className="p-3">User Name</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Total Booked</th>
                            <th className="p-3">Total Amount</th>
                            <th className="p-3">Make Delivery Men</th>
                            <th className="p-3">Make Admin </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => (
                                <tr key={user._id} className="border-b border-opacity-20 bg-[#fefae0] dark:border-gray-700 dark:bg-gray-900">     
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user?.userName}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user?.number?user?.number:'Not avilable'}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user.status}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user.status}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => handleMakeDeliverymen(user?._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >Delivery Man</button>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => handleMakeAdmin(user?._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >Admin</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;