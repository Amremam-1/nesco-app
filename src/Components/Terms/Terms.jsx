import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import styles from "./styles.module.scss";


const Terms = () => {
  const { t, i18n } = useTranslation();


  return (
    <section className={styles.terms}>
      <div className={styles.terms__container}>
        <div className="pageTitle">
          <h2>{t("terms-mainTitle")}</h2>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-privacy-title")}</h3>
            <p className={styles.textParg1}>
              <strong>{t("terms-privacy-text-1")}</strong>
            </p>
            <p className={styles.textParg2}>
              <strong>{t("terms-privacy-text-2")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-privacy-text-3")}</p>
            <p className={styles.textParg}>{t("terms-privacy-text-4")}</p>
            <p className={styles.textParg}>{t("terms-privacy-text-5")}</p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-contents-title")}</h3>
            <ul className={styles.contentList}>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#information">{t("terms-contents-text-1")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#mobile">{t("terms-contents-text-2")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#social">{t("terms-contents-text-3")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#informationCollect">{t("terms-contents-text-4")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#third-Parties">{t("terms-contents-text-5")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#cookies">{t("terms-contents-text-6")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#optOut">{t("terms-contents-text-7")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#applyJob">{t("terms-contents-text-8")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#international">{t("terms-contents-text-9")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#personal">{t("terms-contents-text-10")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#children">{t("terms-contents-text-11")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#links">{t("terms-contents-text-12")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#privacyPolicy">{t("terms-contents-text-13")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#security">{t("terms-contents-text-14")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#browsers">{t("terms-contents-text-15")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#loyalty">{t("terms-loyalty-title")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#refund">{t("terms-refund-title")}</a>
              </li>
              <li className={styles.listItem}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href="#contact-us">{t("terms-contents-text-16")}</a>
              </li>
            </ul>
          </div>
          <div id="information" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-information-title")}</h3>
            <p className={styles.textParg}>
              <strong>{t("terms-information-text-1")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-information-text-2")}</p>
            <p className={styles.textParg}>
              <strong>{t("terms-information-text-3")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-information-text-4")}</p>
            <p className={styles.textParg}>
              <strong>{t("terms-information-text-5")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-information-text-6")}</p>
            <p className={styles.textParg}>{t("terms-information-text-7")}</p>
            <p className={styles.textParg}>
              <strong>{t("terms-information-text-8")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-information-text-9")}</p>
            <p className={styles.textParg}>{t("terms-information-text-10")}</p>
          </div>
          <div id="mobile" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-mobile-title")}</h3>
            <p className={styles.textParg}>{t("terms-mobile-text-1")}</p>
            <p className={styles.textParg}>{t("terms-mobile-text-2")}</p>
            <ul className={styles.contentList}>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-3")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-4")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-5")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-6")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-7")}</p>
              </li>
            </ul>
            <p className={styles.textParg}>{t("terms-mobile-text-8")}</p>
            <ul className={styles.contentList}>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-9")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-10")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-11")}</p>
              </li>
            </ul>
            <p className={styles.textParg1}>
              <strong>{t("terms-mobile-text-12")}</strong>
            </p>
            <ul className={styles.contentList}>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-13")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-14")}</p>
              </li>
              <li className={styles.listItem2}>
                <GoDotFill />
                <p className={styles.textParg}>{t("terms-mobile-text-15")}</p>
              </li>
            </ul>
          </div>
          <div id="social" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-social-title")}</h3>
            <p className={styles.textParg}>{t("terms-social-text-1")}</p>
            <p className={styles.textParg}>{t("terms-social-text-2")}</p>
            <p className={styles.textParg}>{t("terms-social-text-3")}</p>
            <p className={styles.textParg}>{t("terms-social-text-4")}</p>
          </div>
          <div id="informationCollect" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-infoCollected-title")}</h3>
            <p className={styles.textParg}>{t("terms-infoCollected-text-1")}</p>
            <p className={styles.textParg}>{t("terms-infoCollected-text-2")}</p>
          </div>
          <div id="third-Parties" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-third-title")}</h3>
            <p className={styles.textParg}>{t("terms-third-text-1")}</p>
            <p className={styles.textParg}>{t("terms-third-text-2")}</p>
            <p className={styles.textParg}>{t("terms-third-text-3")}</p>
            <p className={styles.textParg}>{t("terms-third-text-4")}</p>
            <br />
            <p className={styles.textParg}>{t("terms-third-text-5")}</p>
            <br />
            <p className={styles.textParg}>{t("terms-third-text-6")}</p>
          </div>
          <div id="cookies" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-cookies-title")}</h3>
            <p className={styles.textParg2}>
              <strong>{t("terms-cookies-text-1")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-cookies-text-2")}</p>
            <p className={styles.textParg}>{t("terms-cookies-text-3")}</p>
            <p className={styles.textParg}>{t("terms-cookies-text-4")}</p>
          </div>
          <div id="optOut" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-opt-title")}</h3>
            <p className={styles.textParg}>{t("terms-opt-text-1")}</p>
            <br />
            <p className={styles.textParg2}>
              <strong>{t("terms-opt-text-2")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-opt-text-3")}</p>
            <br />
            <p className={styles.textParg2}>
              <strong>{t("terms-opt-text-4")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-opt-text-5")}</p>
            <br />
            <p className={styles.textParg2}>
              <strong>{t("terms-opt-text-6")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-opt-text-7")}</p>
            <br />
            <p className={styles.textParg2}>
              <strong>{t("terms-opt-text-8")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-opt-text-9")}</p>
            <br />
            <p className={styles.textParg2}>
              <strong>{t("terms-opt-text-10")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-opt-text-11")}</p>
          </div>
          <div id="applyJob" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-job-title")}</h3>
            <p className={styles.textParg}>{t("terms-job-text-1")}</p>
          </div>
          <div id="international" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-international-title")}</h3>
            <p className={styles.textParg}>{t("terms-international-text-1")}</p>
            <p className={styles.textParg}>{t("terms-international-text-2")}</p>
          </div>
          <div id="personal" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-personal-title")}</h3>
            <p className={styles.textParg}>{t("terms-personal-text-1")}</p>
            <p className={styles.textParg}>{t("terms-personal-text-2")}</p>
          </div>
          <div id="children" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-children-title")}</h3>
            <p className={styles.textParg}>{t("terms-children-text-1")}</p>
          </div>
          <div id="links" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-links-title")}</h3>
            <p className={styles.textParg}>{t("terms-links-text-1")}</p>
          </div>
          <div id="privacyPolicy" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-updates-title")}</h3>
            <p className={styles.textParg}>{t("terms-updates-text-1")}</p>
          </div>
          <div id="security" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-security-title")}</h3>
            <p className={styles.textParg}>{t("terms-security-text-1")}</p>
            <p className={styles.textParg}>{t("terms-security-text-2")}</p>
          </div>
          <div id="browsers" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-browsers-title")}</h3>
            <p className={styles.textParg}>{t("terms-browsers-text-1")}</p>
          </div>
          <br />
          <br />
          <div id="loyalty" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-loyalty-title")}</h3>
            <p className={styles.textParg}>{t("terms-loyalty-text-1")}</p>
            <p className={styles.textParg}>{t("terms-loyalty-text-2")}</p>
            <p className={styles.textParg}>{t("terms-loyalty-text-3")}</p>
            <p className={styles.textParg}>{t("terms-loyalty-text-4")}</p>
            <p className={styles.textParg}>{t("terms-loyalty-text-5")}</p>
            <p className={styles.textParg}>{t("terms-loyalty-text-6")}</p>
          </div>
          <br />
          <div id="refund" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-refund-title")}</h3>
            <p className={styles.textParg}>{t("terms-refund-text-1")}</p>
            <br />
            <p className={styles.textParg}>
              <strong>{t("terms-refund-text-1-1")}</strong>
            </p>
            <p className={styles.textParg}>{t("terms-refund-text-2")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-3")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-4")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-5")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-6")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-7")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-8")}</p><br />
            <p className={styles.textParg}>{t("terms-refund-text-9")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-10")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-11")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-12")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-13")}</p>
            <p className={styles.textParg}>{t("terms-refund-text-14")}</p>
          </div>
          <br />
          <div id="contact-us" className={styles.textBox}>
            <h3 className={styles.secTitle}>{t("terms-contactus-title")}</h3>
            <p className={styles.textParg}>{t("terms-contactus-text-1")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-2")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-3")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-4")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-5")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-6")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-7")}</p>
            <p className={styles.textParg1}>{t("terms-contactus-text-8")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms;