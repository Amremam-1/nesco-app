import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { updateUserProfile } from "../../redux/thunkActions/userActions";


const useUpdateUserProfile = (userData) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  const apiToken = Cookies.get("api_token");

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [updateProfileSuccess, setUpdateProfileSuccess] = useState(null);


  const updateUserProfileHandler = async () => {
    if (apiToken) {
      setLoading(true);
      await dispatch(updateUserProfile(userData));
      setLoading(false);
    } else {
      setShowLoginPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  // useEffect(() => {
  //   updateUserProfileHandler()
  // }, [])


  const { updateUserProfileRes, isLoading, error } = useSelector((state) => state.UserSlice); 
  
  console.log("___updateUserProfileRes:", updateUserProfileRes)

  let updateMessage = "";
  let updatedUserData;

  useEffect(() => {
    if (!loading) {
      if (updateUserProfileRes) {
        updateMessage = updateUserProfileRes.message
        if (updateUserProfileRes.status) {
          updatedUserData = updateUserProfileRes.user
        }
      }
    }
  }, [loading, updateUserProfileRes])



  return [
    updateUserProfileHandler,
    updateUserProfileRes,
    updateMessage,
    updatedUserData
  ]
}

export default useUpdateUserProfile;


