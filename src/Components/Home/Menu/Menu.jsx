import { useEffect } from "react"
import styles from "./styles.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { menuData } from "../../../utils/menuData"
import { MdOutlineAddShoppingCart } from "react-icons/md"

const Menu = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    })
  }, [])

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.type) {
        return (
          <div
            key={item.id}
            className={styles.special_section}
            data-aos="fade-up"
          >
            <h4 className={styles.special_title}>{item.type}</h4>
            <div className={styles.special_item}>
              <img
                src={item.imgUrl}
                alt={item.nameEn}
                className={styles.menu_image}
              />
              <div className={styles.menu_text}>
                <h3>{item.nameEn}</h3>
                <p>{item.descriptionEn}</p>
              </div>
              <a href="" className={styles.add_to_cart}>
                <MdOutlineAddShoppingCart className={styles.icon} />
              </a>
            </div>
          </div>
        )
      } else {
        return (
          <div key={item.id} className={styles.menu_item} data-aos="fade-up">
            <img
              src={item.imgUrl}
              alt={item.nameEn}
              className={styles.menu_image}
            />
            <div className={styles.menu_text}>
              <h3>{item.nameEn}</h3>
              <p>{item.descriptionEn}</p>
            </div>
            <a href="" className={styles.add_to_cart}>
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
        <h2>our</h2>
        <h1>Menu</h1>
        <img
          src="/images/make_coffee.png"
          alt="make-coffee"
          className={styles.make}
        />
      </div>

      <div className={styles.menu_details}>
        <div className={styles.menu_category}>
          <h2>Hot Coffees</h2>
          {renderMenuItems(menuData.hotCoffees)}
        </div>
        <div className={styles.menu_category}>
          <h2>Cold Coffees</h2>
          {renderMenuItems(menuData.coldCoffees)}
        </div>
        <div className={styles.menu_category}>
          <h2>Bakery</h2>
          {renderMenuItems(menuData.Bakery)}
        </div>
        <div className={styles.menu_category}>
          <h2>Lunch</h2>
          {renderMenuItems(menuData.Lunch)}
        </div>
      </div>

      <div
        className={styles.our_shop}
        style={
          {
            // backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["2"]})`,
          }
        }
      >
        <div className={styles.details_image}>
          <div className={styles.details_image_content} data-aos="zoom-in">
            <p className={styles.image_title}>Our</p>
            <h1>Shop</h1>
          </div>
        </div>

        <div className={styles.elementor_section_one}></div>
        <div className={styles.elementor_section_two}></div>
      </div>
    </section>
  )
}

export default Menu
