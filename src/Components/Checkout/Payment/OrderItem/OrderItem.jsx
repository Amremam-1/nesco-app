import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const OrderItem = ({ image, title, size, weight, totalPrice, price, quantity }) => {
  const { t } = useTranslation();

  return (
    <li className={styles.ordItem}>
      <div className={styles.image}>
        <img src={process.env.PUBLIC_URL + image} alt="Hand" />
      </div>
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        {size ? <p className={styles.size}>{size}</p> : null}
        {weight ? <p className={styles.weight}>{weight}</p> : null}
        <div className={styles.box}>
          <p className={styles.quantity}>{quantity}</p>
          <p className={styles.price}>{price} {t("SR")}</p>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <h4 className={styles.totPriceTitle}>{t("checkout-paymentMethod-itemTotal")}</h4>
        <p>{totalPrice} {t("SR")}</p>
      </div>
    </li>
  )
}

export default OrderItem