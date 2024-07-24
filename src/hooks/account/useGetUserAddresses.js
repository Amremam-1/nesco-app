import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../redux/thunkActions/addressActions";


const useGetUserAddresses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllAddresses());
    }

    run();
  }, []);

  

  const { getAddresses, isLoading, error } = useSelector(state => state.AddressSlice);

  let getAddressesData = [];
  // let categoriesCurrentPage = 0;
  // let categoriesLastPage = 0;
  // let categoriesTotal = 0;
  // let categoriesPagesArray = [];

  if (getAddresses) {
    if (getAddresses.data) {
      getAddressesData = getAddresses.data;
    }
  }
  
  return [getAddressesData];
}

export default useGetUserAddresses