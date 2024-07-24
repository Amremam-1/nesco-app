// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPopularCategories } from "../../redux/thunkActions/categoriesActions";
// import { useState } from "react";


// const useGetPopularCategories = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const run = async () => {
//       setLoading(true);
//       await dispatch(getPopularCategories());
//       setLoading(false);
//     }

//     run();
//   }, [localStorage.getItem("i18nextLng")]);

  

//   const { popularCategories, isLoading, error } = useSelector(state => state.CategoriesSlice);

//   let popularCategoriesData = [];


//   if (popularCategories) {
//     if (popularCategories.status && popularCategories.data) {
//       popularCategoriesData = popularCategories.data.data;
//     }
//   }
  
//   return [popularCategoriesData];
// }

// export default useGetPopularCategories