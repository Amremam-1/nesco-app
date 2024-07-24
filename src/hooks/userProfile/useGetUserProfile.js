import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUserProfile } from "../../redux/thunkActions/userActions";
import Cookies from "js-cookie";


const useGetUserProfile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const run = async () => {
      // setLoading(true);
      await dispatch(getUserProfile({
        "token": Cookies.get("api_token")
      }));
      // setLoading(false);
    }

    run();
  }, [localStorage.getItem("i18nextLng")]);

  
  
  
  const { getUserProfileRes, isLoading, error } = useSelector(state => state.UserSlice);

  console.log("_____====_____getUserProfileRes:", getUserProfileRes);

  let getUserProfileResUser = [];
  let getUserProfileResUserAddress = [];

  if (getUserProfileRes) {
    if (getUserProfileRes.status) {
      if (getUserProfileRes.user) {
        getUserProfileResUser = getUserProfileRes.user
        if (getUserProfileRes.user.address) {
          getUserProfileResUserAddress = getUserProfileRes.user.address;
        }
      } 
    } 
  }

  
  
  return [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoading];
}


export default useGetUserProfile