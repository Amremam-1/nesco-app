import { useState } from "react";
import AddNewItem from "../AddNewItem/AddNewItem";
import styles from "./styles.module.scss";
import Input from "../../Auth/Input/Input";
import useAddPaymentMethod from "../../../hooks/account/useAddPaymentMethod";
import Popup from "../../Utils/Popup/Popup";
import { useTranslation } from "react-i18next";

const MyWallet = () => {
  const { t, i18n } = useTranslation();

  const [
    showAddFormHandler,
    showForm,
    cardHolderName,
    cardHolderNameError,
    onChangeCardHolderName,
    onBlurCardHolderName,
    cardNumber,
    cardNumberError,
    onChangeCardNumber,
    onBlurCardNumber,
    month,
    monthError,
    onChangeMonth,
    onBlurMonth,
    year,
    yearError,
    onChangeYear,
    onBlurYear,
    onSubmit,
    addPayment,
    addPaymentData
  ] = useAddPaymentMethod();



  return (
    <div className={styles.myWallet}>
      <>
        {addPayment && addPayment.status ? (
          <Popup type="success" msg={t("popup-account-paymentMetodAdded")} />
        ): (
          <Popup type="error" msg={t("popup-account-paymentMetodError")} />
        ) }
      </>
      <div className={styles.myWallet__container}>
        <h3 className={styles.title}>{t("account-myWallet")}</h3>
        <AddNewItem title={t("account-myWallet-addNewMethod")} showFormHandler={showAddFormHandler} />
        <form onSubmit={onSubmit} className={showForm ? styles.walletForm : styles.walletFormHidden}>
          <label className={styles.title}>{t("account-myWallet-newMethod")}</label>
          <div className={styles.inputsBox}>
            <Input 
              name="cardHolderName"
              value={cardHolderName}
              onChange={onChangeCardHolderName}
              onBlur={onBlurCardHolderName}
              errorMsg={cardHolderNameError}
              inputType="text"
              placeHolder={t("account-myWallet-cardHolderName")}
              forLogin={true}
            />
            <Input 
              name="cardNumber"
              value={cardNumber}
              onChange={onChangeCardNumber}
              onBlur={onBlurCardNumber}
              errorMsg={cardNumberError}
              inputType="text"
              placeHolder={("account-myWallet-cardNumber")}
              forLogin={true}
            />
            <Input 
              name="month"
              value={month}
              onChange={onChangeMonth}
              onBlur={onBlurMonth}
              errorMsg={monthError}
              inputType="text"
              placeHolder={t("account-month")}
              quarterWidthInput={true}
            />
            <Input 
              name="year"
              value={year}
              onChange={onChangeYear}
              onBlur={onBlurYear}
              errorMsg={yearError}
              inputType="text"
              placeHolder={t("account-year")}
              quarterWidthInput={true}
            />
          </div>          
          <button className={styles.sendBtn}>{t("account-send")}</button>
        </form>
      </div>
    </div>
  )
}

export default MyWallet