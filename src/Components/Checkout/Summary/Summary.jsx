import { useTranslation } from "react-i18next";
import { FaChevronLeft } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

import styles from "./styles.module.scss";
import OrderItem from "../Payment/OrderItem/OrderItem";
import useApplyCheckout from "../../../hooks/checkout/useApplyCheckout";


const Summary = ({ stepProgressHandler }) => {
  const { t } = useTranslation();

  // if order is succeeded 
  stepProgressHandler(true);

  const [
    applyCheckoutHandler,
    applyCheckoutRes,
    applyCheckoutResData,
    applyCheckoutResDetails,
    showApplyCheckoutPopup,
    applyCheckSuccess
  ] = useApplyCheckout();

  return (
    <section className={styles.summary}>
      <div className={styles.summary__container}>
        <div className={styles.orderSummary}>
          <h4 className={styles.titleSm}>{t("checkout-paymentMethod-summ-ttl")}</h4>
          <div className={styles.orderSummary__wrapper}>
            <div className={styles.priceSummary}>
              <div className={styles.payTitle}>
                <p>{t("checkout-paymentMethod-summ-payment")}</p>
              </div>
              <div className={styles.subTotal}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-sub")}</p>
                <p className={styles.textBold}>{applyCheckoutResData.sub_total} {t("SR")}</p>
              </div>
              <div className={styles.subTotal}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-fees")}</p>
                <p className={styles.textBold}>{applyCheckoutResData.delivery_value} {t("SR")}</p>
              </div>
              <div className={styles.subTotal}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-vat")}</p>
                <p className={styles.textBold}>{applyCheckoutResData.tax} {t("SR")}</p>
              </div>
              <div className={styles.total}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-total")}</p>
                <p className={styles.textBold}>{applyCheckoutResData.total} {t("SR")}</p>
              </div>
            </div>
          </div>
            <div className={styles.goOrdrs}>
              <a  className={styles.goOrdrsBtn} href="/store/account/orders">{t("checkout-paymentMethod-summ-myOrders")}</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Summary