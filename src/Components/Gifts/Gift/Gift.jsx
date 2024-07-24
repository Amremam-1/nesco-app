import { useTranslation } from "react-i18next";
import Input from "../../Auth/Input/Input";
import styles from "./styles.module.scss";
import SelectInput from "../../Utils/SelectInput/SelectInput";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const Gift = () => {
  const { t, i18n } = useTranslation();
  const [recNum, setRecNum] = useState(0);

  const addRecipientHandler = (e) => {
    e.preventDefault();
    if (recNum < 10) {
      setRecNum(prev => prev + 1);
    }
  };
  
  const removeRecipientHandler = (e) => {
    e.preventDefault();
    if (recNum > 0) {
      setRecNum(prev => prev - 1);
    }
  };


  const Recipient = ({id}) => (
    <div className={styles.inpBox}>
      <div className={styles.top}>
        <p className={styles.text}>{t("gift-text-20")} - {id}</p>
        <RiDeleteBin6Line onClick={removeRecipientHandler} />
      </div>
      <Input 
        bg="#FFFFFF"
        name="RecipientName"
        inputType="text"
        placeHolder={t("gift-text-7")}
      />
      <Input 
        bg="#FFFFFF"
        name="RecipientEmail"
        inputType="email"
        placeHolder={t("gift-text-8")}
      />
    </div>
  )


  return (
    <section className={styles.gift}>
      <div className={styles.gift__container}>
        <div className={styles.wrapper}>
          <div className={styles.giftContent}>
            <div className={styles.pathLink}>
              <a href="/gift">{t("gift-text-1")}</a>
              <span>/</span>
              <span>{t("gift-text-2")}</span>
            </div>
            <h2 className={styles.mainTitle}>{t("gift-text-2")}</h2>
            <div className={styles.image}>
              <img src={process.env.PUBLIC_URL + "/images/Untitled-1-02.jpg"} alt="Gift-Card" />
            </div>
            <p className={styles.note}>{t("gift-text-3")}</p>
            <form className={styles.giftForm}>
              <div className={styles.inpBox}>
                <h3 className={styles.label}>{t("gift-text-4")}</h3>
                <SelectInput
                  name="giftAmount"
                  inputType="select"
                  placeHolder={t("gift-text-5")}
                  labelId="selectAmount"
                  label={t("gift-text-5")}
                  customLabel={true}
                  rightDir={true}
                />
              </div>
              <div className={styles.inpBox}>
                <h3 className={styles.label}>{t("gift-text-6")}</h3>
                <Input 
                  bg="#FFFFFF"
                  name="RecipientName"
                  inputType="text"
                  placeHolder={t("gift-text-7")}
                />
                <Input 
                  bg="#FFFFFF"
                  name="RecipientEmail"
                  inputType="email"
                  placeHolder={t("gift-text-8")}
                />
              </div>
              <div className={styles.btnBox}>
                <h3 className={styles.title}>{t("gift-text-18")}</h3>
                <button onClick={addRecipientHandler} disabled={recNum === 10} className={styles.add}>{t("gift-text-19")}</button>
              </div>
              {[
                ...Array(recNum),
              ].map((value, index) => (
                <Recipient id={index + 1} key={index} />
              ))

              }

              <div className={styles.inpBox}>
                <h3 className={styles.label}>{t("gift-text-9")}</h3>
                <Input 
                  bg="#FFFFFF"
                  name="Message"
                  inputType="text"
                  placeHolder={t("gift-text-10")}
                  isTextArea={true}
                />
              </div>
              <div className={styles.inpBox}>
                <h3 className={styles.label}>{t("gift-text-11")}</h3>
                <Input 
                  bg="#FFFFFF"
                  name="SenderName"
                  inputType="text"
                  placeHolder={t("gift-text-12")}
                />
                <Input 
                  bg="#FFFFFF"
                  name="SenderEmail"
                  inputType="email"
                  placeHolder={t("gift-text-13")}
                />
              </div>
              <div className={styles.submit}>
                <button>{t("gift-text-14")} {t("SR")}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.giftSupport}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.text}>{t("gift-text-15")}</p>
            <div className={styles.links}>
              <a className={styles.link} href="/termsConditions">{t("gifts-text-8")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gift;