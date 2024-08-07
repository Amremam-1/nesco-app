// import ComplaintForm from "../ComplaintForm/ComplaintForm"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"

const Corporate = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>{t("corporate_title")}</h1>
          <p>{t("corporate_subtitle")}</p>
        </header>

        {/* <ComplaintForm /> */}
        <div className={styles.login}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfLmDI0OyxXY8yXYGeQ2V58sEUqgmp0NcMZr5RuY15AVIcXPw/viewform"
            className={styles.franchising__link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("corporate_button")}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Corporate
