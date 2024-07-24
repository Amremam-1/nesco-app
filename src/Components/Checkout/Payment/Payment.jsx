import { useTranslation } from "react-i18next";
import { FaChevronLeft } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

import styles from "./styles.module.scss";
import Input from "../../Auth/Input/Input";
import { useState } from "react";
import OrderItem from "./OrderItem/OrderItem";
import PayForm from "./PayForm/PayForm";
import { FaExclamationCircle } from "react-icons/fa";
import useApplyCheckout from "../../../hooks/checkout/useApplyCheckout";


const Payment = ({ stepProgressHandler }) => {
  const { t } = useTranslation();

  const [payType, setPayType] = useState("");

  const changeMethod = (e) => {
    setPayType(e.target.value);
    console.log(e.target.value);
  }

  const handlePay = () => {
    if (payType === "CARD") {
      // Handle Card Payment
      stepProgressHandler();
    } else if (payType === "CASH") {
      // Handle Cash Payment - handleCreateOrderCash()
      stepProgressHandler();
    } else {
      // Notify user to check payment method
      stepProgressHandler();
    }
  }

  const [
    applyCheckoutHandler,
    applyCheckoutRes,
    applyCheckoutResData,
    applyCheckoutResDetails,
    showApplyCheckoutPopup,
    applyCheckSuccess
  ] = useApplyCheckout();

  // 1-Order Summary
  // 2-Show selected address from prev step and its note
  // 3-User can edit the delivery selected address
  // 4-Show Estimated Delivery Days/Time

  return (
    <section className={styles.checkoutPayment}>
      <div className={styles.checkoutPayment__container}>
        <div className={styles.choosePaymentMethod}>
          <div className={styles.payMethod}>
            <div className={styles.paymentProvider}>
              <h2 className={styles.secTitle}>{t("checkout-paymentMethod-choosePayment")}</h2>
              <div className={styles.selectCard}>
                <div className={styles.card}>
                  <input
                    onChange={changeMethod}
                    value="CARD"
                    id="credit"
                    type="radio" 
                    name="group"
                    checked
                  />
                  <label htmlFor="credit">{t("checkout-paymentMethod-credit")}</label>
                </div>
                <div className={styles.cash}>
                  <input
                    onChange={changeMethod}
                    value="CASH"
                    id="cash"
                    type="radio" 
                    name="group"
                    disabled
                  />
                  <label htmlFor="cash">{t("checkout-paymentMethod-cash")}</label>
                </div>
              </div>
              <div className={styles.cardImgs}>
                <img src={process.env.PUBLIC_URL + "/images/visa.png"} alt="credit" />
              </div>
              <div className={styles.payGateway}>
                <FaExclamationCircle />
                <h3 className={styles.pTitle}>{t("checkout-paymentMethod-gateway")}</h3>
              </div>
            </div>
            {/* <PayForm /> */}
            <button onClick={handlePay} className={styles.proceedBtn}>{t("checkout-paymentMethod-submitOrder")}</button>
          </div>
          <div className={styles.orderSummary}>
            <h4 className={styles.titleSm}>{t("checkout-paymentMethod-summ-ttl")}</h4>
            <div className={styles.orderSummary__wrapper}>
              <ul className={styles.orderSummList}>
                {
                  applyCheckoutResDetails ? (
                    applyCheckoutResDetails.map((item, index) => (
                      <OrderItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.total}
                      />
                    ))
                  ) : null
                }
              </ul>
              <div className={styles.deliveryInfo}>
                <div className={styles.delivAdd}>
                  <div className={styles.address}>
                    <div className={styles.editAddress}>
                      <p>{t("checkout-paymentMethod-summ-delivAdd")}</p>
                      <BiEdit />
                    </div>
                    <div className={styles.selectedAddress}>
                      <p>Jeddah - KSA</p>
                    </div>
                  </div>
                  <div className={styles.notes}>
                    <p className={styles.noteTtl}>{t("checkout-paymentMethod-summ-note")}</p>
                    <p className={styles.noteInfo}>يرجى الاتصال قبل الوصول بنصف ساعة</p>
                  </div>
                </div>
                <div className={styles.delivTime}>
                  <p className={styles.text}>{t("checkout-paymentMethod-summ-estTime1")}</p>
                  <p className={styles.textBold}>{t("checkout-paymentMethod-summ-estTime2")}</p>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment;