import React from 'react';

import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import useGetUserOrders from "../../../hooks/orders/useGetUserOrders";
import OrderDetails from "./OrderDetails/OrderDetails";
import { useState } from "react";
import Spinner from '../../Utils/Spinner/Spinner.jsx';
import { useDispatch } from 'react-redux';
import { getUserOrderDetails } from '../../../redux/thunkActions/userOrdersActions.js';

const LazyOrderDetails = React.lazy(() => import("./OrderDetails/OrderDetails.jsx"));

const MyOrders = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [clickedId, setClickedId] = useState(null);
  const [invoices, invoiceMessage, isLoadingOrders, errorOrders] = useGetUserOrders();

  useState(() => {

  }, [clickedId])

  return (
    <div className={styles.myOrders}>
      {isLoadingOrders && <Spinner custom={true} />}
      {errorOrders && <p>Error: {errorOrders.message}</p>}
      <div className={styles.myOrders__container}>
        <h3 className={styles.title}>{t("account-myOrders-myOrders")}</h3>
        <ul className={styles.ordersList}>
          <li className={styles.orderItem}>
            <p className={styles.link}>{t("account-myOrders-link")}</p>
            <p className={styles.serial}>{t("account-myOrders-serialNumber")}</p>
            <p className={styles.total}>{t("account-myOrders-total")}</p>
            <p className={styles.status}>{t("account-myOrders-status")}</p>
          </li>
          {
            invoices.length > 0 ? (
              invoices?.map((item, index) => (
                <li key={index} className={styles.orderItem}>
                  <button onClick={() => {
                    setClickedId(item.id);
                    dispatch(getUserOrderDetails(item.id));
                  }} className={styles.link}>
                    <a href={`#${item.id}`} className={styles.link}>{item.id}</a>
                  </button>
                  <p className={styles.serial}>{item.serial_number}</p>
                  <p className={styles.total}>{item.total}</p>
                  <p className={styles.status}>{item.status}</p>
                </li>
            ))
            ) : (
                <div className={styles.orderDate}>
                  <div className={styles.notFound}>
                    <p>{t("account-myOrders-noResults")}</p>
                  </div>
                </div>
                
            )
          }
        </ul>

        <div id={clickedId} className={styles.orderDetails}>
          {
            clickedId !== null ? (
              <OrderDetails orderId={clickedId} />
            )  : null
          }
        </div>
        {/* <React.Suspense fallback={<Spinner />}><LazyOrderDetails orderId={clickedId} /></React.Suspense> */}
      </div>
    </div>
  )
}

export default MyOrders;