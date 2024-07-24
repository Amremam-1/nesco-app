import ProductCard from "../ProductCard/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.scss";
import useNewArrivalProducts from "../../../hooks/products/useNewArrivalProducts";
import { useTranslation } from "react-i18next";


const ProductsSlider = () => {
  const { t, i18n } = useTranslation();
  const [newArrivalData, newArrivalCurrentPage, newArrivalPagesArray, newArrivalTotal] = useNewArrivalProducts();


  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, []);

  return (
    <section className={styles.productsSlider}>
      <div className={styles.productsSlider__container}>
        <h2 className={styles.title}>{t("home-productSlider-ourProducts")}</h2>
        <div className={styles.carouselWrapper}>
          <div className={styles.arrowBtns}>
            <div className={styles.rightArrow}>
              <BsChevronRight />
            </div>
            <div className={styles.leftArrow}>
              <BsChevronLeft />
            </div>
          </div>
          <motion.div
            className={styles.carousel}
            ref={carouselRef}
            whileTap={{ cursor: "grabbing"}}
          >
            <motion.ul
              drag="x"
              dragConstraints={{ left: 0, right: width }}
              className={styles.innerCarousel}
            >
              {
                newArrivalData.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    img={product.image}
                    link="/"
                    text={product.title}
                  />
                ))
              }
            </motion.ul>
          </motion.div>
        </div>
        <button className={styles.discoverBtn}>
          <a href="/store">{t("home-productSlider-shopAllProducts")}</a>
        </button>
      </div>
    </section>
  )
}

export default ProductsSlider