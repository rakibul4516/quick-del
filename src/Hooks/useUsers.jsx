import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAuth from "./useAuth";

const useUsers = () => {
    const {users} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { isLoading, refetch, data } = useQuery({
        queryKey: ['usersdata'],
        queryFn: () =>
        axiosPublic.get(`/users?email=${users.email}`)
        .then((res) => {
                return res.data
            }
          ).catch(err=>{
            console.log(err)
          })
      })
    return {isLoading,refetch,data}
};

export default useUsers;