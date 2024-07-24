import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss"

const LoginFirst = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.loginFirst}>
      <div className={styles.loginFirst__container}>
        <h2 className={styles.title}>{t("withGuard-newMember")}</h2>
        <div className={styles.btns}>
          <a href="/register" className={styles.registerBtn}>{t("home-header-register")}</a>
          <a href="/login" className={styles.loginBtn}>{t("home-header-login")}</a>
        </div>
      </div>
    </div>
  )
}

export default LoginFirst;