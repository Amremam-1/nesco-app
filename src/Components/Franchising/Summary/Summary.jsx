import { useTranslation } from "react-i18next";
import styles from "../PersonalInfo/styles.module.scss";

const Summary = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-summary")}</h3>
        <div className={styles.form}>
          <div className={styles.summBox}>
            <h3 className={styles.summartTitle}>{t("franchise-response")}</h3>
            <a className={styles.goHomeBtn} href="/">{t("checkout-paymentMethod-summ-goHome")}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary