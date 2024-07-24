import { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import useLogout from "../../../hooks/auth/useLogout";
import Cookies from "js-cookie";
import Popup from "../../Utils/Popup/Popup";
import useLogin from "../../../hooks/auth/useLogin";
import useGetCartItems from "../../../hooks/cart/useGetCartItems";
import { ToastContainer } from "react-toastify";

const HeaderIcons = ({ customHeader }) => {
  const { t, i18n } = useTranslation();
  const apiToken = Cookies.get("api_token");
  const [, , , , , , , , , , isLoggedIn, ] = useLogin();
  console.log("isLoggedIn:==--==:", isLoggedIn)
  const [logOutHandler, errMsgPopUp, successMsgPopUp] = useLogout();
  const [
    productsInCartArray,
    cartItemsData,
    cartLength,
    isCartEmpty,
    cartEmptyMsg,
    shippingAddress,
    city,
    isLoadingCart,
    errorCart
  ] = useGetCartItems();

  useEffect(() => {

  }, [cartLength]);


  const [lang, setLang] = useState("AR");
  // const [lang, setLang] = useState(localStorage.getItem("AR"));
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const showAccountMenuHandler = () => {
    setShowAccountMenu(!showAccountMenu);
    setShowLangMenu(false);
  }

  const chooseLangHandler = (selectedLang) => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang)
    // Cookies.set("lang", selectedLang)
    setShowLangMenu(false);
  }

  const showLangHandler = () => {
    setShowLangMenu(!showLangMenu);
    setShowAccountMenu(false);
  }

  // const logOutHandler = () => {
  //   setShowAccountMenu(false);

  // }

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === 'en' || localStorage.getItem("i18nextLng") === 'ar') {
      setLang(localStorage.getItem("i18nextLng"));
      // setLang(Cookies.get("i18nextLng"));
    } else {
      setLang("ar");
      localStorage.setItem("i18nextLng", 'ar')
    }
  }, [lang])

  // useEffect(() => {
  //   if (localStorage.getItem("lang")) {
  //     setLang(localStorage.getItem("lang"));
  //     setLang(Cookies.get("lang"));
  //   } else {
  //     setLang("ar");
  //   }
  // }, [])

  // console.log("Lang:", localStorage.getItem("lang"))

  return (
    <div className={customHeader ? styles.iconsCustom : styles.icons}>
      {/* <>
        {errMsgPopUp  ? <Popup time={10000} type="error" msg={errMsgPopUp} /> : null}
        {successMsgPopUp  ? <Popup time={10000} type="success" msg={successMsgPopUp} /> : null}
      </> */}
      <a href="/cart" className={styles.cart}>
        <FiShoppingCart />
        {
          apiToken ? (
            <span className={styles.itemsNum}>{cartLength}</span>
          ): (
            <span className={styles.itemsNum}>0</span>
            
          )
        }
      </a>
      {apiToken ? (
        <a href="/store/account/wishlist" className={styles.wishlist}>
          <FiHeart />
        </a>
      ) : null}
      <div className={styles.account}>
        <GoPerson onClick={showAccountMenuHandler} />
        {
          showAccountMenu ? (
            <ul className={styles.accountMenu}>
              {
                apiToken ? (
                  <>
                    <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                      <a className={styles.link} href={process.env.PUBLIC_URL + "/store/account"}>{t("home-header-accountSettings")}</a>
                    </li>
                    <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                      <a className={styles.link} href={process.env.PUBLIC_URL + "/store/account/orders"}>{t("home-header-myOrders")}</a>
                    </li>
                    <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                      <a className={styles.link} href={process.env.PUBLIC_URL + "/track-order"}>{t("home-header-trackOrder")}</a>
                    </li>
                    <li className={styles.accountMenu__item} onClick={() => {
                      setShowAccountMenu(false);
                      logOutHandler();
                    }}
                    >
                      <button className={styles.link}>{t("home-header-logout")}</button>
                    </li>
                  </>
                ): (
                    <>
                      <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                        <a className={styles.link} href={process.env.PUBLIC_URL + "/login"}>{t("home-header-login")}</a>
                      </li>
                      <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                        <a className={styles.link} href={process.env.PUBLIC_URL + "/register"}>{t("home-header-register")}</a>
                      </li>
                      <li className={styles.accountMenu__item} onClick={()=>setShowAccountMenu(false)}>
                        <a className={styles.link} href={process.env.PUBLIC_URL + "/track-order"}>{t("home-header-trackOrder")}</a>
                      </li>
                  </>
                )
              }

            </ul>
          ) : null
        }
      </div>
      <div className={styles.langBox}>
        <span onClick={showLangHandler} className={styles.selectedLang}>{lang}</span>
        {
          showLangMenu ? (
            <ul className={styles.selectLangList}>
              <li className={styles.item} onClick={() => chooseLangHandler("ar")}>AR</li>
              <li className={styles.item} onClick={() => chooseLangHandler("en")}>EN</li>
            </ul>
          ) : null
        }
      </div>
      {/* <div className={styles.langBox}>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)} className={styles.selectLang}>
          <option value="ar" defaultChecked>AR</option>
          <option value="en">EN</option>
        </select>
      </div> */}
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-left" : "bottom-right"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default HeaderIcons