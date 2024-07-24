import { useTranslation } from "react-i18next";
import styles from "../PersonalInfo/styles.module.scss";
import Input from "../../Auth/Input/Input";

const JobInfo = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-step-3")}</h3>
        <div className={styles.form}>
          <Input 
            name="jobTitle"
            inputType="text"
            label={t("franchise-jobTitle")}
            placeHolder={t("franchise-jobTitle")}
            bg="#FFFFFF"
          />
          <Input 
            name="employer"
            inputType="text"
            label={t("franchise-employer")}
            placeHolder={t("franchise-employer")}
            bg="#FFFFFF"
          />
          <Input 
            name="workAddress"
            inputType="text"
            label={t("franchise-workAddress")}
            placeHolder={t("franchise-workAddress")}
            bg="#FFFFFF"
          />
          <Input 
            name="joiningDate"
            inputType="date"
            label={t("franchise-joiningDate")}
            placeHolder={t("franchise-joiningDate")}
            bg="#FFFFFF"
          />
          <Input 
            name="experience"
            inputType="text"
            label={t("franchise-experience")}
            placeHolder={t("franchise-experience")}
            bg="#FFFFFF"
          />
          <Input 
            name="companyEmail"
            inputType="text"
            label={t("franchise-companyEmail")}
            placeHolder={t("franchise-companyEmail")}
            bg="#FFFFFF"
          />
          <Input 
            name="previousJobs"
            inputType="text"
            label={t("franchise-previousJobs")}
            placeHolder={t("franchise-previousJobs")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  )
}


export default JobInfo