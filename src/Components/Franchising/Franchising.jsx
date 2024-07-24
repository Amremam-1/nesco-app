import { useTranslation } from "react-i18next";
import AboutFranchising from "./AboutFranchising/AboutFranchising";
import ContactInfo from "./ContactInfo/ContactInfo";
import FinancialCondition from "./FinancialCondition/FinancialCondition";
import JobInfo from "./JobInfo/JobInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import styles from "./styles.module.scss";
import { useState } from "react";
import Stepper from "../Checkout/Stepper/Stepper";
import Summary from "./Summary/Summary";
import useFranchising from "../../hooks/franchising/useFranchising";

const Franchising = () => {
  const { t, i18n } = useTranslation();

  const steps = [t("franchise-step-1"), t("franchise-step-2"), t("franchise-step-3"), t("franchise-step-4"), ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const stepProgressHandler = (isSuccess) => {
    if (currentStep === steps.length || isSuccess) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevHandler = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  const nextHandler = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  const [
    fullName,
    fullNameError,
    onChangeFullName,
    onBlurFullName,
    IDNumber,
    IDNumberError,
    onChangeIDNumber,
    onBlurIDNumber,
    nationality,
    nationalityError,
    onChangeNationality,
    onBlurNationality,
    dateOfBirth,
    dateOfBirthError,
    onChangeDateOfBirth,
    onBlurDateOfBirth,
    educQualification,
    educQualificationError,
    onChangeEducQualification,
    onBlurEducQualification,
    onSubmit
  ] = useFranchising();

  return (
    <section className={styles.franchising}>
      <div className={styles.franchising__container}>
        <div className={styles.head}>
          <h1 className={styles.mainTitle}>{t("franchise-head-text-1")}</h1>
          <p className={styles.text}>{t("franchise-head-text-2")}</p>
          <p className={styles.text}>{t("franchise-head-text-3")}</p>
          <h2 className={styles.title}>{t("franchise-head-text-4")}</h2>
        </div>
        <Stepper 
          steps={steps}
          currentStep={currentStep}
          complete={complete}
          stepProgressHandler={stepProgressHandler}
        />
        {currentStep === 1 &&<PersonalInfo />}
        {currentStep === 2 &&<FinancialCondition />}
        {currentStep === 3 &&<JobInfo />}
        {!complete && currentStep === 4 ? <AboutFranchising /> : null}
        {complete && currentStep > 3 ? <Summary /> : null}
        {
          !complete && currentStep < 5 ? (
            <div className={styles.btns}>
              <button disabled={currentStep === 1} className={styles.prevBtn} onClick={prevHandler}>{t("franchise-prevBtn")}</button>
              <button disabled={currentStep > 3} className={styles.nextBtn} onClick={nextHandler}>{t("franchise-nextBtn")}</button>
              <button disabled={currentStep < 4} className={styles.sendBtn} onClick={stepProgressHandler}>{t("franchise-sentBtn")}</button>
            </div>
          ) : null
        }
      </div>
    </section>
  )
}

export default Franchising