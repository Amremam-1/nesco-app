import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useGetCategoryDetails from "../categories/useGetCategoryDetails";
import useBestSellingProducts from "../products/useBestSellingProducts";
import { createArray } from "../../utils/usefulFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/thunkActions/categoriesActions";


const useStoreContainer = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProducts(`?page=`));
  // }, [localStorage.getItem("i18nextLng")]);


  
  const { getAllProductsRes, isLoading, error } = useSelector(state => state.CategoriesSlice);

  console.log("______0_1_2_____getAllProductsRes: ", getAllProductsRes)
  
  let getAllProductsResData = [];
  let totalProducts = 0;
  let per_pageProducts = 0;

  if (getAllProductsRes) {
    if (getAllProductsRes.status) {
      totalProducts = getAllProductsRes.total;
      per_pageProducts = getAllProductsRes.per_page
      if (getAllProductsRes.data) {
        getAllProductsResData = getAllProductsRes.data;
      }
    }
  }
  
  return [
    getAllProductsResData,
    totalProducts,
    per_pageProducts,
    isLoading,
    error
  ];
}

export default useStoreContainer;




// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import useGetCategoryDetails from "../categories/useGetCategoryDetails";
// import useBestSellingProducts from "../products/useBestSellingProducts";


// const useStoreContainer = (clickedCategory) => {
//   const { t, i18n } = useTranslation();
//   let pageNum = 1;
//   // const [categoryData, categoryCurrentPage, categoryPagesArray, categoryTotal] = useGetCategoryDetails(clickedCategory);
//   const [bestSellingData, bestSellingCurrentPage, bestSellingPagesArray, bestSellingTotal] = useBestSellingProducts(pageNum);

//   const getPage = (clickedPageNumber) => {
//     console.log("Clicked Page Num:", clickedPageNumber)
//   };

//   const [title, setTitle] = useState("");
//   const [filteredList, setFilteredList] = useState([]);

//   useEffect(() => {
//     if (clickedCategory === "bestSeller") {
//       setTitle(t("store-sidebar-bestSeller"));
//       setFilteredList(bestSellingData);

//     }else if (clickedCategory === "special-offers") {
//       setTitle(t("store-sidebar-specialOffers"));
//       // setFilteredList();

//     }else if (clickedCategory === "new-arrival-products") {
//       setTitle(t("store-sidebar-newlyArrivalProducts"));
//       // setFilteredList();

//     }else if (clickedCategory === "all-categories") {
//       setTitle(t("store-sidebar-allCategories"));
//       // setFilteredList();

//     }else if (clickedCategory === "all-categories"){
//       // setTitle(t());
//       // setFilteredList();
//     }
//   }, [clickedCategory, t])

//   return [filteredList, title, getPage]
// }

// export default useStoreContainer