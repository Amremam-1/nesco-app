import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createArray } from "../../utils/usefulFunctions";
import { getViewProduct } from "../../redux/thunkActions/productsActions";


const useViewProduct = (prodId) => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      await dispatch(getViewProduct(prodId));
    }

    run();
  }, [prodId, localStorage.getItem("i18nextLng")]);

  

  const { viewProduct, isLoading, error } = useSelector(state => state.ProductsSlice);
  console.log("____________ viewProduct: ", viewProduct);


  const [productData, setProductData] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  // let productData = [];
  // let productDetails = [];
  // let productInCart = [];



  useEffect(() => {
    if (viewProduct) {
      if (viewProduct.status) {
        if (viewProduct.data) {
          setProductData(viewProduct.data);
          if (viewProduct.data.product_details) {
            setProductDetails(viewProduct.data.product_details);
            if (viewProduct.data.product_details.favorite) {
              setIsFavorite(viewProduct.data.product_details.favorite)
            }
            // if (viewProduct.data.product_details.favorite) {
            //   setIsFavorite(viewProduct.data.product_details.favorite)
            // }
            if (viewProduct.data.product_details.product_in_cart) {
              setProductInCart(viewProduct.data.product_details.product_in_cart);
            }
          }
        }
      }
    }
  }, [isLoading, viewProduct, isFavorite, localStorage.getItem("i18nextLng")])


  
  return [productData, productDetails, productInCart, isFavorite, isLoading, error];
}
export default useViewProduct;