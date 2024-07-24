import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";


const FaqsCard = ({ item, toggle, index, selected }) => {
  const { t, i18n } = useTranslation();
  return (
    <li className={styles.faqsListItem}>
      <div onClick={() => toggle(index)} className={styles.question}>
        <div className={styles.title}>
          <div className={styles.qLetter}>{t("faqs-faqsCard-Q")}</div>
          <h3 className={styles.quesTxt}>{item.question}</h3>
        </div>
        <div className={styles.icons}>
          {
            selected === index ? <BiChevronUp /> : <BiChevronDown />
          }
        </div>
      </div>
      <div className={selected === index ? styles.answer : styles.answerHidden}>
        <div className={styles.aLetter}>{t("faqs-faqsCard-A")}</div>
        <div className={styles.answerBox}>
          <p className={styles.ansTxt}>{item.answer}</p>
          {item.link ? <a className={styles.ansLink} href={item.link}>{item.linkTitle}</a> : null}
        </div>
      </div>
    </li>
  )
}

export default FaqsCard