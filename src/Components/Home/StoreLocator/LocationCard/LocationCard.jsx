import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { FaExternalLinkAlt, FaShareAlt } from "react-icons/fa"
import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialShare from "../../../Utils/SocialShare/SocialShare";
import { FaLocationArrow } from "react-icons/fa";


const LocationCard = ({ index, item, toggle, selected, clickBranchHandler, cityLocationsHandler }) => {
  const { t, i18n } = useTranslation();

  const [showSocial, setShowSocial] = useState(false);

  const showSocialHandler = () => {
    setShowSocial(!showSocial);
  }

  const showCityBranches = () => {
    toggle(index);
    cityLocationsHandler(item.branches, item.center);
  }
  
  return (
    <li className={styles.locationItem}>
      <div onClick={showCityBranches}  className={styles.locationHead}>
        <h2 className={styles.title}>{i18n.dir() === "rtl" ? item.nameAr : item.nameEn}</h2>
        <div className={styles.icons}>
          {
            selected === index ? <BiChevronUp /> : <BiChevronDown />
          }
        </div>
      </div>
      {
        item.branches.map((branch, i) => (
          <div className={selected === index ? styles.locationDetails : styles.locationDetailsHidden}>
            <div className={styles.head}>
              <h3 className={styles.title}>{i18n.dir() === "rtl" ? branch.nameAr : branch.nameEn}</h3>
              <div onClick={() => clickBranchHandler(branch.latLang)} className={styles.locationBTN}>
                <FaLocationArrow />
              </div>
            </div>
            <p className={styles.address}>{i18n.dir() === "rtl" ? branch.nameAr : branch.nameEn} - {branch.hotNum}</p>
            <p className={styles.phone}>
              <span><b>{t("storeLocator-locationCard-phone")}</b></span>
              {/* <span>{branch.phone}</span> */}
              <a href={`tel:+966${branch.phone}`} title={`+966 ${branch.phone}`}>+966 {branch.phone}</a>
            </p>
            <div className={styles.locationFooter}>
              <button className={styles.maps}>
                <a className={styles.mapLink} href={branch.location} rel="noreferrer" target="_blank">
                  <span>{t("storeLocator-locationCard-google")}</span>
                  <FaExternalLinkAlt />
                </a>
              </button>
              <div className={styles.share}>
                <button onClick={showSocialHandler} className={styles.shareBtn}><FaShareAlt /></button>
                <SocialShare showSocial={showSocial} />
              </div>
            </div>
          </div>
        ))
      }
    </li>
  )
}

export default LocationCard