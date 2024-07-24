import styles from "./styles.module.scss";
import Input from "../Auth/Input/Input";
import React from 'react'
import { useTranslation } from "react-i18next";
import useTrackOrder from "../../hooks/orders/useTrackOrder";
import Spinner from "../Utils/Spinner/Spinner";

const TrackOrder = () => {
  const { t, i18n } = useTranslation();

  const [
    serialNumber,
    onChangeSerialNumber,
    onBlurSerialNumber,
    serialNumberError,
    onSubmit,
    invoice_status,
    invoice_message,
    falseMessage,
    isLoadingTrackOrder,
    errorTrackOrder
  ] = useTrackOrder()


  return (
    <div className={styles.registerPage}>
      {isLoadingTrackOrder && <Spinner custom={true} />}
      {errorTrackOrder && <p>Error: {errorTrackOrder.message}</p>}
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>{t('track-text-1')}</h1>
        <form onSubmit={onSubmit} className={styles.registerForm}>
          <Input 
            name="serialNumber"
            value={serialNumber}
            onChange={onChangeSerialNumber}
            onBlur={onBlurSerialNumber}
            errorMsg={serialNumberError}
            inputType="text"
            placeHolder={t("track-text-2")}
            forLogin={true}
          />
          <div className={styles.bottomWrapper}>
            <button className={styles.registerBtn}> {t('track-text-3')} </button>
          </div>
        </form>

        <h2 className={styles.tractTitle}>{t("track-text-4")}</h2>
        {
          falseMessage ? (
            <div className={styles.results}>
              <p className={styles.errorText}>{falseMessage}</p>
            </div>
          ) : (
              <div className={styles.results}>
                <p className={styles.successText}>
                  <span>{t("track-text-5")}</span>
                  <span>{i18n.dir() === "ltr" ? invoice_status.nameEn : invoice_status.nameAr}</span>
                </p>
                <p className={styles.successText}>
                  <span>{t("track-text-6")}</span>
                  <span>{invoice_message}</span>
                </p>
              </div>
          )
        }
      </div>
  </div>
  )
}

export default TrackOrder

