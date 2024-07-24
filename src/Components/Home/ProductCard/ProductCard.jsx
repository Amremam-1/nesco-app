import { motion } from "framer-motion";
import styles from "./styles.module.scss";


const ProductCard = ({ img, link, text}) => {
  return (
    <motion.li className={styles.productCard}>
      <motion.a  className={styles.link} href={link}>
        <img width={150} height={207} src={process.env.PUBLIC_URL + img} alt={text} />
      </motion.a>
      <p className={styles.desc}>{text}</p>
    </motion.li>
  )
}

export default ProductCard;