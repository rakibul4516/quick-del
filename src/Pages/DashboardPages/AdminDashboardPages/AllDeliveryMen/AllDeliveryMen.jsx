import useAllusers from "../../../../Hooks/useAllusers";
import useReviews from "../../../../Hooks/useReviews";

const AllDeliveryMen = () => {
    const { data } = useAllusers('deliverymen')
    const reviews=useReviews('')
    console.log(reviews)
    return (
        <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">All Deliverymens</h2>
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
                            <th className="p-3">Delivery Man's Name</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Number of delivered</th>
                            <th className="p-3">Average review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(user => (
                                <tr key={user._id} className="border-b  border-opacity-20 bg-[#fefae0] dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user?.userName}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{user?.number}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{(user.totalDeliver > 0) ? user?.totalDeliver : 0}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            {
                                                    <span>{reviews?.length}</span>
                                            }
                                        </span>
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

export default AllDeliveryMen;