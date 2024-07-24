import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/thunkActions/favoriteActions";


const useGetFavorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getFavorites());
    }

    run();
  }, []);

  

  const { favoritesProducts, isLoading, error } = useSelector(state => state.FavoriteSlice);

  console.log("___**___**___favoritesProducts:", favoritesProducts)

  let favoritesProductsData = [];
  // let bestSellingCurrentPage = 0;
  // let bestSellingLastPage = 0;
  // let bestSellingTotal = 0;
  // let bestSellingPagesArray = [];

  if (favoritesProducts) {
    if (favoritesProducts.status) {
      if (favoritesProducts.data) {
        favoritesProductsData = favoritesProducts.data;
      }
    }
  }
  
  return [favoritesProductsData];
}


export default useGetFavorite;