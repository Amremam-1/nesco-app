import { useTranslation } from "react-i18next";
import CartItem from "./CartItem/CartItem";
import { FiShoppingCart } from "react-icons/fi"

import styles from "./styles.module.scss";
import useGetCartItems from "../../hooks/cart/useGetCartItems";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCheckCoupon from "../../hooks/coupon/useCheckCoupon";
import { getCartItems } from "../../redux/thunkActions/cartActions";
import Spinner from "../Utils/Spinner/Spinner";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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

  console.log("_____(&&)____ productsInCart:", productsInCartArray);
  console.log("_____(&&)____ cartItemsData:", cartItemsData);
  console.log("_____(&&)____ cartLength:", cartLength);
  console.log("_____(&&)____ isCartEmpty:", isCartEmpty);

  const submitCartHandler = async (e) => {
    e.preventDefault();
    // navigate('/checkout')
    // if (cartItemsData) {
    //   setLoading(true);
    //   await dispatch(getCartItems());
    //   setLoading(false);
    //   if (!loading) {
    //     navigate('/checkout')
    //   }
    // }
  };

  // Reload page after adding Promotion code and success
  const [couponID, setCouponID] = useState("");
  const [checkCouponHandler, checkCouponRes, couponValidationMsg] = useCheckCoupon(couponID);
  const couponHandler = (e) => {
    setCouponID(e.target.value);
  }

  return (
    <section className={styles.cart}>
      {isLoadingCart && <Spinner custom={true} />}
      {errorCart && <p>Error: {errorCart.message}</p>}
      <div className={styles.cart__container}>
        <h3 className={styles.secTitle}>{t("shoppingCart-title")}</h3>
        {!isCartEmpty ? (
          <form className={styles.cartForm} onSubmit={submitCartHandler}>
            <ul className={styles.cartItemsList}>
              {
                productsInCartArray.length > 0 ? (
                  productsInCartArray.map((item, index) => (
                    <CartItem
                      key={index}
                      itemData={item}
                    />
                  ))
                ) : (
                  <div className={styles.emptyCart}>
                    <h3 className={styles.emTitle}>{t("shoppingCart-empty")}</h3>
                    <FiShoppingCart className={i18n.dir() === "ltr" ? styles.emIcon : styles.emIconAr} />
                    <a className={styles.emShopNow} href="/store">{t("shoppingCart-shopNow")}</a>
                  </div>
                )
              }
            </ul>
            {productsInCartArray.length > 0 ? (
              <>
                {
                  cartItemsData.discount ? null : (
                    <div className={styles.promotion}>
                      <label htmlFor="promoInp">{t("shoppingCart-promo-label")}</label>
                      <div className={styles.promotionBox}>
                        <input
                          className={styles.promoInput}
                          id="promoInp"
                          type="text"
                          placeholder={t("shoppingCart-promo-placeholder")} 
                          name="couponId"
                          onChange={couponHandler}
                        />
                        <button onClick={checkCouponHandler} className={styles.promoBtn}>{t("shoppingCart-promo-addBtn")}</button>
                      </div>
                      <div className={styles.couponMsgBox}>
                        <p className={styles.couponMsg}>{couponValidationMsg}</p>
                      </div>
                    </div>
                  )
                }
                <ul className={styles.totalDetails}>
                  <li className={styles.subTotal}>
                    <p className={styles.text}>{t("shoppingCart-total-subTotal")}</p>
                    <h4 className={styles.value}>{cartItemsData.sub_total} {t("shoppingCart-SR")}</h4>
                  </li>
                  {
                    cartItemsData.shipping_value === null || cartItemsData.shipping_value === 0 ? null : (
                      <li className={styles.shippingFees}>
                        <p className={styles.text}>{t("checkout-paymentMethod-summ-fees")}</p>
                        <h4 className={styles.value}>{cartItemsData.shipping_value} {t("shoppingCart-SR")}</h4>
                      </li>
                    )
                  }
                  <li className={styles.vat}>
                    <p className={styles.text}>{t("shoppingCart-total-VAT")} {cartItemsData.tax}</p>
                    <h4 className={styles.value}>{cartItemsData.tax_value} {t("shoppingCart-SR")}</h4>
                  </li>
                  {
                    cartItemsData.discount ? (
                        <li className={styles.vat}>
                          <p className={styles.text}>{t("store-product-discountValue")}</p>
                          <h4 className={styles.value}>{cartItemsData.discount} {t("shoppingCart-SR")}</h4>
                        </li>
                    ) : null
                  }
                  <li className={styles.total}>
                    <div className={styles.topText}>
                      <p className={styles.totalText}>{t("shoppingCart-total-total")}</p>
                      <h4 className={styles.totalVal}>{cartItemsData.total} {t("shoppingCart-SR")}</h4>
                    </div>
                    {/* <p className={styles.note}>{t("shoppingCart-total-totalNote")}</p> */}
                  </li>
                </ul>
              </>
            ): null
            }
            {productsInCartArray.length > 0 ? (
                <div className={styles.submition}>
                  <div className={styles.btns}>
                    <a href="/checkout" type="submit" className={styles.proceedBtn}>{t("shoppingCart-btns-proceed")}</a>
                  </div>
                </div>
            ) : null
            }
            {productsInCartArray.length > 0 ? (
                <div className={styles.submition}>
                </div>
            ) : null
            }
          </form>
        ) : isLoadingCart && (
          <div className={styles.emptyCart}>
            <h3 className={styles.emTitle}>{t("shoppingCart-empty")}</h3>
            <FiShoppingCart className={i18n.dir() === "ltr" ? styles.emIcon : styles.emIconAr} />
            <a className={styles.emShopNow} href="/store">{t("shoppingCart-shopNow")}</a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart