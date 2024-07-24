import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";
import styles from "./styles.module.scss";
import useGetSetting from "../../../hooks/setting/useGetSetting";
import { useTranslation } from "react-i18next";


const MobileMenu = ({ showMobMenuHandler, showMobMenu }) => {
  const { t, i18n } = useTranslation();
  // const [
  //   faqsData,
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

  // console.log("i18n.dir():", i18n.dir())

  const [showSearchBox, setShowSearchBox] = useState(false);
  const openSearchBoxHandler = () => {
    setShowSearchBox(true);
  };
  const closeSearchBoxHandler = () => {
    setShowSearchBox(false);
  };

  return (
    <div className={showMobMenu ? styles.mobMenu : styles.mobMenuHidden} style={i18n.dir() === "ltr" ? {right:0} : {left: 0}}>
      <div className={styles.container}>
        <div className={styles.mobMenuOverlay} onClick={showMobMenuHandler}></div>
        <div className={styles.mobMenuWrapper}>
          <div className={styles.head}>
            <a href="/" className={styles.logo}>
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
              {/* <img width={217} height={100} src={process.env.PUBLIC_URL + "/images/nescologo.png"} alt="" /> */}
            </a>
            <button className={styles.closeBtn} onClick={showMobMenuHandler}>
              <CgClose />
            </button>
          </div>
          <div className={styles.search}>
            <button onClick={openSearchBoxHandler} className={styles.search__icon}>
              <FaSearch />
            </button>
            {
              showSearchBox ? (
                <div className={styles.searchBox}>
                  <button onClick={closeSearchBoxHandler} className={styles.closeSearchBtn}>
                    <CgClose />
                  </button>
                  <input type="text" placeholder={t("home-header-howToHelpYou")} />
                </div>
              ) : null
            }
          </div>
          <ul className={styles.linksList}>
            <li className={styles.listItem}>
              <a href="/about">{t("home-header-aboutus")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/our-menu">{t("home-header-ourMenu")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="/careers">{t("home-header-joinOurFamily")}</a>
            </li>
            <li className={`${styles.listItem} ${styles.listItemDisabled} `}>
              <p>{t("home-header-mediaCenter")}</p>
              {/* <a href="/news">{t("home-header-mediaCenter")}</a> */}
            </li>
            <li className={styles.listItem}>
              <a href="/store">{t("home-header-onlineStore")}</a>
            </li>
          </ul>
          <div className={styles.contacts}>
            <div className={styles.location}>
              <FaLocationDot />
              <a href="/store-locator">{t("home-header-storeLocator")}</a>
            </div>
            <h2 className={styles.title}>{t("home-header-stayConnected")}</h2>
            <div className={styles.phone}>
              <FaPhoneFlip />
              <a href="tel:+966 8007550022" title="+966 8007550022">8007550022</a>
            </div>
            <ul className={styles.socialList}>
              <li className={styles.socialList__item}>
                <a href="https://instagram.com/nestrettocoffee.sa?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className={styles.socialList__item}>
                <a href="https://www.tiktok.com/@nestrettocoffee.sa?_t=8hVyG9zyX2t&_r=1" target="_blank" rel="noreferrer">
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
      </div>
    </div>
  )
}

export default MobileMenu