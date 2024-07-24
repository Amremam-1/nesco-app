import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../redux/thunkActions/accountActions";


const useGetUserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      await dispatch(getUserProfile());
    }

    get();
  }, []);

  const { userProfileData, isLoading, error } = useSelector((state) => state.AccountSlice);

  return [userProfileData]
}

export default useGetUserProfile