import { useEffect } from "react";
import OurMenuCard from "../OurMenuCard/OurMenuCard";
import styles from "./styles.module.scss";
import { useState } from "react";
import NutritionFacts from "../NutritionFacts/NutritionFacts";
import { useTranslation } from "react-i18next";
import useGetMenuItemDetails from "../../../hooks/menu/useGetMenuItemDetails";


const OurMenuContent = ({ mainMenu, selectedCategory }) => {
  const { t, i18n } = useTranslation();

  const [subMenu, setSubMenu] = useState([]);
  const [mainMenuPath, setMainMenuPath] = useState("");
  const [itemDetails, setItemDetails] = useState([]);
  const [isNutritionClicked, setIsNutritionClicked] = useState(false);

  const clickSubMenuHandler = (id) => {
    setSubMenu(id);
    
    // setMainMenuPath(prodType);
  };

  const clickNutritionHandler = () => {
    setIsNutritionClicked(!isNutritionClicked);
  }

  const [menuItemDetailsData, isLoading] = useGetMenuItemDetails(subMenu);

  return (
    <div className={styles.ourMenuContent}>
      <div className={styles.top}>
        <div className={styles.head}>
          <p className={styles.path}>
            <span>{t("ourMenu-content-ourProducts")}</span>
            <span>/</span>
            <span>{selectedCategory}</span>
          </p>
          <h3 className={styles.listTitle}>{selectedCategory}</h3>
        </div>
        <div className={styles.subMenuList}>
          {
            mainMenu?.map((item, index) => (
              <OurMenuCard
                item={item}
                // prodType={mainMenu[0]?.mainMenuNameEn} 
                clickSubMenuHandler={clickSubMenuHandler}
              />
            ))
          }
        </div>
      </div>
      {
        subMenu.length !== 0 ? (
          <NutritionFacts
            subMenu={menuItemDetailsData}
            clickNutritionHandler={clickNutritionHandler}
            isNutritionClicked={isNutritionClicked}
            // mainMenuPath={mainMenuPath}
          />
        ) : null
      }
    </div>
  )
}

export default OurMenuContent