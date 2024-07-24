import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const imgsGalleryList = [
  {
    year: "2022",
    imgs: ["01.mp4", "02.mp4", "03.mp4", "04.mp4", "05.mp4"],
  },
  {
    year: "2023",
    imgs: ["01.mp4", "02.mp4", "03.mp4", "04.mp4", "05.mp4", "06.mp4", "07.mp4"],
  },
];

const Videos = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {}, [t])

  const [selectedYear, setSelectedYear] = useState(t("News-allYears"));

  const selectYearHandler = (e) => {
    setSelectedYear(e.target.value)
  }

  let filteredYearList = imgsGalleryList.filter((item, index) => item.year === selectedYear);
  console.log("filteredYearList: ", filteredYearList);

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__wrapper}>
        <div className={styles.top}>
          <div className={styles.selectedYear}>
            <h3 className={styles.year}>{selectedYear}</h3>
          </div>
          <div className={styles.selectYear}>
            <select onChange={selectYearHandler}>
              <option value={t("News-allYears")}>{t("News-allYears")}</option>
              {
                imgsGalleryList.map((item, index) => (
                  <option key={index} value={item.year}>{item.year}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
      <div className={styles.imgsGallery}>
        {filteredYearList.length !== 0 ? (
          filteredYearList.map((item) => (
            item.imgs.map((subItem, index) => (
              <div className={styles.image} key={index}>
                <video controls>
                  <source src={`/images/news/videos/${selectedYear}/${subItem}`} type="video/mp4" />
                </video>
              </div>
            ))
          )) 
        ) : (
            imgsGalleryList.map((item) => (
              item.imgs.map((subItem, i) => (
                <div className={styles.image} key={i} >
                  <video controls>
                    <source src={`/images/news/videos/${item.year}/${subItem}`} type="video/mp4" />
                  </video>
                </div>
              ))
          ))
        )}
      </div>
    </div>
  )
}


export default Videos