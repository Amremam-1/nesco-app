import { useEffect } from "react";
import { newsList } from "../../../utils/newsList";
import NewsCard from "./NewsCard/NewsCard";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";



const News = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [lastNum, setLastNum] = useState(3);
  const [selectedYear, setSelectedYear] = useState(t("News-allYears"));
  const [filteredNewsList, setFilteredNewsList] = useState(newsList);

  const selectYearHandler = (e) => {
    setSelectedYear(e.target.value);
  }
  
  useEffect(() => {
    if (selectedYear === t("News-allYears")) {
      setFilteredNewsList(newsList);
    } else {
      setFilteredNewsList(newsList.filter((item) => item.year === selectedYear))
    }
  }, [selectedYear])

  let filteredYearList = newsList.filter((item, index) => item.year === selectedYear);

  console.log("filteredYearList: ", filteredYearList);

  const toggle = (i) => {
    // To Close All other Boxs
    if (selected === i) {
      return setSelected(null);
    }
    // To Open only clicked box
    setSelected(i);
  }

  const newsListYears = newsList.map((item) => item.year);

  let yearsList = removeDuplicates(newsListYears);

  function removeDuplicates(arr) { 
    return [...new Set(arr)]; 
} 

  const showMoreHandler = () => {
    setLastNum(filteredNewsList.length)
  }

  useEffect(() => {

  }, [t]);

  return (
    <div className={styles.newsTab}>
      <div className={styles.newsTab__wrapper}>
        <div className={styles.right}>
          <div className={styles.image}>
            <div className={styles.imgText}>
              <p className={styles.date}>{i18n.dir() === "rtl" ? newsList[0].dateAr : newsList[0].dateEn}</p>
              <h3 className={styles.newsTitle}>{i18n.dir() === "rtl" ? newsList[0].detailsAr : newsList[0].detailsEn}</h3>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/news/01.jpg"} alt="" />
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.image}>
            <div className={styles.imgText}>
              <p className={styles.date}>{i18n.dir() === "rtl" ? newsList[1].dateAr : newsList[0].dateEn}</p>
              <h3 className={styles.newsTitle}>{i18n.dir() === "rtl" ? newsList[1].detailsAr : newsList[0].detailsEn}</h3>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/news/02.jpg"} alt="" />
          </div>
          <div className={styles.image}>
            <div className={styles.imgText}>
              <p className={styles.date}>{i18n.dir() === "rtl" ? newsList[2].dateAr : newsList[0].dateEn}</p>
              <h3 className={styles.newsTitle}>{i18n.dir() === "rtl" ? newsList[2].detailsAr : newsList[0].detailsEn}</h3>            </div>
            <img src={process.env.PUBLIC_URL + "/images/news/03.jpg"} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.allNews}>
        <div className={styles.selectYear}>
          <select onChange={selectYearHandler}>
            <option value={t("News-allYears")}>{t("News-allYears")}</option>
            {
              yearsList.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <ul className={styles.allNewsList}>
          {
            filteredNewsList.slice(0, lastNum).map((item, index) => (
              <NewsCard
                key={index}
                item={item}
                index={index}
                toggle={toggle}
                selected={selected}
              />
            ))
          }
        </ul>
        {
          filteredNewsList.length !== lastNum ? (
            <div className={styles.showMoreBtn}>
              <button onClick={showMoreHandler}>{t("News-showMore")}</button>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default News