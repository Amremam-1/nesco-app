import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { newsList } from "../../../../utils/newsList";
import { useEffect, useState } from "react";
import {  FaShareAlt } from "react-icons/fa"
import SocialShare from "../../../Utils/SocialShare/SocialShare";
import { useTranslation } from "react-i18next";

const SingleNews = () => {
  const { t, i18n } = useTranslation();

  let { id } = useParams();
  const [newsDetails, setNewsDetails] = useState(newsList);
  const [showSocial, setShowSocial] = useState(false);
  
  useEffect(() => {
    setNewsDetails(newsList.filter((item) => item.link === `/news/${id}`));

  }, [])

  console.log("newsDetails: ", newsDetails);


  return (
    <section className={styles.singleNews}>
      <div className={styles.singleNews__container}>
        <div className={styles.back}>
          <a href="/news">{t("singleNews-back")}</a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={process.env.PUBLIC_URL + `/images/news/${newsDetails[0].image}`} alt="" />
      </div>
      <div className={styles.singleNews__container}>
        <div className={styles.body}>
          <h2 className={styles.title}>{i18n.dir() === "rtl" ? newsDetails[0].titleAr : newsDetails[0].titleEn}</h2>
          <p className={styles.date}>{i18n.dir() === "rtl" ? newsDetails[0].dateAr : newsDetails[0].dateEn}</p>
          <p className={styles.text}>{i18n.dir() === "rtl" ? newsDetails[0].detailsAr : newsDetails[0].detailsEn}</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.btns}>
            <button onClick={() => setShowSocial(!showSocial)}>
              <span>{t("singleNews-share")}</span>
              <FaShareAlt />
            </button>
          </div>
          {showSocial ? <SocialShare showSocial={showSocial} /> : null}
        </div>
      </div>
    </section>
  )
}

export default SingleNews