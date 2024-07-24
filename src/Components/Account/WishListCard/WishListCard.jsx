import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import useRemoveFromFavorite from "../../../hooks/favorite/useRemoveFromFavorite";
import Popup from "../../Utils/Popup/Popup";
import { useTranslation } from "react-i18next";
import useAdddToCart from "../../../hooks/cart/useAdddToCart";

const WishListCard = ({favProduct}) => {
  const { t, i18n } = useTranslation();

  const [removeFavoriteHandler, removeFavorite, removeFavoriteData] = useRemoveFromFavorite("prodId");
  const [
    availableProdQty,
    quantity,
    showAddToCartPopup,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartHandler,
    addToCartSuccess
  ] = useAdddToCart(favProduct.product_id);

  return (
    <div className={styles.wishListCard}>
      {/* <>
        {removeFavorite && removeFavorite?.status ? (
          <Popup type="success" msg={t("popup-account-removeFromWishlistSuccess")} />
        ): (
          <Popup type="error" msg={t("popup-account-removeFromWishlistError")} />
        ) }
      </> */}
      <div className={styles.wishListCard__container}>
        <div onClick={removeFavoriteHandler} className={styles.removeBtn}>
          <IoMdCloseCircle />
        </div>
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + favProduct.image} alt="" />
        </div>
        <div className={styles.desc}>
          <h4 className={styles.prodTitle}>
            <a href={`store/product/${favProduct.product_id}`}>{favProduct.title}</a>
          </h4>
          {/* <p className={styles.prodSize}>باكت</p> */}
        </div>
        <div className={styles.price}>
          <p className={styles.text}>{t("account-myWishListCard-price")}</p>
          {
            favProduct.discount > 0 ? (
                <h3 className={styles.prodPriceBefore}>
                  <span>{favProduct.price_before_discount}</span>
                  <span> {t("store-product-SR")}</span>
                </h3>
            ) : null
          }
          <h3 className={styles.prodPrice}>
            <span>{favProduct.price}</span>
            <span> {t("store-product-SR")}</span>
          </h3>
        </div>
        <div className={styles.addToCartBtn}>
          <button onClick={addToCartHandler}>{t("store-product-addToCart")}</button>
        </div>
      </div>
    </div>
  )
}

export default WishListCard