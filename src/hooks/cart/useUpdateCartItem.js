import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getCartItems } from "../../redux/thunkActions/cartActions";
import Cookies from "js-cookie";
import { useEffect } from "react";


const useUpdateCartItem = (prodId, itemQty) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(itemQty);
  const [addToCartSuccess, setAddToCartSuccess] = useState(null);

  // Temporary value untill API work
  let availableProdQty = 7;

  // console.log(`___&&&&____Quantity of ${prodId} is ${quantity}`);


  const increaseQuantityHandler = async () => {
    setQuantity((prevQty) => prevQty + 1);
    dispatch(addToCart(
      {
        product_id: prodId,
        quantity: quantity+1
      }
    ));
    await dispatch(getCartItems());
    // addToCartHandler();
  }

  const decreaseQuantityHandler = async () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
      dispatch(addToCart(
        {
          product_id: prodId,
          quantity: quantity-1
        }
      ));
      await dispatch(getCartItems());
      // addToCartHandler();
    }
  }

  // useEffect(() => {
  // }, [quantity])

  const addToCartHandler = () => {
    if (quantity >= 1) {
      setLoading(true);
      dispatch(addToCart(
        {
          product_id: prodId,
          quantity: quantity
        }
      ));
      setLoading(false);
    }
  };

  const { addToCartRes, isLoading, error } = useSelector((state) => state.CartSlice); 
  
  // console.log("___addToCartRes:", addToCartRes);

  useEffect(() => {
    if (!loading) {
      if (addToCartRes) {
        if (addToCartRes.status) {
          setAddToCartSuccess(addToCartRes.message);
          // setAddToCartSuccess(true);
          setTimeout(() => {
            navigate('/cart');
          }, 3000)
        }
      }
    }
  }, [loading, addToCartRes])

  return [
    quantity,
    availableProdQty,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartSuccess
  ]
}

export default useUpdateCartItem;