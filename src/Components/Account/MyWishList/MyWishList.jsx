import { useTranslation } from "react-i18next";
import useGetFavorite from "../../../hooks/favorite/useGetFavorite";
import WishListCard from "../WishListCard/WishListCard";
import styles from "./styles.module.scss";

const MyWishList = () => {
  const { t, i18n } = useTranslation();

  const [favoritesProductsData] = useGetFavorite();

  return (
    <div className={styles.myWishList}>
      <div className={styles.myWishList__container}>
        <h3 className={styles.title}>{t("account-myWishList")}</h3>
        <div className={styles.wishListWrapper}>
          {
            favoritesProductsData ? (
              favoritesProductsData.map((favProduct, index) => (
                <WishListCard favProduct={favProduct} key={index} />
              ))
            ) : <div className={styles.emptyFav}><h6 className={styles.title}>{t("account-myWishList-empty")}</h6></div>
          }
        </div>
      </div>
    </div>
  )
}

export default MyWishList