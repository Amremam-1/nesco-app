import { useDispatch, useSelector } from "react-redux";
import { getNewArrivalProducts } from "../../redux/thunkActions/productsActions";
import { useEffect } from "react";
import { createArray } from "../../utils/usefulFunctions";


const useNewArrivalProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getNewArrivalProducts());
    }

    run();
  }, [localStorage.getItem("i18nextLng")]);

  

  const { newArrivalProducts, isLoading, error } = useSelector(state => state.ProductsSlice);

  let newArrivalData = [];
  let newArrivalCurrentPage = 0;
  let newArrivalLastPage = 0;
  let newArrivalTotal = 0;
  let newArrivalPagesArray = [];

  if (newArrivalProducts) {
    if (newArrivalProducts.data) {
      if (newArrivalProducts.data.data) {
        newArrivalData = newArrivalProducts.data.data;
      }
      newArrivalCurrentPage = newArrivalProducts.data.current_page;
      newArrivalLastPage = newArrivalProducts.data.last_page;
      newArrivalTotal = newArrivalProducts.data.total
      newArrivalPagesArray = createArray(newArrivalLastPage)
    }
  }
  
  return [
    newArrivalData,
    newArrivalCurrentPage,
    newArrivalPagesArray,
    newArrivalTotal
  ];
}

export default useNewArrivalProducts;




















// import axios from "axios";

// const useNewArrivalProducts = async () => {

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'api_password': process.env.API_PASSWORD,
//       'language': 'ar',
//       'Authorization': process.env.API_TOKEN
//     }
//   }

//   const response = await axios.get("https://nestrettocoffee.com/dashboard/api/new-arrival-products", config);

//   let newArrivalProducts = [];
//   if (response) {
//     if (response.data) {
//       newArrivalProducts = response.data.data;
//     console.log("response.data.data:======================================", response.data.data)
//     }
//   }

//   return [newArrivalProducts];
// }
// export default useNewArrivalProducts;