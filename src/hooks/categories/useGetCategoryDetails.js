// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createArray } from "../../utils/usefulFunctions";
// import { getCategoryDetails } from "../../redux/thunkActions/categoriesActions";


// const useGetCategoryDetails = () => {
//   const dispatch = useDispatch();
  
//   const { categoryName, categoryId } = useSelector((state) => state.StoreSlice);

//   useEffect(() => {
//     const run = async () => {
//       await dispatch(getCategoryDetails(categoryId));
//     }

//     run();
//   }, [categoryId, localStorage.getItem("i18nextLng")]);

  

//   const { category, isLoading, error } = useSelector(state => state.CategoriesSlice);

//   let categoryData = [];
//   let categoryCurrentPage = 0;
//   let categoryLastPage = 0;
//   let categoryTotal = 0;
//   let categoryPagesArray = [];
//   let categDataMsg = "";

//   if (category) {
//     if (category.status) {
//       if (category.data) {
//         if (category.data.data) {
//           if (category.data.data.data) {
//             categoryData = category.data.data.data;
//           }
//           categoryCurrentPage = category.data.data.current_page;
//           categoryLastPage = category.data.data.last_page;
//           categoryTotal = category.data.data.total
//           categoryPagesArray = createArray(categoryLastPage)
//         }
//       }
//     }else {
//       categDataMsg = category.message
//     }
//   }
  
//   return [categoryData, categoryCurrentPage, categoryPagesArray, categoryTotal, categDataMsg];
// }

// export default useGetCategoryDetails;