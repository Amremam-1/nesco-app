import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import Input from "../../Auth/Input/Input";
import useFranchising from "../../../hooks/franchising/useFranchising";

const PersonalInfo = () => {
  const { t, i18n } = useTranslation();

  const [
    fullName,
    fullNameError,
    onChangeFullName,
    onBlurFullName,
    IDNumber,
    IDNumberError,
    onChangeIDNumber,
    onBlurIDNumber,
    nationality,
    nationalityError,
    onChangeNationality,
    onBlurNationality,
    dateOfBirth,
    dateOfBirthError,
    onChangeDateOfBirth,
    onBlurDateOfBirth,
    educQualification,
    educQualificationError,
    onChangeEducQualification,
    onBlurEducQualification,
    onSubmit
  ] = useFranchising();


  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-step-1")}</h3>
        <div className={styles.form}>
          <Input 
            name="fullName"
            value={fullName}
            errorMsg={fullNameError}
            onChange={onChangeFullName}
            onBlur={onBlurFullName}
            inputType="text"
            label={t("franchise-fullName")}
            placeHolder={t("franchise-fullName")}
            bg="#FFFFFF"
          />
          <Input 
            name="IDNumber"
            value={IDNumber}
            errorMsg={IDNumberError}
            onChange={onChangeIDNumber}
            onBlur={onBlurIDNumber}
            inputType="text"
            label={t("franchise-IDNumber")}
            placeHolder={t("franchise-IDNumber")}
            bg="#FFFFFF"
          />
          <Input 
            name="nationality"
            value={nationality}
            errorMsg={nationalityError}
            onChange={onChangeNationality}
            onBlur={onBlurNationality}
            inputType="text"
            label={t("franchise-nationality")}
            placeHolder={t("franchise-nationality")}
            bg="#FFFFFF"
          />
          <Input 
            name="dateOfBirth"
            value={dateOfBirth}
            errorMsg={dateOfBirthError}
            onChange={onChangeDateOfBirth}
            onBlur={onBlurDateOfBirth}
            inputType="date"
            label={t("franchise-dateOfBirth")}
            placeHolder={t("franchise-dateOfBirth")}
            bg="#FFFFFF"
          />
          <Input 
            name="educQualification"
            value={educQualification}
            errorMsg={educQualificationError}
            onChange={onChangeEducQualification}
            onBlur={onBlurEducQualification}
            inputType="text"
            label={t("franchise-educQualification")}
            placeHolder={t("franchise-educQualification")}
            bg="#FFFFFF"
          />
          <Input 
            name="mobileNumber"
            inputType="text"
            label={t("franchise-mobileNumber")}
            placeHolder={t("franchise-mobileNumber")}
            bg="#FFFFFF"
          />
          <Input 
            name="email"
            inputType="email"
            label={t("franchise-email")}
            placeHolder={t("franchise-email")}
            bg="#FFFFFF"
          />
          <Input 
            name="phoneNumber"
            inputType="text"
            label={t("franchise-phoneNumber")}
            placeHolder={t("franchise-phoneNumber")}
            bg="#FFFFFF"
          />
          <Input 
            name="address"
            inputType="text"
            label={t("franchise-address")}
            placeHolder={t("franchise-address")}
            bg="#FFFFFF"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo