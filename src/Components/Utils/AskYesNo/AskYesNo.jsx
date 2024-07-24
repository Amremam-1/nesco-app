import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const AskYesNo = ({ title, name, onChange }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ask}>
      <label className={styles.title}>{title}</label>
      <div className={styles.answers}>
        <div className={styles.ans}>
          <input className={styles.radioInput} name={name} id="yes" type="radio" />
          <label className={styles.radioLabel} htmlFor="yes">{t("yes")}</label>
        </div>
        <div className={styles.ans}>
          <input className={styles.radioInput} name={name} id="no" type="radio" />
          <label className={styles.radioLabel} htmlFor="no">{t("no")}</label>
        </div>
      </div>
    </div>
  )
}

export default AskYesNo