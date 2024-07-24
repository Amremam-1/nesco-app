import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../redux/thunkActions/faqsActions";


const useGetFaqs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getFaqs());
    }

    run();
  }, []);

  

  const { faqs, isLoading, error } = useSelector(state => state.FaqsSlice);

  let faqsData = [];


  if (faqs) {
    if (faqs.data) {
      faqsData = faqs.data;
    }
  }
  
  return [faqsData, isLoading, error];
}

export default useGetFaqs;