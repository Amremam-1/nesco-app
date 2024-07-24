import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../redux/thunkActions/favoriteActions";


const useRemoveFromFavorite = (prodId) => {
  const dispatch = useDispatch();


  const removeFavoriteHandler = async () => {
    await dispatch(removeFromFavorites(prodId));
  }

// use useEffect to refresh page after one product removed from favorites
  

  const { removeFavorite, isLoading, error } = useSelector(state => state.FavoriteSlice);

  let removeFavoriteData = [];


  if (removeFavorite) {
    if (removeFavorite.status) {
      if (removeFavorite.data) {
        removeFavoriteData = removeFavorite.data;
      }
    }
  }
  
  return [removeFavoriteHandler, removeFavorite, removeFavoriteData];
}
export default useRemoveFromFavorite;