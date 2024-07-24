import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const OurMenuCard = ({ item, clickSubMenuHandler }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ourMenuCard}>
      <a
        className={styles.subMenuLink}
        href="#subMenuDetails"
        onClick={() => clickSubMenuHandler(item?.id)}
      >
        <div className={styles.image}>
          <img src={item?.image} alt={item?.title} />
          {/* <img src={process.env.PUBLIC_URL + `/images/ourmenu/${prodType}/${item.img}`} alt={item.nameEn} /> */}
        </div>
        <h3 className={styles.prodTitle}>{item?.title}</h3>
      </a>
    </div>
  )
}

export default OurMenuCard