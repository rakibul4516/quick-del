import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useAllusers = (role) => {
    const axiosPublic = useAxiosPublic()
    const { isLoading, error, data } = useQuery({
        queryKey: ['alluser'],
        queryFn: () =>
          axiosPublic.get(`/allusers?role=${role}`)
          .then((res) => {
                return res.data
            }
          ).catch(err=>{
            console.log(err)
          })
      })
    return {isLoading,error,data}
};

export default useAllusers;