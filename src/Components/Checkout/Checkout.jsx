import { useTranslation } from "react-i18next";
import { BiEdit } from "react-icons/bi";
import Stepper from "./Stepper/Stepper";
import { useState } from "react";
import OrderItem from "./Payment/OrderItem/OrderItem";
import styles from "./styles.module.scss";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import useGetCartItems from "../../hooks/cart/useGetCartItems";
import { FiShoppingCart } from "react-icons/fi"
import usePlaceOrder from "../../hooks/payment/usePlaceOrder";
import Spinner from "../Utils/Spinner/Spinner";


const Checkout = () => {
  const { t, i18n } = useTranslation();

  const steps = [t("checkout-stepper-steps1"), t("checkout-stepper-steps2"), t("checkout-stepper-steps3")];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const stepProgressHandler = (isSuccess) => {
    if (currentStep === steps.length || isSuccess) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };


  // Check If Addres is exist fill form with it & if not exist show add address butoon and form
  // Check if address is filled and city api is called and success then show Place order btn
  // Reload page after adding address

  const [
    productsInCartArray,
    cartItemsData,
    cartLength,
    isCartEmpty,
    cartEmptyMsg,
    shippingAddress,
    city,
    isLoadingCart,
    errorCart
  ] = useGetCartItems();

  console.log("____==____++___cartItemsData: ", cartItemsData);

  const [placeOrderHandler, isLoadingPlaceOrder, errorPlaceOrder] = usePlaceOrder();

  if (productsInCartArray.length === 0) {
    return (
      <div className={styles.emptyCartWrapper}>
        {isLoadingCart && <Spinner custom={true} />}
        {errorCart && <p>Error: {errorCart.message}</p>}
        {isLoadingPlaceOrder && <Spinner custom={true} />}
        {errorPlaceOrder && <p>Error: {errorCart.message}</p>}
        <div className={styles.emptyCart}>
          <h3 className={styles.emTitle}>{t("shoppingCart-empty")}</h3>
          <FiShoppingCart className={i18n.dir() === "ltr" ? styles.emIcon : styles.emIconAr} />
          <a className={styles.emShopNow} href="/store">{t("shoppingCart-shopNow")}</a>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.checkout}>
      {isLoadingCart && <Spinner custom={true} />}
      {errorCart && <p>Error: {errorCart.message}</p>}
      <div className={styles.checkout__container}>
        <Stepper 
          steps={steps}
          currentStep={currentStep}
          complete={complete}
          stepProgressHandler={stepProgressHandler}
        />
        <div className={styles.orderWrapper}>
          <div id="editForm" className={styles.orderAddress}>
            <ShippingAddress shippingAddress={shippingAddress} shippingCity={city} />
            {
              cartItemsData.shipping_value !== null ? (
                <button onClick={() => { 
                  placeOrderHandler();
                  setCurrentStep((prev) => prev + 1);
                }} className={styles.payBtn}>{t("checkout-paymentMethod-submitOrder")}</button>
              ) : <button disabled className={styles.payBtn}>{t("checkout-paymentMethod-submitOrder")}</button>
            }
          </div>
          <div className={styles.orderSummary}>
            <h4 className={styles.titleSm}>{t("checkout-paymentMethod-summ-ttl")}</h4>
            <div className={styles.orderSummary__wrapper}>
              <ul className={styles.orderSummList}>
                {
                  productsInCartArray?.map((item, index) => (
                    <OrderItem
                      key={index}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                      totalPrice={item.total}
                    />
                  ))
                }
              </ul>
              <div className={styles.deliveryInfo}>
                <div className={styles.delivAdd}>
                  <div className={styles.address}>
                    <a href="#editForm" className={styles.editAddress}>
                      <p>{t("checkout-paymentMethod-summ-delivAdd")}</p>
                      <BiEdit />
                    </a>
                    <div className={styles.selectedAddress}>
                      <p>{cartItemsData?.city?.city_name} - {cartItemsData?.address?.state}</p>
                    </div>
                  </div>
                  {cartItemsData?.address?.note && (
                    <div className={styles.notes}>
                      <p className={styles.noteTtl}>{t("checkout-paymentMethod-summ-note")}</p>
                      <p className={styles.noteInfo}>{cartItemsData?.address?.note}</p>
                    </div>
                  )}
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
                  <p className={styles.textBold}>{cartItemsData.sub_total} {t("SR")}</p>
                </div>
                {
                  cartItemsData.shipping_value === null || cartItemsData.shipping_value === 0 ? null : (
                    <li className={styles.subTotal}>
                      <p className={styles.text}>{t("checkout-paymentMethod-summ-fees")}</p>
                      <h4 className={styles.textBold}>{cartItemsData.shipping_value} {t("shoppingCart-SR")}</h4>
                    </li>
                  )
                }
                <li className={styles.subTotal}>
                  <p className={styles.text}>{t("shoppingCart-total-VAT")} {cartItemsData.tax}</p>
                  <h4 className={styles.textBold}>{cartItemsData.tax_value} {t("shoppingCart-SR")}</h4>
                </li>
                {
                  cartItemsData.discount ? (
                    <li className={styles.subTotal}>
                      <p className={styles.text}>{t("store-product-discountValue")}</p>
                      <h4 className={styles.textBold}>{cartItemsData.discount} {t("shoppingCart-SR")}</h4>
                    </li>
                  ) : null
                }
                <div className={styles.total}>
                  <p className={styles.text}>{t("checkout-paymentMethod-summ-total")}</p>
                  <p className={styles.textBold}>{cartItemsData.total} {t("SR")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;