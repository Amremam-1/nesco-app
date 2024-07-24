import { useTranslation } from "react-i18next";
import useGetSetting from "../../../hooks/setting/useGetSetting";
import styles from "./styles.module.scss";

const CommingSoon = ({ text, isForFranchising }) => {
  const { t, i18n } = useTranslation();

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfcV-yDaBKt6fqK5LdCMnsqn9hyFWZBdwOcSXoitq4YfrZ5hg/viewform";

  const [
    faqsData,
    email,
    mobile,
    website_name,
    facebook_link,
    instgram_link,
    twitter_link,
    address,
    whatsapp,
    android_link,
    ios_link,
    policy,
    cities
  ] = useGetSetting();

  return (
    <section className={styles.commingSoon}>
      <div className={styles.commingSoon__container}>
        <h1 className={styles.title}>{t("commingSoon-title")}</h1>
        <p className={styles.desc}>
          <span>{text}</span>
          <span className={styles.custText}>{t("commingSoon-text1")}</span>
          <br />
          {
            email && email.length > 1
              ? <span>( {t("commingSoon-text2")} {email} )</span>
              : <span>( {t("commingSoon-text2")} nestrettocoffee@gmail.com )</span>
          }
          <br />
          {isForFranchising ? <a className={styles.franchiseFormLink} href={googleFormLink}>{t("commingSoon-franchiseForm")}</a> : null}
        </p>
      </div>
    </section>
  )
}

export default CommingSoon