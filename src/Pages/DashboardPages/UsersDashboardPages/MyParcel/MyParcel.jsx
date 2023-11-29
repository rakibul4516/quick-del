import useAllParcels from "../../../../Hooks/useAllParcels";
import { FaCreditCard, FaEdit } from "react-icons/fa";
import { MdCancel, MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import useAuth from "../../../../Hooks/useAuth";

const MyParcel = () => {
  const {users} = useAuth()
  const { refetch } = useAllParcels()
  const axiosPublic = useAxiosPublic()
  const [isOpen, setIsOpen] = useState(false);
  const [parcelStatus, setStatus] = useState('')
  const [parcels, setparcels] = useState([])

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  //Cancel parcel
  const handleCancelParcel = (id) => {
    axiosPublic.delete(`/parcels/${id}`)
      .then(res => {
        console.log(res.data)
        refetch()
      })
  }

  useEffect(() => {
    console.log(parcelStatus)

    axiosPublic.get(`/allparcels?email=${users.email}&parcelStatus=${parcelStatus}`)
      .then((res) => {
        setparcels(res.data);
        refetch()
      })
  }, [axiosPublic, parcelStatus, refetch,users.email])

  const handleCategory = (e) => {
    console.log(e.target.value)
    const selectedStatus = e.target.value;
      setStatus(selectedStatus);
  }



  return (
    <div className=" p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold">My Parcels</h2>
      <div className="overflow-x-auto">
        <div>
          <select onChange={handleCategory} name="category" className="block w-48 px-4 py-2 my-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            <option value=''>Filter by Status</option>
            <option value="pending">Pending</option>
            <option value="Canceled">Canceled</option>
            <option value="On The Way">On The Way</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
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
              <th className="p-3">Parcel Type</th>
              <th className="p-3">Requested Date</th>
              <th className="p-3">Approximate Date</th>
              <th className="p-3">Booking Date</th>
              <th className="p-3">Delivery Men ID</th>
              <th className="p-3">Booking Status</th>
              <th className="p-3">Update/Review</th>
              <th className="p-3">Cancel/Pay</th>
            </tr>
          </thead>
          <tbody>
            {
              parcels?.map(parcel => (
                <tr key={parcel._id} className="border-b border-opacity-20 bg-[#fefae0] dark:border-gray-700 dark:bg-gray-900">
                  <td className="p-3">
                    <p className="dark:text-gray-400">{parcel?.parcelType}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-400">{parcel?.deliveryDate}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-400">{parcel?.assignDate}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-400">{parcel?.bookingDate}</p>
                  </td>
                  <td className="p-3">
                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <p className="dark:text-gray-400">{parcel?.deliverymen}</p>
                    </span>
                  </td>
                  <td className="p-3">
                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <p className="dark:text-gray-400">{parcel.status}</p>
                    </span>
                  </td>
                  <td className="p-3">
                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{(parcel.status === 'pending') ? <Link to={`/dashboard/updateparcel/${parcel._id}`} className="flex items-center gap-1"><FaEdit /> Edit</Link> :
                        <div>
                          <button
                            onClick={() => {
                              toggleModal();
                            }}
                          >
                            <p className="flex items-center gap-1"><MdRateReview /> Review</p>
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
                                  <ReviewForm deliverymen={parcel?.deliverymen} />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                      }</button>
                    </span>
                  </td>
                  <td className="p-3">
                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{(parcel.status === 'pending') ? <p onClick={() => handleCancelParcel(parcel._id)} className="flex items-center gap-1"><MdCancel /> Cancel</p> : <Link to={`/dashboard/payment/${parcel?._id}`}  className="flex items-center gap-1"><FaCreditCard /> Pay</Link>}</button>
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
}

export default MyParcel;