import { useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useCountData = () => {
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState('')
    const [parcels,setParcels] = useState([])
    axiosPublic.get('/countusers')
        .then(res => {
            console.log(res)
            if (!count) {
                setCount(res.data)
            }
        })
    
    axiosPublic.get('/parcels')
    .then(res=>{
        console.log(res)
        if (!count) {
            setParcels(res.data)
        }
    })
    return {count,parcels};
};

export default useCountData;