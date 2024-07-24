import { useDispatch, useSelector } from "react-redux";
import { getCategoryName } from "../../redux/slices/StoreSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAllCategories, getAllProducts, getCategoryDetails } from "../../redux/thunkActions/categoriesActions";
import { getBestSellingProducts, getNewArrivalProducts } from "../../redux/thunkActions/productsActions";
import { createArray } from "../../utils/usefulFunctions";
import { useNavigate } from "react-router-dom";



const useStoreSidebar = (linkPath) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryTitle, setCategoryTitle] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(1);
  // const [categoryName, setCategoryName] = useState();
  // const [categoryId, setCategoryId] = useState(null);

  // const [clickedCateg, setClickedCateg] = useState("bestSeller");

  // const handleClickedCategory = (categoryName, categoryId, searchWord) => {
  //   if (linkPath.split("/").length > 2) {
  //     navigate("/store");
  //   }
  //   // setCategoryName(categoryName);
  //   // setCategoryId(categoryId);
  //   dispatch(getCategoryName({ categoryName, categoryId, searchWord }));
  //   console.log("_____(  s  )____searchWord: ", searchWord)
  // }


  const { categoryName, categoryId, searchWord, pageNumber } = useSelector((state) => state.StoreSlice);

  useEffect(() => {
    if (searchWord) {
      setCategoryTitle(`${t("store-sidebar-searchfor")} ${searchWord}`);
      dispatch(getAllProducts(`?page=${page}&search=${searchWord}`));

    } else if (categoryName === "bestSeller") {
      setCategoryTitle(t("store-sidebar-bestSeller"));
      dispatch(getAllProducts(`?page=${page}&order=2`));

    } else if (categoryName === "new-arrival-products") {
      setCategoryTitle(t("store-sidebar-newlyArrivalProducts"));
      dispatch(getAllProducts(`?page=${page}&order=1`));

    } else if (categoryName === "all-categories") {
      setCategoryTitle(t("store-sidebar-allCategories"));
      dispatch(getAllProducts(`?page=${page}`));

    } else {
      setCategoryTitle(categoryName);
      dispatch(getAllProducts(`?page=&category_id=${categoryId}`));
    }
  }, [categoryName, categoryId, searchWord, page, t, localStorage.getItem("i18nextLng")]);


  // ------------------------------------------------------------------------
  const { getAllProductsRes, isLoading, error } = useSelector(state => state.CategoriesSlice);

  console.log("______0_1_2_____getAllProductsRes: ", getAllProductsRes)
  
  let getAllProductsResData = [];
  let totalProducts = 0;
  let per_pageProducts = 0;
  let numberOfPages = 0;

  if (getAllProductsRes) {
    if (getAllProductsRes.status) {
      totalProducts = getAllProductsRes.total;
      per_pageProducts = getAllProductsRes.per_page;
      numberOfPages = Math.ceil(totalProducts / per_pageProducts);

      if (getAllProductsRes.data) {
        getAllProductsResData = getAllProductsRes.data;
      }
    }
  };

  const getPage = (num) => {
    setPage(num);
  }


  return [
    getAllProductsResData,
    totalProducts,
    per_pageProducts,
    numberOfPages,
    getPage,
    categoryTitle,
    categoryName,
    categoryId,
    isLoading,
    error
  ]
}

export default useStoreSidebar;





// const getPage = (clickedPageNumber) => {
//   console.log("Clicked Page Num:", clickedPageNumber)
// };