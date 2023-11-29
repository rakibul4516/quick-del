import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../../Axios/useAxiosPublic';
import Swal from 'sweetalert2';

const UpdateParcel = () => {
    const parcel = useLoaderData()
    const [data, setData] = useState({})
    const axiosPublic = useAxiosPublic()


    const { email, senderName, bookingDate, _id } = data || {}
    //Update all data
    const handleFormData = (event) => {
        event.preventDefault()
        const form = event.target;
        const totalPrice = parseInt(form.parcelWeight.value) * 50

        const parcelData = {
            senderName: senderName,
            deliveryAddress: form.deliveryAddress.value,
            deliveryDate: form.deliveryDate.value,
            email: email,
            latitude: parseFloat(form.latitude.value),
            longitude: parseFloat(form.longitude.value),
            parcelType: form.parcelType.value,
            parcelWeight: parseInt(form.parcelWeight.value),
            phoneNumber: parseInt(form.phoneNumber.value),
            price: totalPrice,
            receiverName: form.receiverName.value,
            receiverNumber: parseInt(form.receiverNumber.value),
            status: 'pending',
            bookingDate: bookingDate,
        }
        console.log(parcelData)
        if (_id) {
            axiosPublic.put(`/parcels/${_id}`, parcelData)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Update Successfully",
                    });
                })
        }
    }


    return (
        <form onSubmit={handleFormData} className="w-full  py-10">
            {
                parcel?.map(data => (
                    <fieldset key={data?._id} className="p-6 rounded-md shadow-sm dark:bg-gray-900 lg:w-10/12 w-11/12 bg-[#ccd5ae] mx-auto">
                        <div className="flex justify-center mb-5">
                            <h1 className="text-3xl font-semi-bold">Update Parsel Data</h1>
                        </div>
                        <div className="w-full">
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Sender Name</label>
                                    <input type='text' name="senderName" defaultValue={data?.senderName} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Sender email</label>
                                    <input type="text" name="email" defaultValue={data?.email} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>
                                    </input>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Sender Mobile</label>
                                    <input type='text' name="phoneNumber" defaultValue={data?.phoneNumber} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Parcel Type</label>
                                    <input type="text" name="parcelType" defaultValue={data?.parcelType} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </input>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Parcel Weight</label>
                                    <input type='number' name="parcelWeight" defaultValue={data?.parcelWeight} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Receiver Name</label>
                                    <input type="text" name="receiverName" defaultValue={data?.receiverName} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </input>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Receiver Number</label>
                                    <input type='text' name="receiverNumber" defaultValue={data?.receiverNumber} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Delivery Date</label>
                                    <input type="date" name="deliveryDate" defaultValue={data?.deliveryDate} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </input>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Delivery Address</label>
                                    <input type='text' name="deliveryAddress" defaultValue={data?.deliveryAddress} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Latitude</label>
                                    <input type="text" name="latitude" defaultValue={data?.latitude} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </input>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                                <div className="">
                                    <label className="text-sm px-2">Longitude</label>
                                    <input type='text' name="longitude" defaultValue={data?.longitude} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="">
                                    <label className="text-sm px-2">Total Price</label>
                                    <input type="text" name="price" defaultValue={data?.price} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="submit" onClick={() => setData(data)} className="px-8 py-2 font-semibold rounded bg-[#ffb703] dark:bg-gray-100 dark:text-gray-800">Update</button>
                            </div>
                        </div>
                    </fieldset>
                ))
            }
        </form>
    );
};


export default UpdateParcel;