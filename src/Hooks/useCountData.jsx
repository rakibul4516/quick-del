import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useCountData = () => {
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState('')
    const [parcels,setParcels] = useState([])
    useEffect(()=>{    
        axiosPublic.get('/countusers')
            .then(res => {
                if (!count) {
                    console.log(res.data)
                    setCount(res.data)
                }
            })
    },[axiosPublic,count])
    useEffect(()=>{
        axiosPublic.get('/parcels')
        .then(res=>{
            if (!count) {
                setParcels(res.data)
            }
        })
    },[axiosPublic,count])
    return {count,parcels};
};

export default useCountData;