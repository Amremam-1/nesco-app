import styles from "./styles.module.scss"
import Input from "../Input/Input"
import useRegister from "../../../hooks/auth/useRegister"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Popup from "../../Utils/Popup/Popup"
import { ToastContainer } from "react-toastify"

const Register = () => {
  const { t, i18n } = useTranslation()

  const [
    firstName,
    firstNameError,
    onChangeFirstName,
    onBlurFirstName,
    lastName,
    lastNameError,
    onChangeLastName,
    onBlurLastName,
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    onChangeConfirmPassword,
    onBlurConfirmPassword,
    isTermsAccepted,
    termsChangeHandler,
    showTermsPopup,
    errMsgPopUp,
    successMsgPopUp,
    onSubmit,
  ] = useRegister()

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>{t("register-registerNewAccount")}</h1>
        <form className={styles.registerForm} onSubmit={onSubmit}>
          <Input
            name="firstName"
            value={firstName}
            onChange={onChangeFirstName}
            onBlur={onBlurFirstName}
            errorMsg={firstNameError}
            inputType="text"
            placeHolder={t("register-firstName")}
          />
          <Input
            name="lastName"
            value={lastName}
            onChange={onChangeLastName}
            onBlur={onBlurLastName}
            errorMsg={lastNameError}
            inputType="text"
            placeHolder={t("register-lastName")}
          />
          <Input
            name="phone"
            value={phone}
            onChange={onChangePhone}
            onBlur={onBlurPhone}
            errorMsg={phoneError}
            inputType="text"
            placeHolder={t("register-mobile")}
          />
          <Input
            name="email"
            value={email}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            errorMsg={emailError}
            inputType="email"
            placeHolder={t("register-email")}
          />
          <Input
            name="password"
            value={password}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            errorMsg={passwordError}
            inputType="password"
            placeHolder={t("register-password")}
          />
          <Input
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            onBlur={onBlurConfirmPassword}
            errorMsg={confirmPasswordError}
            inputType="password"
            placeHolder={t("register-confirmPassword")}
          />
          <div className={styles.bottomWrapper}>
            {/* <>
              {showTermsPopup  ? <Popup time={10000} type="error" msg="يرجى الإقرار بالشروط والأحكام للمتابعة" /> : null}
              {errMsgPopUp  ? <Popup time={10000} type="error" msg={errMsgPopUp} /> : null}
              {successMsgPopUp  ? <Popup time={10000} type="success" msg={successMsgPopUp} /> : null}
            </> */}
            <div className={styles.terms}>
              <input
                type="checkbox"
                onChange={termsChangeHandler}
                checked={isTermsAccepted}
              />
              <label>
                {t("register-terms1")}
                <a href="/terms">{t("register-terms2")}</a>
              </label>
            </div>
            <div className={styles.hearOurNews}>
              <input type="checkbox" />
              <label>{t("register-ourNews")}</label>
            </div>
            <button className={styles.registerBtn}>
              {t("register-register")}
            </button>
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

export default Register
