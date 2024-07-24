import { useTranslation } from "react-i18next";
import styles from "../PersonalInfo/styles.module.scss";
import Input from "../../Auth/Input/Input";
import AskYesNo from "../../Utils/AskYesNo/AskYesNo";

const FinancialCondition = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-step-2")}</h3>
        <div className={styles.form}>
          <Input 
            name="annualIncome"
            inputType="number"
            label={t("franchise-TotalAnnualIncome")}
            placeHolder={t("franchise-TotalAnnualIncome")}
            bg="#FFFFFF"
          />
          <Input 
            name="bankAccountType"
            inputType="text"
            label={t("franchise-bankAccountType")}
            placeHolder={t("franchise-bankAccountType")}
            bg="#FFFFFF"
          />
          <Input 
            name="commercialActivity"
            inputType="text"
            label={t("franchise-commercialActivity")}
            placeHolder={t("franchise-commercialActivity")}
            bg="#FFFFFF"
          />
          <Input 
            name="expectedCapital"
            inputType="text"
            label={t("franchise-expectedCapital")}
            placeHolder={t("franchise-expectedCapital")}
            bg="#FFFFFF"
          />
          <Input 
            name="lown"
            inputType="text"
            label={t("franchise-loan")}
            placeHolder={t("franchise-loan")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <AskYesNo
            title={t("franchise-manageBusiness")}
            name="manageBusiness"
          />
          <AskYesNo
            title={t("franchise-havepartners")}
            name="havepartners"
          />
        </div>
      </div>
    </div>
  )
}


export default FinancialCondition