import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";

const Popup = ({ msg, type, time }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, time || 5000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div
      className={
        type === "success" ? styles.popupSuccess
          : type === "error" ? styles.popupError
            : type === "warning" ? styles.popupWarning
              : styles.popup
      }
      style={isVisible ? null : {display: "none"}}
    >
      <div className={styles.popup__container}>
        <div className={styles.head}>
          <div onClick={() => setIsVisible(false)} className={styles.closeBtn}>
            <MdClose />
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.msg}>{msg}</p>
        </div>
      </div>
    </div>
  )
}

export default Popup