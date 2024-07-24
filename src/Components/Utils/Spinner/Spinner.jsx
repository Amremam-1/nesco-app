import styles from "./styles.module.scss";

const Spinner = ({custom}) => {
  return (
    <div className={custom ? styles.customSpinner : styles.fullWidthSpinner}>
      <div className={styles.image}>
        <img src="/images/logo.png" alt="" />
      </div>
    </div>
  )
}

export default Spinner;