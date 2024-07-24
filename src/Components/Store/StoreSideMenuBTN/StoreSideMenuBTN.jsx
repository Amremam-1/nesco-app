import { FaBars, FaChevronLeft } from "react-icons/fa6"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";


const StoreSideMenuBTN = ({ storeSideMenuHandler }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      onClick={storeSideMenuHandler}
      className={i18n.dir() === "rtl" ? styles.sideBarMenuBtn : styles.sideBarMenuBtnLtr}
      // style={i18n.dir() === "rtl" ? {left: "0px"} : {right: "0px"}}
    >
      <button>
        <FaBars />
      </button>
    </div>
  )
}

export default StoreSideMenuBTN