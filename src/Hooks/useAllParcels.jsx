import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAuth from "./useAuth";

const useAllParcels = (role) => {
    const { users } = useAuth() 
    const axiosPublic = useAxiosPublic()
    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['allparcels'],
        queryFn: () =>
            axiosPublic.get(`/parcels?email=${users.email}&role=${role}`)
                .then((res) => {
                    return res.data
                }
                ).catch(err => {
                    console.log(err)
                })
    })
    return { isLoading, error, data,refetch }
};

export default useAllParcels;