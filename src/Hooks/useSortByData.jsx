import { useEffect, useState } from "react";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useSortByData = () => {
    const axiosPublic = useAxiosPublic();
    const [data,setdata] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('/averagecount');
                if(!data){
                    setdata(response?.data)}

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 

    }, [axiosPublic,data]);
    return data

};

export default useSortByData;


