import { FaUserEdit } from "react-icons/fa";
import useUsers from "../../../../Hooks/useUsers";
import axios from "axios";
import { useState } from "react";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import {  toast } from "react-toastify";


const MyProfile = () => {
    const { data } = useUsers()
    const axiosPublic = useAxiosPublic()
    const [image, setImage] = useState()
    const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY

    console.log(image)
    const handleProfilePhoto = (id) => {
        console.log(id)
        const formData = new FormData();
        formData.append('image', image, image?.name);
        axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, formData)
            .then((res)=> {
                const userImage = res.data.data.url
                console.log(userImage)
                axiosPublic.patch(`/user/${id}`,{userImage:userImage})
                .then(res=>{
                    console.log(res.data)
                    if(res.data.modifiedCount ==1){
                        return toast('Profile Updated Successfully')
                    }
                })
            })
    }



    return (
        <div className="bg-gray-200 ">
            <div className="">
                {
                    data?.map(user => (
                        <div key={user?._id} className="">
                            <div className="flex flex-col items-center min-h-screen">
                                <div className="relative w-full lg:h-72 lg-52 bg-cover bg-center mb-4">
                                    <img
                                        src={user?.coverPhoto ? user?.coverPhoto : 'https://i.ibb.co/NrxXqSd/1-qho-JVi-JTkrir-Fs-olkc-FCQ.jpg'}
                                        alt="Select a Cover Photo"
                                        className="w-full h-full"
                                    />
                                    <div className="absolute bottom-5 right-5 ">
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center lg:h-20 h-10 lg:w-20 w-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <p className="mb-2 text-lg font-semibold text-gray-500 dark:text-gray-400"><FaUserEdit /></p>
                                                    <p className="text-sm font-semibold max-sm:hidden text-center text-gray-500 dark:text-gray-400">Upload Profile</p>
                                                </div>
                                                <input type="file" name="cover" className="hidden" />
                                            </label>
                                        </div>
                                        <button type="submit" className="font-semibold py-1 bg-white rounded-md px-3 shadow-md my-2">Upload</button>
                                    </div>
                                </div>
                                <div className="relative z-50 lg:w-80 w-48 p-2 justify-center">
                                    <img
                                        src={user?.image}
                                        alt="Profile Picture"
                                        className=" md:w-48 md:h-48 w-28 h-28 object-cover object-center rounded-full shadow-lg -mt-20"
                                    />
                                    <div className="absolute bottom-0 right-5">
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center  w-10 lg:w-20 h-10 lg:h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <p className="mb-2 text-xl font-semibold text-gray-500 dark:text-gray-400"><FaUserEdit /></p>
                                                    <p className="text-sm font-semibold text-center max-sm:hidden text-gray-500 dark:text-gray-400">Upload Profile</p>
                                                </div>
                                                <input type="file"
                                                    onChange={(e) => {
                                                        const selectedImg = e.target.files[0];
                                                        setImage(selectedImg);
                                                    }}
                                                    name="image"
                                                    className="hidden" />
                                            </label>
                                        </div>
                                        <button onClick={() => handleProfilePhoto(user?._id)} className="font-semibold bg-white rounded-md py-1 px-3 shadow-md my-2">Upload</button>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full mt-6 text-center">
                                <h1 className="text-2xl font-semibold">{user?.userName}</h1>
                                <p className="text-gray-600 mt-2">{user?.email}</p>
                                <p className="text-gray-600">Location: City, Country</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );

}

export default MyProfile;