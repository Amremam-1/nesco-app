import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useLocation, useSearchParams } from "react-router-dom";
import useGetInvoice from "../../../../hooks/payment/useGetInvoice";
import useGetUserOrderDetails from "../../../../hooks/orders/useGetUserOrderDetails";
import Spinner from "../../../Utils/Spinner/Spinner";

const OrderDetails = ({orderId}) => {
  const { t } = useTranslation();

  const [invoiceDetails, invoiceDetailsMessage, isLoadingGetOrder, errorGetOrder] = useGetUserOrderDetails(orderId)

  return (
    <section className={styles.invoice}>
      {isLoadingGetOrder && <Spinner custom={true} />}
      {errorGetOrder && <p>Error: {errorGetOrder.message}</p>}
      <div className={styles.invoice__container}>
        <div className="pageTitle">
          <h2>{t("invoice")}</h2>
        </div>
        <div className={styles.orderSummary}>
          <div className={styles.topHead}>
            <div className={styles.companyDetails}>
              <h2 className={styles.compTitle}>{t("nestretto")}</h2>
              <div id="contact-us" className={styles.textBox}>
                <p className={styles.textAddress}>{t("terms-contactus-text-4")}</p>
                <p className={styles.textAddress}>{t("terms-contactus-text-5")}</p>
                <p className={styles.textAddress}>{t("terms-contactus-text-6")}</p>
                <p className={styles.textAddress}>{t("terms-contactus-text-7")}</p>
                <p className={styles.textAddress}>{t("terms-contactus-text-8")}</p>
              </div>
            </div>
            <div className={styles.invoiceDetails}>
              {/* <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-inv")}</p>
                <p className={styles.boxInfo}># {invoiceDetails?.id}</p>
              </div> */}
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-invNum")}</p>
                <p className={styles.boxInfo}>{invoiceDetails?.serial_number}</p>
              </div>
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-date")}</p>
                <p className={styles.boxInfo}>{invoiceDetails?.created_at}</p>
              </div>
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-status")}</p>
                <p className={styles.boxInfo}>{invoiceDetails?.status}</p>
              </div>
              {/* <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-due")}</p>
                <p className={styles.boxInfo}>2023-12-14</p>
              </div> */}
            </div>
          </div>
          <h3 className={styles.titleSm}>{t("invoice-summary")}</h3>
          <div className={styles.wrapperInvoice}>
            <div className={styles.invoiceTo}>
              <h4 className={styles.invTitle}>{t("invoice-invoiceTo")}</h4>
              <div className={styles.userInfo}>
                <div className={styles.info}>
                  <p className={styles.text}>{invoiceDetails?.user_name}</p>
                  <p className={styles.text}>{t("building")}: {invoiceDetails?.address?.building}</p>
                  <p className={styles.text}>{t("floor")}: {invoiceDetails?.address?.floor}</p>
                  <p className={styles.text}>{t("flat")}: {invoiceDetails?.address?.flat}</p>
                  <p className={styles.text}>{t("street")}: {invoiceDetails?.address?.street}</p>
                </div>
                <div className={styles.info}>
                  <p className={styles.text}>{t("state")}: {invoiceDetails?.address?.state}</p>
                  <p className={styles.text}>{t("postalCode")}: {invoiceDetails?.address?.postal}</p>
                  <p className={styles.text}>{t("phone")}: {invoiceDetails?.address?.phone}</p>
                  <p className={styles.text}>{t("note")}: {invoiceDetails?.address?.note}</p>
                </div>

              </div>
            </div>
          </div>
          <h3 className={styles.titleSm}>{t("checkout-paymentMethod-summ-ttl")}</h3>
          <div className={styles.wrapper}>
            <ul className={styles.invoiceDetails}>
              <li className={styles.invItem}>
                <span className={styles.name}>{t("prodName")}</span>
                <span className={styles.quantity}>{t("quantity")}</span>
                <span className={styles.price}>{t("price")}</span>
                <span className={styles.total}>{t("total")}</span>
              </li>
              {
                invoiceDetails?.invoice_details?.map((item, index) => (
                  <li key={index} className={styles.invItem}>
                    <a className={styles.name} href={`/store/${item?.product_id}`}>{item?.product}</a>
                    <span className={styles.quantity}>{item?.quantity}</span>
                    <span className={styles.price}>{item?.price}</span>
                    <span className={styles.total}>{item?.total}</span>
                  </li>
                ))
              }
            </ul>
            <ul className={styles.priceSummary}>
              {
                invoiceDetails.sub_total ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("checkout-paymentMethod-summ-sub")}</p>
                    <p className={styles.textBold}>{invoiceDetails?.sub_total} {t("SR")}</p>
                  </li>
                ) : null
              }
              {
                invoiceDetails.shipping_value === null || invoiceDetails.shipping_value === 0 ? null : (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("checkout-paymentMethod-summ-fees")}</p>
                    <h4 className={styles.textBold}>{invoiceDetails?.shipping_value} {t("shoppingCart-SR")}</h4>
                  </li>
                )
              }
              {
                invoiceDetails.tax_value ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("shoppingCart-total-VAT")} {invoiceDetails?.tax}%</p>
                    <h4 className={styles.textBold}>{invoiceDetails?.tax_value} {t("shoppingCart-SR")}</h4>
                  </li>
                ) : null
              }
              {
                invoiceDetails.discount ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("store-product-discountValue")}</p>
                    <h4 className={styles.textBold}>{invoiceDetails?.discount} {t("shoppingCart-SR")}</h4>
                  </li>
                ) : null
              }
              <li className={styles.total}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-total")}</p>
                <p className={styles.textBold}>{invoiceDetails?.total} {t("SR")}</p>
              </li>
            </ul>
          </div>
          {/* <div className={styles.goHome}>
            <a  className={styles.goOrdrsBtn} href="/">{t("checkout-paymentMethod-summ-goHome")}</a>
          </div> */}
        </div>
      </div>
    </section>
  )
}


export default OrderDetails