import styles from "./styles.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";


const SocialShare = ({ showSocial }) => {
  return (
    <div className={showSocial ? styles.socialsVisible : styles.socials}>
      <ul className={styles.socialList}>
        <li className={`${styles.item} ${styles.facebook}`}>
          <a href="/">
            <FaFacebookF />
          </a>
        </li>
        <li className={`${styles.item} ${styles.twitter}`}>
          <a href="/">
            <FaTwitter />
          </a>
        </li>
        <li className={`${styles.item} ${styles.instagram}`}>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
        <li className={`${styles.item} ${styles.pinterest}`}>
          <a href="/">
            <BsPinterest />
          </a>
        </li>
      </ul>
  </div>
  )
}

export default SocialShare