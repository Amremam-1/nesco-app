// import { useEffect } from "react"
// import styles from "./styles.module.scss"
// import Aos from "aos"
// import "aos/dist/aos.css"
// import { menuData } from "../../../utils/menuData"
// import { MdOutlineAddShoppingCart } from "react-icons/md"
// import { useTranslation } from "react-i18next"

// const Menu = () => {
//   useEffect(() => {
//     Aos.init({
//       duration: 500,
//       easing: "ease-in-sine",
//     })
//   }, [])

//   const { t, i18n } = useTranslation()

//   const renderMenuItems = (items) => {
//     return items.map((item) => {
//       if (item.typeAr || item.typeEn) {
//         return (
//           <div
//             key={item.id}
//             className={styles.special_section}
//             data-aos="fade-up"
//           >
//             <h4 className={styles.special_title}>
//               {i18n.language === "en" ? item.typeEn : item.typeAr}
//             </h4>
//             <div className={styles.special_item}>
//               <img
//                 src={item.imgUrl}
//                 alt={item.nameEn}
//                 className={styles.menu_image}
//               />
//               <div className={styles.menu_text}>
//                 <h3> {i18n.language === "en" ? item.nameEn : item.nameAr} </h3>
//                 <p>
//                   {i18n.language === "en"
//                     ? item.descriptionEn
//                     : item.descriptionAr}
//                 </p>
//               </div>
//               <a href={item.link} className={styles.add_to_cart}>
//                 <MdOutlineAddShoppingCart className={styles.icon} />
//               </a>
//             </div>
//           </div>
//         )
//       } else {
//         return (
//           <div key={item.id} className={styles.menu_item} data-aos="fade-up">
//             <img
//               src={item.imgUrl}
//               alt={item.nameEn}
//               className={styles.menu_image}
//             />
//             <div className={styles.menu_text}>
//               <h3> {i18n.language === "en" ? item.nameEn : item.nameAr} </h3>
//               <p>
//                 {i18n.language === "en"
//                   ? item.descriptionEn
//                   : item.descriptionAr}
//               </p>
//             </div>
//             <a href={item.link} className={styles.add_to_cart}>
//               <MdOutlineAddShoppingCart className={styles.icon} />
//             </a>
//           </div>
//         )
//       }
//     })
//   }

//   return (
//     <section className={styles.main_wrapper}>
//       <div className={styles.heading_info} data-aos="zoom-in">
//         {i18n.language === "en" ? (
//           <>
//             <h2>{t("home-menu-titel-one")}</h2>
//             <h1>{t("home-menu-titel-two")}</h1>
//           </>
//         ) : (
//           <h1>{t("home-menu-titel")}</h1>
//         )}
//         {i18n.language === "en" ? (
//           <img
//             src="/images/make_coffee.png"
//             alt="make-coffee"
//             className={styles.make}
//           />
//         ) : (
//           <img
//             src="/images/coffee-bg.png"
//             alt="coffee-bg"
//             className={styles.make}
//           />
//         )}
//       </div>

//       <div className={styles.menu_details}>
//         <div className={styles.menu_category}>
//           <h2>{t("home-menu-category-hot")}</h2>
//           {renderMenuItems(menuData.hotCoffees)}
//         </div>
//         <div className={styles.menu_category}>
//           <h2>{t("home-menu-category-ice")}</h2>
//           {renderMenuItems(menuData.coldCoffees)}
//         </div>
//         <div className={styles.menu_category}>
//           <h2>{t("home-menu-category-bakery")}</h2>
//           {renderMenuItems(menuData.Bakery)}
//         </div>
//         <div className={styles.menu_category}>
//           <h2>{t("home-menu-category-lunch")}</h2>
//           {renderMenuItems(menuData.Lunch)}
//         </div>
//       </div>

//       <div
//         className={styles.our_shop}
//         style={
//           {
//             // backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["3"]})`,
//           }
//         }
//       >
//         <div className={styles.details_image}>
//           <div className={styles.details_image_content} data-aos="zoom-in">
//             {i18n.language === "en" ? (
//               <>
//                 <p className={styles.image_title}>Our</p>
//                 <h1>Shop</h1>
//               </>
//             ) : (
//               <h1>{t("home-shop-titlemain")}</h1>
//             )}
//           </div>
//         </div>

//         <div className={styles.elementor_section_one}></div>
//         <div className={styles.elementor_section_two}></div>
//       </div>
//     </section>
//   )
// }

// export default Menu

import { useEffect } from "react"
import styles from "./styles.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { menuData } from "../../../utils/menuData"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getCategoryName } from "../../../redux/slices/StoreSlice"
import useGetHomePageData from "../../../hooks/pages/useGetHomePageData"

const Menu = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [homePageData] = useGetHomePageData()

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    })
  }, [])

  const handleClickedCategory = (categoryName, categoryId) => {
    navigate("/store")
    dispatch(getCategoryName({ categoryName, categoryId }))
    console.log(categoryId)
  }

  const renderMenuItems = (items, categoryName) => {
    return items.map((item) => {
      if (item.typeAr || item.typeEn) {
        return (
          <div
            key={item.id}
            className={styles.special_section}
            data-aos="fade-up"
            onClick={() => handleClickedCategory(categoryName, item.id)}
          >
            <h4 className={styles.special_title}>
              {i18n.language === "en" ? item.typeEn : item.typeAr}
            </h4>
            <div className={styles.special_item}>
              <img
                src={item.imgUrl}
                alt={item.nameEn}
                className={styles.menu_image}
              />
              <div className={styles.menu_text}>
                <h3> {i18n.language === "en" ? item.nameEn : item.nameAr} </h3>
                <p>
                  {i18n.language === "en"
                    ? item.descriptionEn
                    : item.descriptionAr}
                </p>
              </div>
              <a href={item.link} className={styles.add_to_cart}>
                <MdOutlineAddShoppingCart className={styles.icon} />
              </a>
            </div>
          </div>
        )
      } else {
        return (
          <div
            key={item.id}
            className={styles.menu_item}
            data-aos="fade-up"
            onClick={() => handleClickedCategory(categoryName, item.id)}
          >
            <img
              src={item.imgUrl}
              alt={item.nameEn}
              className={styles.menu_image}
            />
            <div className={styles.menu_text}>
              <h3> {i18n.language === "en" ? item.nameEn : item.nameAr} </h3>
              <p>
                {i18n.language === "en"
                  ? item.descriptionEn
                  : item.descriptionAr}
              </p>
            </div>
            <a href={item.link} className={styles.add_to_cart}>
              <MdOutlineAddShoppingCart className={styles.icon} />
            </a>
          </div>
        )
      }
    })
  }

  return (
    <section className={styles.main_wrapper}>
      <div className={styles.heading_info} data-aos="zoom-in">
        {i18n.language === "en" ? (
          <>
            <h2>{t("home-menu-titel-one")}</h2>
            <h1>{t("home-menu-titel-two")}</h1>
          </>
        ) : (
          <h1>{t("home-menu-titel")}</h1>
        )}
        {i18n.language === "en" ? (
          <img
            src="/images/make_coffee.png"
            alt="make-coffee"
            className={styles.make}
          />
        ) : (
          <img
            src="/images/coffee-bg.png"
            alt="coffee-bg"
            className={styles.make}
          />
        )}
      </div>

      <div className={styles.menu_details}>
        <div className={styles.menu_category}>
          <h2>{t("home-menu-category-hot")}</h2>
          {renderMenuItems(menuData.hotCoffees, "hotCoffees")}
        </div>
        <div className={styles.menu_category}>
          <h2>{t("home-menu-category-ice")}</h2>
          {renderMenuItems(menuData.coldCoffees, "coldCoffees")}
        </div>
        <div className={styles.menu_category}>
          <h2>{t("home-menu-category-bakery")}</h2>
          {renderMenuItems(menuData.Bakery, "Bakery")}
        </div>
        <div className={styles.menu_category}>
          <h2>{t("home-menu-category-lunch")}</h2>
          {renderMenuItems(menuData.Lunch, "Lunch")}
        </div>
      </div>

      <div
        className={styles.our_shop}
        style={{
          backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["3"]})`,
        }}
      >
        <div className={styles.details_image}>
          <div className={styles.details_image_content} data-aos="zoom-in">
            {i18n.language === "en" ? (
              <>
                <p className={styles.image_title}>Our</p>
                <h1>Shop</h1>
              </>
            ) : (
              <h1>{t("home-shop-titlemain")}</h1>
            )}
          </div>
        </div>

        <div className={styles.elementor_section_one}></div>
        <div className={styles.elementor_section_two}></div>
      </div>
    </section>
  )
}

export default Menu
