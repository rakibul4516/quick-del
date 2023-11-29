import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
// import useAllusers from "../../../../Hooks/useAllusers";
import { toast } from "react-toastify";
import useCountData from "../../../../Hooks/useCountData";
// import { useLoaderData } from "react-router-dom";

const AllUsers = () => {
    const [users, setusers] = useState([])
    const axiosPublic = useAxiosPublic()
    const [currentPage, setCurrentPage] = useState(1)
    // const { count } = useLoaderData()
    const { count } = useCountData()
    console.log(count)


    const handleMakeDeliverymen = (id) => {
        axiosPublic.patch(`/user/${id}`, { setrole: 'deliverymen' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount == 1) {
                    const remainingData = users?.filter(items => items?._id !== id);
                    setusers(remainingData)
                    return toast("Deliverymen Added!")

                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleMakeAdmin = (id) => {
        console.log(id)
        axiosPublic.patch(`/user/${id}`, { setrole: 'admin' })
            .then(res => {
                if (res.data.modifiedCount == 1) {
                    const remainingData = users?.filter(items => items?._id !== id);
                    setusers(remainingData)
                    return toast("Admin added!")
                }
            })
            .catch(err => {
                console.log(err);
            });
    }



    // //Use pagination 
    console.log(typeof (count?.count))
    const countData = count?.count
    const limit = 5;
    const totalPages = countData ? Math.ceil(parseInt(countData) / limit) : ''
    const pages = [...Array(totalPages).keys()];
    console.log(pages)


    //handle next page 
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    // handle next page 
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    // //Fetch data 
    useEffect(() => {
        // axiosPublic.get(`/allfoods?search=${search}&category=${category}&page=${currentPage}&limit=${limit}`)
        axiosPublic.get(`/allusers?role='user'&page=${currentPage}&limit=${limit}`)
            .then((res) => {
                console.log(res.data)
                setusers(res.data);
            })
    }, [currentPage, axiosPublic])


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
                                            <span>{user?.number ? user?.number : 'Not avilable'}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">

                                            <span></span>

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
                <div className="flex justify-center items-center pb-5">
                    <button onClick={handlePrevPage} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {
                        pages?.map(page => (
                            <button
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className={`${currentPage === page ? 'selected' : null} px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
                                {page}
                            </button>
                        ))
                    }
                    <button onClick={handleNextPage} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;