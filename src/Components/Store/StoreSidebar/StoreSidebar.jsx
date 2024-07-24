import { FaChevronLeft } from "react-icons/fa6"
import styles from "./styles.module.scss";
import HeaderIcons from "../../Home/HeaderIcons/HeaderIcons";
import { useState } from "react";
import StoreSideMenuBTN from "../StoreSideMenuBTN/StoreSideMenuBTN";
import useGetAllCategories from "../../../hooks/categories/useGetAllCategories";
import { useTranslation } from "react-i18next";
import useScrollTo from "../../../hooks/scroll/useScrollTo";
import { FaChevronRight } from "react-icons/fa";
import useStoreSidebar from "../../../hooks/store/useStoreSidebar";
import axios from "axios";
import { useEffect } from "react";
import useGetPopularCategories from "../../../hooks/categories/useGetPopularCategories";
import useFixedHeader from "../../../hooks/scroll/useFixedHeader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoryName } from "../../../redux/slices/StoreSlice";

const StoreSidebar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isHeaderFixed] = useFixedHeader(100);

  // const [
  //   getAllProductsResData,
  //   totalProducts,
  //   per_pageProducts,
  //   numberOfPages,
  //   getPage,
  //   categoryTitle,
  //   categoryName,
  //   categoryId
  // ] = useStoreSidebar(location.pathname);



  const handleClickedCategory = (categoryName, categoryId, searchWord) => {
    if (location.pathname.split("/").length > 2) {
      navigate("/store");
    }
    dispatch(getCategoryName({ categoryName, categoryId, searchWord }));
    setShowStoreSideMenu(false);
    console.log("_____(  s  )____searchWord: ", searchWord)
  }
  
  
  const [categoriesData] = useGetAllCategories();


  const [showStoreSideMenu, setShowStoreSideMenu] = useState(false);

  const storeSideMenuHandler = () => {
    setShowStoreSideMenu(!showStoreSideMenu);
    // setShowStoreSideMenu(false)  // if user click on category link
  }

  const [searchWord, setSearchWord] = useState("");
  
    const onChangeSearch = (e) => {
      setSearchWord(e.target.value);
    };

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchWord.length > 2) {
      handleClickedCategory("", "", searchWord)
    } else {
      // Notify user to enter at least 3 characters to search
    }
    setSearchWord("");
  };


  return (
    <aside
      className={showStoreSideMenu ? styles.storeSidebarVisible : styles.storeSidebar}
      style={i18n.dir() === "rtl" ? { right: 0} : { left: 0}}
    >
      <StoreSideMenuBTN storeSideMenuHandler={storeSideMenuHandler}  />
      <div className={styles.container}>
        <div
          className={isHeaderFixed ? styles.headFixed : styles.head}
          style={i18n.dir() === "rtl" ? {right: 0} : {left: 0}}
        >
          <a className={styles.storeLink} href="/store">{t("store-sidebar-store")}</a>
          <HeaderIcons customHeader={true} />
        </div>
        <div className={styles.search}>
          <form onSubmit={searchHandler} className={styles.searchForm}>
            <div className={styles.inputBox}>
              <input
                value={searchWord}
                onChange={onChangeSearch}
                type="text"
                placeholder={t("store-sidebar-search")} 
              />
              <button type="submit">Go</button>
            </div>
          </form>
        </div>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <button onClick={() => handleClickedCategory("bestSeller", "2")} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>{t("store-sidebar-bestSeller")}</span>
              {i18n.dir() === "rtl" ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </li>
          <li className={styles.listItem}>
            <button onClick={() => handleClickedCategory("new-arrival-products", "1")} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>{t("store-sidebar-newlyArrivalProducts")}</span>
              {i18n.dir() === "rtl" ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </li>
        </ul>
        <div onClick={() => handleClickedCategory("all-categories", "0")} className={styles.allCategory}>
          <h2 className={styles.title}>
            <button>{t("store-sidebar-allCategories")}</button>
          </h2>
        </div>
        <ul className={styles.linksList}>
          {
            categoriesData?.map((categ, index) => (
              <li className={styles.listItem} key={index}>
                <button onClick={() => handleClickedCategory(categ.title, categ.id)} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
                  <span>{categ.title}</span>
                  {i18n.dir() === "rtl" ? <FaChevronLeft /> : <FaChevronRight />}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default StoreSidebar