import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
    </a>
  )
}

export default Logo