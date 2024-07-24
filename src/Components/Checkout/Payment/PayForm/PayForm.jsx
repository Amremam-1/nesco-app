import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { FaChevronLeft } from "react-icons/fa6";
import Input from "../../../Auth/Input/Input";


const PayForm = () => {
  const { t } = useTranslation();

  const [isCreditCard, setIsCreditCard] = useState(true);
  const [isMadaCard, setIsMadaCard] = useState(false);

  const creditCardMethodHandler = () => {
    setIsCreditCard(true);
    setIsMadaCard(false);
  }
  const madaCardMethodHandler = () => {
    setIsMadaCard(true);
    setIsCreditCard(false);
  }

  return (
    <form className={styles.payForm}>
      <h2 className={styles.secTitle}>{t("checkout-paymentMethod-choosePayment")}</h2>
      <div className={styles.selectCard}>
        <div className={styles.card}>
          <input checked={isCreditCard} onChange={creditCardMethodHandler} id="credit" type="radio" />
          <label htmlFor="credit">{t("checkout-paymentMethod-credit")}</label>
        </div>
        <div className={styles.card}>
          <input checked={isMadaCard} onChange={madaCardMethodHandler} id="mada" type="radio" />
          <label htmlFor="mada">{t("checkout-paymentMethod-mada")}</label>
        </div>
      </div>
      <div className={styles.cardImgs}>
        {isCreditCard ? <img src={process.env.PUBLIC_URL + "/images/creditCard.png"} alt="credit" /> : null}
        {isMadaCard ? <img src={process.env.PUBLIC_URL + "/images/mada.png"} alt="mada" /> : null}
      </div>
      <h4 className={styles.cardInfoTitle}>{t("checkout-paymentMethod-cardInfo")}</h4>
      <div className={styles.cardInfo}>
        <Input 
          name="NameOnCard"
          inputType="text"
          placeHolder={t("checkout-paymentMethod-nameOnCard")}
        />
        <Input 
          name="CardNumber"
          inputType="text"
          placeHolder={t("checkout-paymentMethod-cardNumber")}
        />
        <div className={styles.yearMonth}>
          <Input 
            name="Month"
            inputType="text"
            placeHolder={t("checkout-paymentMethod-cardMonth")}
          />
          <Input 
            name="Year"
            inputType="text"
            placeHolder={t("checkout-paymentMethod-cardYear")}
          />
        </div>
        <div className={styles.cvv}>
          <Input 
            name="CardCVV"
            inputType="text"
            placeHolder={t("checkout-paymentMethod-cardCVV")}
          />
        </div>
      </div>
      <div className={styles.agreeCheck}>
        <input id="save" type="checkbox" />
        <label htmlFor="save">{t("checkout-paymentMethod-saveCard")}</label>
      </div>
      <div className={styles.agreeCheck}>
        <input id="terms" type="checkbox" />
        <label htmlFor="terms">
          <span>{t("checkout-paymentMethod-accept1")}</span>
          <a href="/termsConditions">{t("checkout-paymentMethod-accept2")}</a>
        </label>
      </div>
      
      {/* <a href="/checkout" type="submit" className={styles.proceedBtn}>Submit Order</a> */}
    </form>
  )
}

export default PayForm