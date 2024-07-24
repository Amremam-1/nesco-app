"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const NavigationDots = () => {
  const [activeDot, setActiveDot] = useState(false);

  const activeDotHandler = () => {
    setActiveDot(!activeDot);
  }

  return (
    <div className={styles.navDots}>
      <div onClick={activeDotHandler} className={activeDot ? styles.dotActive : styles.dot}></div>
      <div onClick={activeDotHandler} className={activeDot ? styles.dotActive : styles.dot}></div>
      <div onClick={activeDotHandler} className={activeDot ? styles.dotActive : styles.dot}></div>
    </div>
  )
}

export default NavigationDots