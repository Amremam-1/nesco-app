import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getCartItems, removeFromCart } from "../../redux/thunkActions/cartActions";
import Cookies from "js-cookie";
import { useEffect } from "react";


const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
  const [removeFromCartSuccess, setRemoveFromCartSuccess] = useState(null);
  const apiToken = Cookies.get("api_token");


  const removeFromCartHandler = async (cartItemId) => {
    if (apiToken) {
      setLoading(true);
      await dispatch(removeFromCart(cartItemId));
      await dispatch(getCartItems());
      setLoading(false);
    } else {
      setShowAddToCartPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  const { removeFromCartRes, isLoading, error } = useSelector((state) => state.CartSlice); 
  
  // console.log("___removeFromCartRes:", removeFromCartRes);

  useEffect(() => {
    if (!loading) {
      if (removeFromCartRes) {
        if (removeFromCartRes.status) {
          // navigate('/cart');
          setRemoveFromCartSuccess(removeFromCartRes.message);
        }
      }
    }
  }, [loading, removeFromCartRes])

  return [removeFromCartHandler, removeFromCartRes, removeFromCartSuccess, showAddToCartPopup]
}
export default useRemoveFromCart