import { useTranslation } from "react-i18next";
import Input from "../../Auth/Input/Input";
import styles from "../PersonalInfo/styles.module.scss";
import AskYesNo from "../../Utils/AskYesNo/AskYesNo";
import Ask from "../../Utils/Ask/Ask";
import { FiUpload } from "react-icons/fi";

const AboutFranchising = () => {
  const { t, i18n } = useTranslation();
  const branchesToStartList = [
    {
      titleEn: 1,
      titleAr: 1,
    },
    {
      titleEn: 2,
      titleAr: 2,
    },
    {
      titleEn: 3,
      titleAr: 3,
    },
    {
      titleEn: "Furthermore",
      titleAr: "أكثر من ذلك",
    },
  ];

  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("franchise-step-3")}</h3>
        <div className={styles.form}>
          <Input 
            name="franchiseReason"
            inputType="text"
            label={t("franchise-franchiseReason")}
            placeHolder={t("franchise-franchiseReason")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <Ask
            title={t("franchise-branchesToStart")}
            name="branchesToStart"
            list={branchesToStartList}
          />
          <AskYesNo
            title={t("franchise-expandPlans")}
            name="expandPlans"
          />
          <Input 
            name="franchiseCity"
            inputType="text"
            label={t("franchise-franchiseCity")}
            placeHolder={t("franchise-franchiseCity")}
            bg="#FFFFFF"
          />
          <Input 
            name="suggestedLocation"
            inputType="text"
            label={t("franchise-suggestedLocation")}
            placeHolder={t("franchise-suggestedLocation")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <Input 
            name="suggestions"
            inputType="text"
            label={t("franchise-suggestions")}
            placeHolder={t("franchise-suggestions")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <div className={styles.uploadFiles}>
            <h3 className={styles.uploadTitle}>
              {t("franchise-upload1")}<br />
              {t("franchise-upload2")}<br />
              {t("franchise-upload3")}<br />
            </h3>
            <label className={styles.uploadBtn} htmlFor="uploadFile">
              <FiUpload />
              <span>{t("franchise-upload4")}</span>
            </label>
            <input type="file" multiple id="uploadFile" style={{display: "none"}} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default AboutFranchising