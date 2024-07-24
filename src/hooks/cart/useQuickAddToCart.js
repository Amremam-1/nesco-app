import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getCartItems } from "../../redux/thunkActions/cartActions";
import Cookies from "js-cookie";
import { useEffect } from "react";
import notify from "../notify/useNotification";


const useQuickAddToCart = (prodId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [quicKAddToCartSuccess, setQuickAddToCartSuccess] = useState(null);


  const quickAddToCartHandler = async () => {
    setLoading(true);
    await dispatch(addToCart(
      {
        product_id: prodId,
        quantity: 1
      }
    ));
    await dispatch(getCartItems());
    setLoading(false);
  }

  const { addToCartRes, isLoading, error } = useSelector((state) => state.CartSlice); 
  
  // console.log("___addToCartRes:", addToCartRes);

  useEffect(() => {
    if (!loading) {
      if (addToCartRes) {
        if (addToCartRes.status) {
          setQuickAddToCartSuccess(addToCartRes.message);
          notify(addToCartRes.message, "success")
          // setAddToCartSuccess(true);
          // setTimeout(() => {
          //   navigate('/cart');
          // }, 3000)
        }
      }
    }
  }, [loading, addToCartRes])

  return [quickAddToCartHandler, quicKAddToCartSuccess]
}


export default useQuickAddToCart