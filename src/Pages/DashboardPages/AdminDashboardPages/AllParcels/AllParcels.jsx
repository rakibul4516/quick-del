import useAllParcels from "../../../../Hooks/useAllParcels";
import { useState } from "react";
import ManageParcel from "./ManageParcel";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import { toast } from "react-toastify";

const AllParcels = () => {
    const { data,refetch } = useAllParcels()
    const [isOpen, setIsOpen] = useState(false);
    const [parcels,setParcels] = useState({})
    const axiosPublic = useAxiosPublic()
    //allparcels = {deliveryAddress,deliveryDate,email,latitude,longitude,parcelType,parcelWeight,phoneNumber,price,receiverName,receiverNumber,senderName,_id}
    //model toggle bar
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    //assign delivery man
    const handleDataUpdate = (data) => {
        setParcels(data)
    }

    const handleFormData = (event) =>{
        event.preventDefault()
        const deliverymen = event.target.deliverymen.value;
        const assignDate = event.target.date.value;
        const status = 'On The Way'
        const {deliveryAddress,deliveryDate,email,latitude,longitude,parcelType,parcelWeight,phoneNumber,price,receiverName,receiverNumber,senderName,_id} = parcels || {}
        const updateData = {deliveryAddress,deliveryDate,email,latitude,longitude,parcelType,parcelWeight,phoneNumber,price,receiverName,receiverNumber,senderName,status,deliverymen,assignDate}
        //update and assing deliveryman
        axiosPublic.put(`/parcels/${_id}`, updateData)
        .then(res => {
            if (res.data.modifiedCount == 1) {
                toast('Assigned Successfully')
                refetch()
            }
        })
    }

    return (
        <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">All Parcels</h2>
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
                            <th className="p-3">Sender</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Booking Date</th>
                            <th className="p-3">Delivery Date</th>
                            <th className="p-3">Cost</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(parcel => (
                                <tr key={parcel._id} className="border-b border-opacity-20 bg-[#fefae0] dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{parcel.senderName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{parcel?.phoneNumber}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.bookingDate}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.deliveryDate}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.price}</p>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>{parcel.status}</span>
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        toggleModal();
                                                        handleDataUpdate(parcel);
                                                    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Manage
                                                </button>
                                                {isOpen && (
                                                    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
                                                        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
                                                        <div className="bg-[#ccd5ae] p-6 rounded-lg z-50 lg:w-8/12 w-full">
                                                            <div className="flex justify-end">
                                                                <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={toggleModal}>
                                                                    X
                                                                </button>
                                                            </div>
                                                            <div className="mt-4">
                                                                <ManageParcel handleFormData={handleFormData} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
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

export default AllParcels;