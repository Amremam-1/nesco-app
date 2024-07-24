import { useTranslation } from "react-i18next";
import useAccountManager from "../../../hooks/account/useAccountManager";
import Input from "../../Auth/Input/Input";
import styles from "./styles.module.scss";
import useUpdateUserProfile from "../../../hooks/userProfile/useUpdateUserProfile";
import Popup from "../../Utils/Popup/Popup";
import { getUserProfile } from "../../../redux/thunkActions/userActions";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AccountManager = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const userData = {
    "name":"Ahmed Khaled AbdAllah 8",
    "email":"test17@gmail.com",
    "password":"12345678",
    "mobile":"01118833920",
    "address":"KSA- Jeddah- ST-03"
  }

  // const [
  //   updateUserProfileHandler,
  //   updateUserProfileRes,
  //   updateMessage,
  //   updatedUserData
  // ] = useUpdateUserProfile(userData);

  // console.log("___OOOOOO___________________updateUserProfileRes:", updateUserProfileRes)

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
    oldPassword,
    oldPasswordError,
    onChangeOldPassword,
    onBlurOldPassword,
    newPassword,
    newPasswordError,
    onChangeNewPassword,
    onBlurNewPassword,
    confirmNewPassword,
    confirmNewPasswordError,
    onChangeConfirmNewPassword,
    onBlurConfirmNewPassword,
    isEmailNotifyChecked,
    isSMSNotifyChecked,
    emailNotifyHandler,
    smsNotifyHandler,
    onSubmit,
    updateUserProfileRes,
    updateMessage,
    updatedUserData
  ] = useAccountManager();

  console.log("___OOOOOO___________________updateUserProfileRes:", updateUserProfileRes);


  // useEffect(() => {
  //   const run = async () => {
  //     await dispatch(getUserProfile({
  //       "token": Cookies.get("api_token")
  //     }));
  //   }

  //   run();
  // }, [localStorage.getItem("i18nextLng")]);

  return (
    <div className={styles.accountManager}>
      <div className={styles.accountManager__container}>
        <form className={styles.accoutMangForm} onSubmit={onSubmit}>
          <label className={styles.title}>{t("account-accountManager-personalInfo")}</label>
          <div className={styles.inputsBox}>
            <Input 
              name="firstName"
              value={firstName}
              onChange={onChangeFirstName}
              onBlur={onBlurFirstName}
              errorMsg={firstNameError}
              inputType="text"
              placeHolder={t("account-firstName")}
            />
            <Input 
              name="lastName"
              value={lastName}
              onChange={onChangeLastName}
              onBlur={onBlurLastName}
              errorMsg={lastNameError}
              inputType="text"
              placeHolder={t("account-lastName")}
            />
            <Input 
              name="phone"
              value={phone}
              onChange={onChangePhone}
              onBlur={onBlurPhone}
              errorMsg={phoneError}
              inputType="text"
              placeHolder={t("account-phone")}
            />
            <Input 
              name="email"
              value={email}
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
              errorMsg={emailError}
              inputType="email"
              placeHolder={t("account-email")}
            />
          </div>
          <label className={styles.title}>{t("account-accountManager-changePassword")}</label>
          <div className={styles.inputsBox}>
            <Input 
              name="oldPassword"
              value={oldPassword}
              onChange={onChangeOldPassword}
              onBlur={onBlurOldPassword}
              errorMsg={oldPasswordError}
              inputType="password"
              placeHolder={t("account-accountManager-placeHolder-oldPassword")}
              forLogin={true}
            />
            <Input 
              name="newPassword"
              value={newPassword}
              onChange={onChangeNewPassword}
              onBlur={onBlurNewPassword}
              errorMsg={newPasswordError}
              inputType="password"
              placeHolder={t("account-accountManager-placeHolder-newPassword")}
            />
            <Input 
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={onChangeConfirmNewPassword}
              onBlur={onBlurConfirmNewPassword}
              errorMsg={confirmNewPasswordError}
              inputType="password"
              placeHolder={t("account-accountManager-placeHolder-confirmNewPassword")}
            />
          </div>
          <hr />
          <label className={styles.title}>{t("account-accountManager-notifications")}</label>
          <div className={styles.bottomWrapper}>
            <>
              {updateUserProfileRes?.message  ? <Popup time={10000} type="success" msg={updateUserProfileRes.message} /> : null}
            </>
            <div className={styles.terms}>
              <input type="checkbox" onChange={emailNotifyHandler} checked={isEmailNotifyChecked}  />
              <label>{t("account-accountManager-notifEmail")}</label>
            </div>
            <div className={styles.terms}>
              <input type="checkbox" onChange={smsNotifyHandler} checked={isSMSNotifyChecked}  />
              <label>{t("account-accountManager-notifSMS")}</label>
            </div>
            <button className={styles.sendBtn}>{t("account-send")}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountManager