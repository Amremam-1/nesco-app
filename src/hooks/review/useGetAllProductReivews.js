import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductReivews } from "../../redux/thunkActions/reviewActions";


const useGetAllProductReivews = (prodId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllProductReivews(prodId));
    }

    run();
  }, []);

  

  const { allProductReivews, isLoading, error } = useSelector(state => state.ReviewSlice);

  let allProductReivewsData = [];


  if (allProductReivews) {
    if (allProductReivews.status) {
      if (allProductReivews.data) {
        allProductReivewsData = allProductReivews.data;
      }
    }
  }
  
  return [allProductReivewsData];
}


export default useGetAllProductReivews;