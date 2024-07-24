import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Ask = ({ title, name, list, onChange }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ask}>
      <label className={styles.title}>{title}</label>
      <div className={styles.answers}>
        {
          list?.map((item, index) => (
            <div className={styles.ans} key={index}>
              <input className={styles.radioInput} name={name} id={item.titleEn} type="radio" />
              <label className={styles.radioLabel} htmlFor={item.titleEn}>
                {i18n.dir() === "rtl" ? item.titleAr : item.titleEn}
              </label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Ask;