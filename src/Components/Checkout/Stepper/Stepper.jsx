import { useState } from "react";
import { TiTick } from "react-icons/ti";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Stepper = ({ steps, currentStep, complete, stepProgressHandler }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.stepper}>
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`${i18n.dir() === "rtl" ? styles.stepItemAr : styles.stepItem} ${currentStep === i + 1 && styles.active} ${
              (i + 1 < currentStep || complete) && styles.complete
            } `}
          >
            <div className={styles.step}>
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className={styles.text}>{step}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Stepper