import { useTranslation } from "react-i18next"
import useGetSetting from "../../../hooks/setting/useGetSetting"
import styles from "./styles.module.scss"
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6"

const Footer = () => {
  const { t, i18n } = useTranslation()
  // const [
  //   settingData,
  //   email,
  //   mobile,
  //   website_name,
  //   facebook_link,
  //   instgram_link,
  //   twitter_link,
  //   address,
  //   whatsapp,
  //   android_link,
  //   ios_link,
  //   policy,
  //   cities
  // ] = useGetSetting();

  return (
    <section className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.top}>
            <div className={styles.payMethods}>
              <p className={styles.text}>{t("home-footer-payMethods")}</p>
              <div className={styles.imgs}>
                <a href="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/creditCard.png"}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className={styles.contactus}>
              <p className={styles.text}>{t("home-footer-contactUsOn")}</p>
              <a href="tel:+966 8007550022" title="+966 8007550022">
                8007550022
              </a>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.links}>
              <div className={styles.copyrights}>
                <p>{t("home-footer-copyrights")}</p>
              </div>
              <ul className={styles.linksList}>
                <li className={styles.item}>
                  <a href="/sitemap">{t("home-footer-siteMap")}</a>
                </li>
                <li className={styles.item}>
                  <a href="/termsConditions">{t("home-footer-terms")}</a>
                </li>
                <li className={styles.item}>
                  <a href="/political">{t("home-footer-political")}</a>
                </li>
                <li className={styles.item}>
                  <a href="/faqs">{t("home-footer-faq")}</a>
                </li>
                <li className={styles.item}>
                  <a href="/contact-us">{t("home-footer-contactUs")}</a>
                </li>
                <li className={styles.item}>
                  <a href="/corporate-login">
                    {t("home-footer-corporateLogin")}
                  </a>
                </li>
              </ul>
            </div>
            <ul className={styles.socialList}>
              <li className={styles.socialList__item}>
                <a
                  href="https://instagram.com/nestrettocoffee.sa?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className={styles.socialList__item}>
                <a
                  href="https://www.tiktok.com/@nestrettocoffee.sa?_t=8hVyG9zyX2t&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className={styles.socialList__item}>
                <a href="/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
