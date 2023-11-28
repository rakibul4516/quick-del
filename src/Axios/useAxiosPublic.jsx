import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../Auth/AuthProvider";
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});
const useAxiosPublic = () => {
     // const { signoutUser } = useContext(AuthContext)

  // instance.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },function (error) {
  //     if (error.response.status === 401 || error.response.status === 403) {
  //       signoutUser()
  //     }
  //   }
  // )

  return instance;
};

export default useAxiosPublic;