import styles from "./styles.module.scss";


const GiftCard = () => {
  return (
    <li className={styles.giftCard}>
      <a href="/gift/gift-01-2024" target="_blank" rel="noreferrer">
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + "/images/Untitled-1-02.jpg"} alt="Gift-Card" />
        </div>
      </a>
    </li>
  )
}

export default GiftCard