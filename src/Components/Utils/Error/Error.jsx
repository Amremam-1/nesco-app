import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";


const Error = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorPage__container}>
        <a href="/" className={styles.logo}>
          <img width={217} height={100} src={process.env.PUBLIC_URL + "/images/nescologo.png"} alt="" />
        </a>
        <h1 className={styles.title}><span>404</span>{t("error-mainTitle")}</h1>
        <div className={styles.image}>
          <img src="/images/404error.jpg" alt="" />
        </div>
        {/* <a href="/">
          <h3 className={styles.secTitle}>{t("error-secTitle")}</h3>
        </a> */}
      </div>
    </section>
  )
}

export default Error