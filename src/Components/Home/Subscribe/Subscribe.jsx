import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import Popup from "../../Utils/Popup/Popup"
import useSubscribe from "../../../hooks/subscribe/useSubscribe"

const Subscribe = ({ isForHome }) => {
  const { t } = useTranslation()

  const [email, emailError, onChangeEmail, onBlurEmail, onSubmit] =
    useSubscribe()

  return (
    <section className={styles.main}>
      <div
        className={`${isForHome ? "scrollSection" : ""} ${styles.subscribe}`}
      >
        <>
          {emailError === true && (
            <Popup
              type="success"
              msg={t("popup-subscribeToNewsletter-success")}
            />
          )}
          {emailError === false && (
            <Popup type="error" msg={t("popup-subscribeToNewsletter-failed")} />
          )}
          {emailError === "required" && (
            <Popup
              type="error"
              msg={t("popup-subscribeToNewsletter-required")}
            />
          )}
        </>
        <div className={styles.subscribe__ask}>
          <p className={styles.text}>{t("home-subscribe-question")}</p>
        </div>
        <form className={styles.subscribe__form} onSubmit={onSubmit}>
          <input
            name="email"
            value={email}
            onChange={onChangeEmail}
            // onBlur={onBlurEmail}
            // errorMsg={emailError}
            type="text"
            placeholder={t("home-subscribe-inputPlaceholder")}
          />
          <button className={styles.subscribeBtn}>
            {t("home-subscribe-subscribe")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
