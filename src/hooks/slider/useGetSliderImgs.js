import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImgs } from "../../redux/thunkActions/sliderActions";


const useGetSliderImgs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      // console.log("------1----------Dispatch Action-----")
      await dispatch(getSliderImgs());
    }

    run();
  }, []);

  
  const { sliderImgs, isLoading, error } = useSelector(state => state.SliderSlice);
  // console.log("------7----------Access res (action.payload) from slider slice-----")

  let sliderImgsData = [];


  if (sliderImgs) {
    if (sliderImgs.status && sliderImgs.data) {
      sliderImgsData = sliderImgs.data.data;
    }
  }
  
  return [sliderImgsData, isLoading, error];
}

export default useGetSliderImgs;