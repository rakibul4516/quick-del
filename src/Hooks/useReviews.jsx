import useAxiosPublic from "../Axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useReviews = (id) => {
    const axiosPublic = useAxiosPublic()
    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
          axiosPublic.get(`/reviews?id=${id}`)
          .then((res) => {
                return res.data
            }
          )
      })
    return {isLoading,error,data}
};
export default useReviews;