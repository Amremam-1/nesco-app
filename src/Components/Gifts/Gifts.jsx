import { useTranslation } from "react-i18next";
import GiftCard from "./GiftCard/GiftCard";
import styles from "./styles.module.scss";

const Gifts = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.gifts}>
      <div className={styles.container}>
        <div className="pageTitle">
          <h2>{t("gifts-text-1")}</h2>
        </div>
        <div className={styles.giftBox}>
          <h4 className={styles.categTitle}>{t("gifts-text-2")}</h4>
          <ul className={styles.giftList}>
            <GiftCard />
            <GiftCard />
            <GiftCard />
            <GiftCard />
          </ul>
        </div>
        <div className={styles.announce}>
          <div className={styles.image}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
          </div>
          <p className={styles.text}>{t("gifts-text-3")}</p>
        </div>
        <div className={styles.giftBox}>
          <h4 className={styles.categTitle}>{t("gifts-text-4")}</h4>
          <ul className={styles.giftList}>
            <GiftCard />
          </ul>
        </div>
      </div>
      <div className={styles.giftSupport}>
        <div className={styles.container2}>
          <div className={styles.content}>
            <h3 className={styles.title}>{t("gifts-text-5")}</h3>
            <p className={styles.text}>{t("gifts-text-6")}</p>
            <div className={styles.links}>
              <a className={styles.link} href="/gift">{t("gifts-text-7")}</a>
              <a className={styles.link} href="/termsConditions">{t("gifts-text-8")}</a>
              <a className={styles.link} href="/faqs">{t("gifts-text-9")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gifts