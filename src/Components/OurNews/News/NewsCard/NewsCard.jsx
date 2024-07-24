import { FaExternalLinkAlt, FaShareAlt } from "react-icons/fa"
import SocialShare from "../../../Utils/SocialShare/SocialShare";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const NewsCard = ({ item, index, toggle, selected }) => {
  const { t, i18n } = useTranslation();

  return (
    <li className={styles.newsItem}>
      <a href={item.link} className={styles.newsImg}>
        <img src={process.env.PUBLIC_URL + `/images/news/${item.image}`} alt="" />
      </a>
      <div className={styles.newsDetails}>
        <div className={styles.details}>
          <div className={styles.imgText}>
            <p className={styles.date}>{i18n.dir() === "rtl" ? item.dateAr : item.dateEn}</p>
            <a href={item.link}>
              <h3 className={styles.title}>{i18n.dir() === "rtl" ? item.titleAr : item.titleEn}</h3>
            </a>
            <p className={styles.about}>{i18n.dir() === "rtl" ? item.detailsAr : item.detailsEn}</p>
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.btns}>
            <a href={item.link}>
              <FaExternalLinkAlt />
            </a>
            <button onClick={() => toggle(index)}>
              <FaShareAlt />
            </button>
          </div>
          {selected === index ? <SocialShare showSocial={selected === index} /> : null}
        </div>
      </div>
    </li>
  )
}

export default NewsCard