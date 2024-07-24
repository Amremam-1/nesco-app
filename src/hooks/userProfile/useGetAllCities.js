import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../redux/thunkActions/citiesAction";
import { useState } from "react";


const useGetAllCities = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getAllCities());
      setLoading(false);
    }

    run();
  }, []);

  

  const { getAllCitiesRes, isLoading, error } = useSelector(state => state.CitiesSlice);

  // console.log("___**___**  getAllCitiesRes:", getAllCitiesRes)

  let getAllCitiesResData = [];
  // let bestSellingCurrentPage = 0;
  // let bestSellingLastPage = 0;
  // let bestSellingTotal = 0;
  // let bestSellingPagesArray = [];

  if (!loading) {
    if (getAllCitiesRes) {
      if (getAllCitiesRes.status) {
        if (getAllCitiesRes.data) {
          getAllCitiesResData = getAllCitiesRes.data;
        }
      }
    }
  }
  
  return [getAllCitiesResData];
}


export default useGetAllCities;