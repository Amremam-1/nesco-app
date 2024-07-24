import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuCategoryItems } from "../../redux/thunkActions/menuActions";


const useGetMenuCategoryItems = (category_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getMenuCategoryItems(`?category_id=${category_id}`));
    }
    run();
  }, [category_id, localStorage.getItem("i18nextLng")]);

  

  const { menuCategoryItems, isLoading, error } = useSelector(state => state.MenuSlice);

  let menuCategoryItemsData = [];
  let selectedCategory = ''

  console.log("********************************+++++++--------menuCategoryItems: ", menuCategoryItems)

  if (menuCategoryItems) {
    if (menuCategoryItems.data) {
        if (menuCategoryItems.data?.category) {
          selectedCategory = menuCategoryItems.data?.category;
        }
        if (menuCategoryItems.data.data) {
          menuCategoryItemsData=menuCategoryItems.data.data;
        }
    }
  }
  
  return [menuCategoryItemsData, selectedCategory, isLoading];
}

export default useGetMenuCategoryItems;
