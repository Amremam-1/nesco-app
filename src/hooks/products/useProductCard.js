import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/thunkActions/cartActions";
import { addToFavorite } from "../../redux/thunkActions/favoriteActions";
import { useEffect } from "react";

const useProductCard = (prodId) => {
  const dispatch = useDispatch();
  const apiToken = Cookies.get("api_token");

  const [showBtns, setShowBtns] = useState(apiToken ? true : false);
  const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
  const [isAddToFavClicked, setIsAddToFavClicked] = useState(false);
  const [loadingForCart, setLoadingForCart] = useState(true);
  const [loadingForFav, setLoadingForFav] = useState(true);

  const addProdToCartHandler = async () => {
    setLoadingForCart(true);
    await dispatch(addToCart(
      {
        product_id: prodId,
        quantity: 1
      }
    ));
    setLoadingForCart(false);
  };

  const addProdToFavHandler = async () => {
    setLoadingForFav(true);
    await dispatch(addToFavorite(prodId));
    setLoadingForFav(false);
  };

  const { addToCartRes } = useSelector((state) => state.CartSlice); 
  
  useEffect(() => {
    if (!loadingForCart) {
      if (addToCartRes) {
        if (addToCartRes.status) {
          setIsAddToCartClicked(true);
        }
      }
    }
  }, [loadingForCart, addToCartRes])
  
  const { addTofavorites } = useSelector((state) => state.FavoriteSlice); 

  useEffect(() => {
    if (!loadingForFav) {
      if (addTofavorites) {
        if (addTofavorites.status) {
          setIsAddToFavClicked(true);
        }
      } 
    }
  }, [loadingForFav, addTofavorites])

  return [
    showBtns,
    isAddToCartClicked,
    isAddToFavClicked,
    addProdToCartHandler,
    addProdToFavHandler
  ];
}

export default useProductCard;