import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateAddress } from "../../redux/thunkActions/addressActions";


const useUpdateAddress = (addressId) => {
  const dispatch = useDispatch();


  const updateAddressHandler = async () => {
    // await dispatch(updateAddress(addressId));
  }


  const { updatedAddress, isLoading, error } = useSelector(state => state.AddressSlice);

  let updatedAddressData = [];
  // let categoriesCurrentPage = 0;
  // let categoriesLastPage = 0;
  // let categoriesTotal = 0;
  // let categoriesPagesArray = [];

  if (updatedAddress) {
    if (updatedAddress.data) {
      updatedAddressData = updatedAddress.data;
    }
  }
  
  return [updateAddressHandler, updatedAddressData];
}

export default useUpdateAddress