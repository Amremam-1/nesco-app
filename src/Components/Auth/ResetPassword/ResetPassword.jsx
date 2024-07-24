import React from 'react'
import styles from "./styles.module.scss";
import Input from "../Input/Input";
import { useTranslation } from 'react-i18next';
import useResetPassword from '../../../hooks/auth/useResetPassword';


const ResetPassword = () => {
  const { t } = useTranslation();

  const [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    onChangeConfirmPassword,
    onBlurConfirmPassword,
    onSubmit
  ] = useResetPassword();
  
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerPage__wrapper}>
        <h1 className={styles.title}>{t('reset-text-4')}</h1>
        <form className={styles.registerForm} onSubmit={onSubmit}>
          <Input 
            name="email"
            value={email}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            errorMsg={emailError}
            inputType="email"
            placeHolder={t('reset-text-5')}
            forLogin={true}
          />
          <Input 
            name="password"
            value={password}
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            errorMsg={passwordError}
            inputType="password"
            placeHolder={t('reset-text-6')}
            forLogin={true}
          />
          <Input 
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            onBlur={onBlurConfirmPassword}
            errorMsg={confirmPasswordError}
            inputType="password"
            placeHolder={t('reset-text-7')}
            forLogin={true}
          />
          <div className={styles.bottomWrapper}>
            <button className={styles.registerBtn}>{t('reset-text-8')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword