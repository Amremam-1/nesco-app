import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageData } from "../../redux/thunkActions/pagesDataActions";


const useGetHomePageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getHomePageData());
    }
    run();
  }, []);

  

  const { getHomePageDataRes, isLoading, error } = useSelector(state => state.pagesDataSlice);

  let homePageData = [];

//   console.log("********************************+++++++--------getHomePageDataRes: ", getHomePageDataRes)

  if (getHomePageDataRes) {
    if (getHomePageDataRes.data) {
        if (getHomePageDataRes.data.data) {
            if (getHomePageDataRes.data.data[0]) {
                homePageData=getHomePageDataRes?.data?.data[0]
            }
        }
    }
  }
  
  return [homePageData];
}
export default useGetHomePageData;