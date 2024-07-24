import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { GiRotaryPhone } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./styles.module.scss";
import useGetSetting from "../../hooks/setting/useGetSetting";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const [
    faqsData,
    email,
    mobile,
    website_name,
    facebook_link,
    instgram_link,
    twitter_link,
    address,
    whatsapp,
    android_link,
    ios_link,
    policy,
    cities
  ] = useGetSetting();

  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUs__container}>
        <div className="pageTitle">
          <h2>{t("contactUs-title")}</h2>
        </div>
        <div className={styles.contDetails}>
          <div className={styles.contDetails_text}>
            <div className={styles.icon}>
              <ImLocation  />
            </div>
            <div className={styles.txt}>
              <b>{t("contactUs-address")}</b>
              <span>السعودية</span>
            </div>
          </div>
          <a href="tel:+966920006843" className={styles.contDetails_text}>
            <div className={styles.icon}>
              <FiPhoneCall  />
            </div>
            <div className={styles.txt}>
              <b>{t("contactUs-contactNumber")}</b>
              <span>8007550022</span>
            </div>
          </a>
          <a href="tel:+201092341140" className={styles.contDetails_text}>
            <div className={styles.icon}>
              <BsWhatsapp  />
            </div>
            <div className={styles.txt}>
              <b>{t("contactUs-whatsapp")}</b>
              <span>8007550022</span>
            </div>
          </a>
          <a href="mailto:nestrettocoffee@gmail.com" className={styles.contDetails_text}>
            <div className={styles.icon}>
              <HiOutlineMail  />
            </div>
            <div className={styles.txt}>
              <b>{t("contactUs-email")}</b>
              <span>nestrettocoffee@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactUs