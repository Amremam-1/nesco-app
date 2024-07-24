import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { BsCartCheckFill } from "react-icons/bs";
import { TbHeartCheck } from "react-icons/tb";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import useProductCard from "../../../hooks/products/useProductCard";
import useQuickAddToCart from "../../../hooks/cart/useQuickAddToCart";
import { ToastContainer } from "react-toastify";

const ProductCard = ({ productData }) => {
  const { t, i18n } = useTranslation();

  const {
    id,
    title,
    category,
    price_before_discount,
    discount,
    price,
    stock,
    description,
    image,
    favorite,
    having_review,
    reviews
  } = productData;

  const [quickAddToCartHandler, quicKAddToCartSuccess] =  useQuickAddToCart(id)

  // const [
  //   showBtns,
  //   isAddToCartClicked,
  //   isAddToFavClicked,
  //   addProdToCartHandler,
  //   addProdToFavHandler
  // ] = useProductCard(prodId);
  
  return (
    <div className={styles.prodCard}>
      <div className={styles.prodCard__container}>
        <a className={styles.cartLink} href={`/store/product/${id}`}>
          <div className={styles.innerCard}>
            <div className={styles.image}>
              <img src={process.env.PUBLIC_URL + image ? image : "/images/no-image.png"} alt="product_img" />
            </div>
            <div className={styles.prodDetails}>
              <h2 className={styles.title}>{title}</h2>
              {/* {size && <p className={styles.size}>{size}</p>} */}
              <h3 className={styles.price}>{price} {t("SR")}</h3>
              {discount !== 0 ? <h3 className={styles.priceBefore}>{price_before_discount} {t("SR")}</h3> : null}
            </div>
          </div>
        </a>
        <div className={styles.quickAddToCart}>
          <button onClick={quickAddToCartHandler}>{t("store-product-addToCart")}</button>
        </div>
        {/* <div className={styles.addBtns}>
          <button className={styles.addToFav}>
            <TbHeartCheck />
          </button>
          <button  className={styles.addToCard}>
            <FiShoppingCart />
          </button>
        </div> */}
        {/* <div className={showBtns ? styles.addBtns : styles.addBtnsHidden}>
          <button onClick={addProdToFavHandler} className={isAddToFavClicked ? styles.addToFavClicked : styles.addToFav}>
            {
              isAddToFavClicked ? <TbHeartCheck /> : <FiHeart />
            }
          </button>
          <button onClick={addProdToCartHandler} className={isAddToCartClicked ? styles.addToCardClicked : styles.addToCard}>
            {
              isAddToCartClicked ? <BsCartCheckFill /> : <FiShoppingCart />
            }
          </button>
        </div> */}
      </div>
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-left" : "bottom-right"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default ProductCard;