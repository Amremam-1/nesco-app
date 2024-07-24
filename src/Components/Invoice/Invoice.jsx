import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useLocation, useSearchParams } from "react-router-dom";
import useGetInvoice from "../../hooks/payment/useGetInvoice";
import Spinner from "../Utils/Spinner/Spinner";

const Invoice = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [queryParameters] = useSearchParams();

  const params = new URLSearchParams(window.location.search);

  const language = params.get("language");
  const operation = params.get("operation");
  const invoice_id = params.get("invoice_id");

  // console.log("__________(::)__________ language", language);
  // console.log("__________(::)__________ operation", operation);
  // console.log("__________(::)__________ invoice_id", invoice_id);

  const [invoiceObject, isLoadingInvoice, errorInvoice] = useGetInvoice(`language=${language}&operation=${operation}&invoice_id=${invoice_id}`);

  if (operation === "fail") {
    return (
      <section className={styles.invoice}>
        {isLoadingInvoice && <Spinner custom={true} />}
        {errorInvoice && <p>Error: {errorInvoice.message}</p>}
        <div className={styles.invoice__container}>
          <div className="pageTitle">
            <h2>{t("invoice")}</h2>
          </div>
          <div className={styles.orderSummary}>
            <div className={styles.goHome}>
              <a  className={styles.goOrdrsBtn} href="/cart">Cart Page</a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.invoice}>
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
                <p className={styles.boxInfo}># {invoiceObject?.id}</p>
              </div> */}
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-invNum")}</p>
                <p className={styles.boxInfo}>{invoiceObject?.serial_number}</p>
              </div>
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-date")}</p>
                <p className={styles.boxInfo}>{invoiceObject?.created_at}</p>
              </div>
              <div className={styles.numbers}>
                <p className={styles.boxTitle}>{t("invoice-status")}</p>
                <p className={styles.boxInfo}>{invoiceObject?.status}</p>
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
                  <p className={styles.text}>{invoiceObject?.user_name}</p>
                  <p className={styles.text}>{t("building")}: {invoiceObject?.address?.building}</p>
                  <p className={styles.text}>{t("floor")}: {invoiceObject?.address?.floor}</p>
                  <p className={styles.text}>{t("flat")}: {invoiceObject?.address?.flat}</p>
                  <p className={styles.text}>{t("street")}: {invoiceObject?.address?.street}</p>
                </div>
                <div className={styles.info}>
                  <p className={styles.text}>{t("state")}: {invoiceObject?.address?.state}</p>
                  <p className={styles.text}>{t("postalCode")}: {invoiceObject?.address?.postal}</p>
                  <p className={styles.text}>{t("phone")}: {invoiceObject?.address?.phone}</p>
                  <p className={styles.text}>{t("note")}: {invoiceObject?.address?.note}</p>
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
                invoiceObject?.invoice_details?.map((item, index) => (
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
                invoiceObject.sub_total ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("checkout-paymentMethod-summ-sub")}</p>
                    <p className={styles.textBold}>{invoiceObject?.sub_total} {t("SR")}</p>
                  </li>
                ) : null
              }
              {
                invoiceObject.shipping_value === null || invoiceObject.shipping_value === 0 ? null : (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("checkout-paymentMethod-summ-fees")}</p>
                    <h4 className={styles.textBold}>{invoiceObject?.shipping_value} {t("shoppingCart-SR")}</h4>
                  </li>
                )
              }
              {
                invoiceObject.tax_value ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("shoppingCart-total-VAT")} {invoiceObject?.tax}%</p>
                    <h4 className={styles.textBold}>{invoiceObject?.tax_value} {t("shoppingCart-SR")}</h4>
                  </li>
                ) : null
              }
              {
                invoiceObject.discount ? (
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("store-product-discountValue")}</p>
                    <h4 className={styles.textBold}>{invoiceObject?.discount} {t("shoppingCart-SR")}</h4>
                  </li>
                ) : null
              }
              <li className={styles.total}>
                <p className={styles.text}>{t("checkout-paymentMethod-summ-total")}</p>
                <p className={styles.textBold}>{invoiceObject?.total} {t("SR")}</p>
              </li>
            </ul>
          </div>
          <div className={styles.goHome}>
            <a  className={styles.goOrdrsBtn} href="/">{t("checkout-paymentMethod-summ-goHome")}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invoice