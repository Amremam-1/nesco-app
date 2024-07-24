import { useTranslation } from "react-i18next";
import styles from "../PersonalInfo/styles.module.scss";
import Input from "../../Auth/Input/Input";

const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-step-2")}</h3>
        <div className={styles.form}>
          <Input 
            name="mobile"
            inputType="text"
            label= "Mobile Number"
            placeHolder="Mobile Number"
            bg="#FFFFFF"
          />
          <Input 
            name="email"
            inputType="email"
            label= "E-Mail"
            placeHolder="E-Mail"
            bg="#FFFFFF"
          />
          <Input 
            name="phone"
            inputType="text"
            label= "Phone Number"
            placeHolder="Phone Number"
            bg="#FFFFFF"
          />
          <Input 
            name="address"
            inputType="text"
            label= "Address"
            placeHolder="Address"
            bg="#FFFFFF"
          />
        </div>
      </div>
    </div>
  )
}


export default ContactInfo