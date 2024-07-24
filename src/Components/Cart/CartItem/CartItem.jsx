import styles from "./styles.module.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import useRemoveFromCart from "../../../hooks/cart/useRemoveFromCart";
import useUpdateCartItem from "../../../hooks/cart/useUpdateCartItem";
import { useEffect } from "react";


const CartItem = ({ itemData, updateCart }) => {
  // console.log("____(*&)____ itemData in Cart: ", itemData);
  const { t } = useTranslation();
  const [removeFromCartHandler, removeFromCartRes, removeFromCartSuccess, showAddToCartPopup] = useRemoveFromCart();

  const [
    quantity,
    availableProdQty,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartSuccess
  ] = useUpdateCartItem(itemData.product_id, itemData.quantity);


  useEffect(() => {
    // window.location.reload(false);
  }, [])

  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItem__wrapper}>
        <div className={styles.left}>
          <div className={styles.selectItem}>
            <input type="checkbox" defaultChecked />
          </div>
          <div className={styles.itemImage}>
            <img src={process.env.PUBLIC_URL + itemData.image} alt="CartItemImg" />
          </div>
          <div className={styles.itemDesc}>
            <a href={`/store/product/${itemData.product_id}`}>
              <h4 className={styles.iTitle}>{itemData.title}</h4>
            </a>
            {/* <p className={styles.iSize}>{t("shoppingCart-item-PKT")}</p> */}
            {/* <p className={styles.iWeight}>250G</p> */}
          </div>
          <div className={styles.itemPrice}>
            <h3>{itemData.price} {t("shoppingCart-SR")}</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.itemQtyBox}>
            <span className={styles.text}>{t("shoppingCart-item-QTY")}</span>
            <div className={styles.setQty}>
              <button onClick={increaseQuantityHandler} disabled={quantity === availableProdQty}>
                <BiPlus />
              </button>
              <div className={styles.iNum}>{quantity}</div>
                {/* <input type="number" value={3} /> */}
              <button onClick={decreaseQuantityHandler} disabled={quantity === 1}>
                <BiMinus />
              </button>
              </div>
          </div>
          <div className={styles.totalItemPrice}>
            <h3>{itemData.quantity * itemData.price} {t("shoppingCart-SR")}</h3>
            {/* <h3>{(quantity * 19.00).toFixed(2)} {t("shoppingCart-SR")}</h3> */}
          </div>
          <button onClick={() => removeFromCartHandler(itemData.product_id)} className={styles.deleteItem}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem