import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { updateUserProfile } from "../../redux/thunkActions/userActions";
import useGetUserProfile from "../userProfile/useGetUserProfile";

const useRemoveAddress = (addressAlias) => {
  const dispatch = useDispatch();
  const [loadingRemoveAddress, setLoadingRemoveAddress] = useState(true);

  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress,  isLoadingGetUser] = useGetUserProfile();

  const removeAddressHandler = async () => {
    let filteredUserAddresses;
    if (getUserProfileResUserAddress && getUserProfileResUserAddress.length > 0) {
      filteredUserAddresses = getUserProfileResUserAddress.filter((item) => item.alias !== addressAlias);

      const profileData = {
        "name": getUserProfileResUser.name,
        "email": getUserProfileResUser.email,
        "password": "123456789",
        "mobile": getUserProfileResUser.mobile,
        "address": filteredUserAddresses
      }
      setLoadingRemoveAddress(true);
      await dispatch(updateUserProfile(profileData));
      setLoadingRemoveAddress(false);
    }
    console.log("@@@@@@@@@@@@@@@@@@@@@@@ filteredUserAddresses:", filteredUserAddresses);
  }

  return [removeAddressHandler, loadingRemoveAddress]
}

export default useRemoveAddress;