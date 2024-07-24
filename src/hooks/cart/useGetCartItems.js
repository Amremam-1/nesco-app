import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCartItems } from "../../redux/thunkActions/cartActions";


const useGetCartItems = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isCartEmpty, setIsCartEmpty] = useState(null);
  const [cartEmptyMsg, setCartEmptyMsg] = useState(null);
  const [cartLength, setCartLength] = useState(0);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [city, setCity] = useState(
    {
      "id": null,
      "city_name": ""
    }
  );
  const [shippingAddress, setShippingAddress] = useState(
    {
      building: '',
      floor: '',
      flat: '',
      street: '',
      state: '',
      city: '',
      postalCode: '',
      phone: '',
      note: '',
    }
  );
  // const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const run = async () => {
      // setLoading(true);
      await dispatch(getCartItems());
      // setLoading(false);
    }

    run();
  }, [localStorage.getItem("i18nextLng")]);

  

  const { cartItemsRes, isLoading, error } = useSelector(state => state.CartSlice);

  console.log("_____====_____cartItemsRes:", cartItemsRes);


  // const filteredEntries = Object.entries(cartItemsData).filter((key, value) => key.split("_")[0] === "product")

  // const productsInCart = Object.entries(cartItemsData).filter(([key, value]) => key.split("_")[0] === "product");
  // setProductsInCart(filteredEntries);

  const productsInCart = Object.entries(cartItemsData).filter(([key, value]) => key.split("_")[0] === "product" )

  const productsInCartArray = productsInCart.map((item) => item[1])
  // console.log("____(++++)_____ filteredEntries:", productsInCart);
  // console.log("____(++++)_____ productsInCartArray:", productsInCartArray);

  

  useEffect(() => {
    if (cartItemsRes) {
      if (cartItemsRes.status) {
        if (cartItemsRes.data) {
          setCartItemsData(cartItemsRes.data);
          const cartItems = Object.keys(cartItemsRes.data).filter((item) => item.split("_")[0] === "product");
          
          if (cartItemsRes.data.address) {
            setShippingAddress(cartItemsRes.data.address);
          }
          if (cartItemsRes.data.city) {
            setCity(cartItemsRes.data.city);
          }
          
          if (cartItems.length > 0) {
            // const filteredEntries = Object.entries(cartItemsData).filter(([key, value]) => key.split("_")[0] === "product" )
            // setProductsInCart(filteredEntries)
            setCartLength(cartItems.length);
            setIsCartEmpty(false);
          } else {
            setIsCartEmpty(true);
            setCartEmptyMsg(cartItemsRes.message);
          }
        }
      } 
    }
  }, [isLoading, cartItemsData.length, cartItemsRes, shippingAddress, localStorage.getItem("i18nextLng")])

  console.log("------------------------------------------------------shippingAddress---------", shippingAddress)
  
  return [
    productsInCartArray,
    cartItemsData,
    cartLength,
    isCartEmpty,
    cartEmptyMsg,
    shippingAddress,
    city,
    isLoading,
    error
  ];
}

export default useGetCartItems