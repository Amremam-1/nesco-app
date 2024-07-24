import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "../../utils/usefulFunctions";
import { getAllProducts } from "../../redux/thunkActions/categoriesActions";
import { useState } from "react";


const useGetAllProducts = (pageNum, catId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      console.log("(1)_Distatching all Products-----");
      setLoading(true);
      await dispatch(getAllProducts(
        {
          pageNum: pageNum,
          params: {"category_id": catId}
        }
      ));
      setLoading(false);
    }

    run();
  }, [localStorage.getItem("i18nextLng")]);

  

  const { getAllProductsRes, isLoading, error } = useSelector(state => state.CategoriesSlice);
  console.log("____( ALL )____ getAllProductsRes", getAllProductsRes);

  let getAllProductsResData = [];

  if (getAllProductsRes) {
    if (getAllProductsRes.status) {
      if (getAllProductsRes.data) {
        getAllProductsResData = getAllProductsRes.data;
      }
    }
  }
  
  return [getAllProductsResData];
}

export default useGetAllProducts;