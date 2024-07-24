import { useState } from "react";
import { menuList } from "../../../utils/menuList";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import useGetAllMenuCategories from "../../../hooks/menu/useGetAllMenuCategories";
import useGetMenuCategoryItems from "../../../hooks/menu/useGetMenuCategoryItems";

const OurMenuSidebar = ({ clikedMenu }) => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [clickedCategory, setClickedCategory] = useState('');

  const [allMenuCategoriesData, isLoadingAll] = useGetAllMenuCategories(2);

  const [menuCategoryItemsData, selectedCategory, isLoadingMenu] = useGetMenuCategoryItems(clickedCategory);


  // const handleClickedCategory = (id) => {
  //   setClickedCategory(id)
  // }

  console.log("################ menuCategoryItemsData: ", menuCategoryItemsData)
  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    
    setSelected(i);
  }

  const clickMainMenuHandler = (index, mainMenu) => {
    setClickedCategory(mainMenu?.id)
    toggle(index);
    clikedMenu(menuCategoryItemsData, selectedCategory, mainMenu?.id);
  }

  return (
    <div className={styles.ourMenuSidebar}>
      <ul className={styles.mainMenuList}>
        {
          allMenuCategoriesData?.map((mainMenu, index) => (
            <li onClick={() => clickMainMenuHandler(index, mainMenu)} className={styles.mainMenuItem} key={index}>
              <div className={styles.mainMenuTitle}>
                <span></span>
                <h3 className={styles.title}>{mainMenu?.title}</h3>
              </div>
              <ul className={selected === index ? styles.subMenuList : styles.subMenuListHidden}>
                {
                  menuCategoryItemsData?.map((item, i) => (
                    <li className={styles.subMenuItem} key={i}>
                      <p className={styles.subMenuTitle}>{item?.title}</p>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default OurMenuSidebar;