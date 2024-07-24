import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const SortBy = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.sortBy}>
      <label htmlFor="sortBy" className={styles.sortLabel}>{t("store-product-productComments-sortBy")}:</label>
      <select id="sortBy" className={styles.sortSelect}>
        <option  value="new">{t("store-product-productComments-sortBy-new")}</option>
        <option  value="old">{t("store-product-productComments-sortBy-old")}</option>
        <option  value="highestRate">{t("store-product-productComments-sortBy-highestRate")}</option>
        <option  value="lowestRate">{t("store-product-productComments-sortBy-lowestRate")}</option>
      </select>
    </div>
  )
}

export default SortBy