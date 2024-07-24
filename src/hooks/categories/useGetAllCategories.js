import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "../../utils/usefulFunctions";
import { getAllCategories } from "../../redux/thunkActions/categoriesActions";
import { useState } from "react";

const useGetAllCategories = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getAllCategories());
      setLoading(false);
    }
    run();
  }, [localStorage.getItem("i18nextLng")]);

  const { categories, isLoading, error } = useSelector(state => state.CategoriesSlice);
  let categoriesData = [];

  if (categories) {
    if (categories.status) {
      if (categories.data) {
        categoriesData = categories.data.data;
      }
    }
  }
  
  return [categoriesData];
}
export default useGetAllCategories;