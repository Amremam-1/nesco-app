import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuCategories } from "../../redux/thunkActions/menuActions";


const useGetAllMenuCategories = (type) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllMenuCategories(type));
    }
    run();
  }, [type, localStorage.getItem("i18nextLng")]);

  

  const { allMenuCategories, isLoading, error } = useSelector(state => state.MenuSlice);

  let allMenuCategoriesData = [];

  // console.log("********************************+++++++--------allMenuCategories: ", allMenuCategories)

  if (allMenuCategories) {
    if (allMenuCategories.data) {
        if (allMenuCategories.data.data) {
          allMenuCategoriesData=allMenuCategories.data.data;
        }
    }
  }
  
  return [allMenuCategoriesData, isLoading];
}

export default useGetAllMenuCategories;
