import Input from "../Input/Input"
import useLogin from "../../../hooks/auth/useLogin"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import Popup from "../../Utils/Popup/Popup"
import { ToastContainer } from "react-toastify"
import OAuth from "../OAuth/OAuth"

const Login = ({ pageTitle }) => {
  const { t, i18n } = useTranslation()

  const [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    errMsgPopUp,
    successMsgPopUp,
    isLoggedIn,
    onSubmit,
  ] = useLogin()
  // console.log("localStorage.getItem('i18nextLng')", localStorage.getItem("i18nextLng"))

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <form className={styles.registerForm} onSubmit={onSubmit}>
          <Input
            name="email"
            value={email}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            errorMsg={emailError}
            inputType="email"
            placeHolder={t("login-writeYourEmail")}
            forLogin={true}
          />
          <Input
            name="password"
            value={password}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            errorMsg={passwordError}
            inputType="password"
            placeHolder={t("login-WriteYourPassword")}
            forLogin={true}
          />
          <div className={styles.bottomWrapper}>
            {/* <>
              {errMsgPopUp  ? <Popup time={10000} type="error" msg={errMsgPopUp} /> : null}
              {successMsgPopUp  ? <Popup time={10000} type="success" msg={successMsgPopUp} /> : null}
            </> */}

            <div className={styles.auth}>
              <button className={styles.registerBtn}>
                {t("login-signIn")}
              </button>

              <OAuth />
            </div>

            <a className={styles.forgetPasss} href="/forget-password">
              {t("login-areYouForget")}
            </a>
            <div className={styles.registerNew}>
              <p>{t("login-registerNewAccount")}</p>
              <a className={styles.forgetPasss} href="/register">
                {t("register-registerNewAccount")}
              </a>
            </div>
          </div>
        </form>
      </div>
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

export default Login
