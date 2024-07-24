import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import OurMenuSidebar from "../OurMenuSidebar/OurMenuSidebar";
import OurMenuContent from "../OurMenuContent/OurMenuContent";
import { useState } from "react";
import { useEffect } from "react";
import { menuList } from "../../../utils/menuList";
import useGetMenuCategoryItems from "../../../hooks/menu/useGetMenuCategoryItems";

const OurMenuContainer = () => {
  const { t, i18n } = useTranslation();
  const [clickedMenuCateg, setClickedMenuCateg] = useState(10);
  const  [menuCategoryItemsData, selectedCategory, isLoadingMenu] = useGetMenuCategoryItems(clickedMenuCateg);
  const [mainMenu, setMainMenu] = useState([]);
  const [selectedCategTitle, setSelectedCategTitle] = useState(selectedCategory);


  const clikedMenu = (menu, selectedCategory, menuCategId) => {
    setClickedMenuCateg(menuCategId)
    setMainMenu(menu);
    setSelectedCategTitle(selectedCategory);
    console.log("menu: ", menu)
  }

  useEffect(() => {
    setMainMenu(menuCategoryItemsData);
    setSelectedCategTitle(selectedCategory)
  }, [menuCategoryItemsData, selectedCategTitle, isLoadingMenu, localStorage.getItem("i18nextLng")]);

  // const [selectedMenu, setSelectedMenu] = useState(menuList[0].mainMenuSubList);

  // console.log("mainMenu----: ", mainMenu)
  // console.log(mainMenu[0]["mainMenuSubList"])



  return (
    <section className={styles.ourMenu}>
      <div className={styles.ourMenu__container}>
        <div className="pageTitle">
          <h2>{t("ourMenu-container-menu")}</h2>
        </div>
        <div className={styles.head}>
          {/* <div className={styles.image}>
            <img className={styles.img} src={process.env.PUBLIC_URL + "/images/coffeeTree.png"} alt="" />
            <h2 className={styles.title}>{t("ourMenu-container-title")}</h2>
          </div> */}
          <div className={styles.text}>
            <p className={styles.parg}>{t("ourMenu-container-parg1")}</p>
            <p className={styles.parg}>{t("ourMenu-container-parg2")}</p>
          </div>
        </div>
        <div className={styles.body}>
          <OurMenuSidebar clikedMenu={clikedMenu} />
          <OurMenuContent mainMenu={mainMenu} selectedCategory={selectedCategTitle} />
        </div>
      </div>
    </section>
  )
}

export default OurMenuContainer;