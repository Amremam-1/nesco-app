import styles from "./styles.module.scss"
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaPhoneFlip } from "react-icons/fa6"
import { useTranslation } from "react-i18next"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const Political = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className={styles.political}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.main_title}>{t("Political_one")}</h2>
        </header>
        <div className={styles.some_features}>
          <p className={styles.feature_title}>{t("Political_two")}</p>
          <p className={styles.feature_title}>{t("Political_three")}</p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_four")}
          </p>
        </div>

        <div className={styles.contact}>
          <div className={styles.phone}>
            <FaPhoneFlip />
            <a href="tel:+966 055 432 4763" title="+966 0554324763">
              055 432 4763
            </a>
          </div>
          <div className={styles.phone}>
            <HiOutlineMailOpen />
            <a
              href="tel:info@nestrettocoffee.com"
              title="info@nestrettocoffee.com"
            >
              info@nestrettocoffee.com
            </a>
          </div>
        </div>

        <div className={styles.some_features}>
          <p className={styles.feature_title}>{t("Political_five")}</p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_six")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_seven")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_eight")}
          </p>
        </div>

        <div className={`${styles.some_features} ${styles.two}`}>
          <p className={styles.feature_title}>{t("Political_nine")}</p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_ten")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_1")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_2")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_3")}
          </p>
          <p className={styles.feature_title}>
            {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
            {t("Political_4")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Political
