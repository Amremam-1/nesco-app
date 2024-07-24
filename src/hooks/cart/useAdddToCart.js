import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/thunkActions/cartActions";
import Cookies from "js-cookie";
import { useEffect } from "react";
import notify from "../notify/useNotification";


const useAdddToCart = (prodId, productInCart, stock) => {
  // const [productData, productDetails, productInCart] = useViewProduct(prodId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Temporary value untill API work
  const apiToken = Cookies.get("api_token");

  const [quantity, setQuantity] = useState(1);
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
  const [addToCartSuccess, setAddToCartSuccess] = useState(null);

  useEffect(() => {
    if (productInCart && productInCart.quantity) {
      setQuantity(productInCart.quantity)
    } else {
      // setQuantity(1);
    }
  }, [productInCart])
  
  const increaseQuantityHandler = () => {
    setQuantity((prevQty) => prevQty + 1)
  }

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1)
    }
  }

  const addToCartHandler = async () => {
    if (apiToken) {
      if (quantity >= 1) {
        setLoading(true);
        await dispatch(addToCart(
          {
            product_id: prodId,
            quantity: quantity
          }
        ));
        setLoading(false);
      }
    } else {
      setShowAddToCartPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  const { addToCartRes, isLoading, error } = useSelector((state) => state.CartSlice); 
  
  console.log("___addToCartRes:", addToCartRes)

  useEffect(() => {
    if (!loading) {
      if (addToCartRes) {
        if (addToCartRes.status) {
          setAddToCartSuccess(addToCartRes.message);
          notify(addToCartRes.message, "success")
          // setAddToCartSuccess(true);
          // setTimeout(() => {
          //   navigate('/cart');
          // }, 3000)
        }
      }
    }
  }, [loading, addToCartRes])

  return [
    quantity,
    showAddToCartPopup,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartHandler,
    addToCartSuccess
  ]
}

export default useAdddToCart;