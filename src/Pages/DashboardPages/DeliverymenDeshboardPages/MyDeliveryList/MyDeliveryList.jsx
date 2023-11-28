// import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import { useState } from "react";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import useDeliveryData from "../../../../Hooks/useDeliveryData";
import DeliverLocation from "./DeliverLocation";
import useUsers from "../../../../Hooks/useUsers";
import { toast } from "react-toastify";


const MyDeliveryList = () => {
    const { refetch } = useUsers()
    const [isOpen, setIsOpen] = useState(false);
    const axiosPublic = useAxiosPublic()
    const { parcels, totalDelivery, id } = useDeliveryData()
    const parcelData = parcels?.filter((item) =>item?.status =='On The Way')
    //allparcels = {deliveryAddress,deliveryDate,email,latitude,longitude,parcelType,parcelWeight,phoneNumber,price,receiverName,receiverNumber,senderName,_id}
    //model toggle bar
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    //Confirm delivery 
    const handleDeliver = (items) => {
        const status = 'Delivered';

        const { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, deliverymen, assignDate, _id } = items || {};

        const parcelData = { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, deliverymen, assignDate, status };
        console.log(parcelData);

        const totalDeliver = parseInt(totalDelivery) + 1;

        if (_id) {
            axiosPublic.put(`/parcels/${_id}`, parcelData)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.modifiedCount === 1) {
                        axiosPublic.patch(`/users/${id}`, { totalDeliver: totalDeliver })
                            .then(() => {
                                refetch();
                                return toast("Delivered Succesfully!")
                            })
                    }
                })
        }

    }


    const handleCancel = (items) => {
        console.log(items);
        const status = 'Canceled';

        const { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, deliverymen, assignDate, _id } = items || {};

        const parcelData = { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, deliverymen, assignDate, status };


        if (_id) {
            axiosPublic.put(`/parcels/${_id}`, parcelData)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.modifiedCount === 1) {
                                return toast("Canceled Succesfully!")
                    }
                })
        }

    }


    // const handleFormData = (event) => {
    //     event.preventDefault()
    //     const deliverymen = event.target.deliverymen.value;
    //     const assignDate = event.target.date.value;
    //     const status = 'On The Way'
    //     console.log(deliverymen, assignDate)
    //     const { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, _id } = parcels || {}
    //     const updateData = { deliveryAddress, deliveryDate, email, latitude, longitude, parcelType, parcelWeight, phoneNumber, price, receiverName, receiverNumber, senderName, status, deliverymen, assignDate }
    //     console.log('update data', updateData)
    //     //update and assing deliveryman
    //     axiosPublic.put(`/parcels/${_id}`, updateData)
    //         .then(res => {
    //             if (res.data.modifiedCount == 1) {
    //                 console.log('Assigned Successfully', res.data)
    //                 refetch()
    //             }
    //         })
    // }

    return (
        <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold">My Delivery List</h2>
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
                            <th className="p-3">Sender Name</th>
                            <th className="p-3">Receivers Name</th>
                            <th className="p-3">Sender Phone</th>
                            <th className="p-3">Requested Date</th>
                            <th className="p-3">Approximate Date</th>
                            <th className="p-3">Recievers phone</th>
                            <th className="p-3">Receivers Address</th>
                            <th className="p-3">Cancel</th>
                            <th className="p-3">Deliver</th>
                            <th className="p-3">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcelData?.map(parcel => (
                                <tr key={parcel._id} className="border-b border-opacity-20 bg-[#fefae0] dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{parcel.senderName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{parcel?.receiverName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.phoneNumber}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.deliveryDate}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.assignDate}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel?.receiverNumber}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{parcel.deliveryAddress}</p>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => handleCancel(parcel)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >Cancel</button>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => handleDeliver(parcel)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >Deliver</button>
                                    </td>
                                    <td className="p-3">
                                        <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        toggleModal();
                                                    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Location
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
                                                                <DeliverLocation />
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

export default MyDeliveryList;