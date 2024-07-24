// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createArray } from "../../utils/usefulFunctions";


// const useMyWishList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const run = async () => {
//       // await dispatch(getBestSellingProducts());
//     }

//     run();
//   }, []);

  

//   const { bestSellingProducts, isLoading, error } = useSelector(state => state.ProductsSlice);

//   let bestSellingData = [];
//   let bestSellingCurrentPage = 0;
//   let bestSellingLastPage = 0;
//   let bestSellingTotal = 0;
//   let bestSellingPagesArray = [];

//   if (bestSellingProducts) {
//     if (bestSellingProducts.data) {
//       bestSellingData = bestSellingProducts.data;
//       bestSellingCurrentPage = bestSellingProducts.current_page;
//       bestSellingLastPage = bestSellingProducts.last_page;
//       bestSellingTotal = bestSellingProducts.total
//       bestSellingPagesArray = createArray(bestSellingLastPage)
//     }
//   }
  
//   return [bestSellingData, bestSellingCurrentPage, bestSellingPagesArray, bestSellingTotal];
// }

// export default useMyWishList