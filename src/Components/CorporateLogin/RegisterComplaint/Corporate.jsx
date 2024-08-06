import ComplaintForm from "../ComplaintForm/ComplaintForm"
import styles from "./styles.module.scss"

const Corporate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>خدمة تقديم البلاغات والشكاوى</h1>
          <p>
            نحن هنا لدعمك في تقديم شكاوى عن قهوة نستريتو وفحصها بجدية لضمان
            الجودة. تواصل معنا لأي استفسارات أو مشكلات.
          </p>
        </header>

        <ComplaintForm />
      </div>
    </div>
  )
}

export default Corporate
