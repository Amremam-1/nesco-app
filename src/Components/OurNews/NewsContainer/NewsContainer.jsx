import { useTranslation } from "react-i18next";
import Gallery from "../Gallery/Gallery";
import News from "../News/News";
import SingleNews from "../News/SingleNews/SingleNews";
import Videos from "../Videos/Videos";
import styles from "./styles.module.scss";

const NewsContainer = ({ forNews, forNewsId, forGallery, forVideos }) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.ourNews}>
      <div className={styles.ourNews__container}>
        <div className="pageTitle">
          <h2>{t("NewsContainer-ourNews")}</h2>
        </div>
        <ul className={styles.headeList}>
          <li className={forNews ? styles.itemActive : styles.item}>
            <a href="/news">{t("NewsContainer-news")}</a>
          </li>
          <li className={forGallery ? styles.itemActive : styles.item}>
            <a href="/gallery">{t("NewsContainer-gallery")}</a>
          </li>
          <li className={forVideos ? styles.itemActive : styles.item}>
            <a href="/videos">{t("NewsContainer-videos")}</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        { forNews ? <News /> : null }
        { forNewsId ? <SingleNews /> : null }
        { forGallery ? <Gallery /> : null }
        { forVideos ? <Videos /> : null }
      </div>
    </section>
  )
}

export default NewsContainer