import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItemDetails } from "../../redux/thunkActions/menuActions";


const useGetMenuItemDetails = (item_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getMenuItemDetails(item_id));
    }
    run();
  }, [item_id, localStorage.getItem("i18nextLng")]);

  

  const { menuItemDetails, isLoading, error } = useSelector(state => state.MenuSlice);

  let menuItemDetailsData = [];

  console.log("********************************+++++++--------menuItemDetails: ", menuItemDetails)

  if (menuItemDetails) {
    if (menuItemDetails.data) {
        if (menuItemDetails.data.data) {
          menuItemDetailsData = menuItemDetails.data.data;
        }
    }
  }
  
  return [menuItemDetailsData, isLoading];
}


export default useGetMenuItemDetails