import styles from "./styles.module.scss";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";
import useForgetPassowrd from "../../../hooks/auth/useForgetPassowrd";



const ForgetPassowrd = () => {
  const { t } = useTranslation();

  const [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    onSubmit
  ] = useForgetPassowrd();

  return (
    <div className={styles.registerPage}>
    <div className={styles.registerPage__wrapper}>
      <h1 className={styles.title}>{t('reset-text-1')}</h1>
      <form className={styles.registerForm} onSubmit={onSubmit}>
        <Input 
          name="email"
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          errorMsg={emailError}
            inputType="email"
          placeHolder={t('reset-text-2')}
          forLogin={true}
        />
        <div className={styles.bottomWrapper}>
          <button className={styles.registerBtn}>{t('reset-text-3')}</button>
        </div>
      </form>
    </div>
  </div>

    )
}

export default ForgetPassowrd