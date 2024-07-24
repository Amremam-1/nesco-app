import { useTranslation } from "react-i18next";
import useGetFaqs from "../../hooks/faqs/useGetFaqs";
import FaqsCard from "./FaqsCard/FaqsCard";
import styles from "./styles.module.scss";
import { useState } from "react";



const Faqs = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    
    setSelected(i);
  }
  
  const [faqsData, isLoading, error] = useGetFaqs();
  console.log("faqsData: ", faqsData);
  
  // console.log("Language from Localstorage:", JSON.stringify(localStorage.getItem("lang")))
  const faqsList = [
    {
      id: "1",
      question: t("faq-question-1"),
      answer: t("faq-answer-1"),
    },
    {
      id: "2",
      question: t("faq-question-2"),
      answer: t("faq-answer-2"),
    },
    {
      id: "3",
      question: t("faq-question-3"),
      answer: t("faq-answer-3"),
      link: t("faq-answer-3-link"),
      linkTitle: t("faq-answer-3-linkTitle"),
    },
    {
      id: "4",
      question: t("faq-question-4"),
      answer: t("faq-answer-4"),
    },
    {
      id: "5",
      question: t("faq-question-5"),
      answer: t("faq-answer-5"),
    },
    {
      id: "6",
      question: t("faq-question-6"),
      answer: t("faq-answer-6"),
    },
    {
      id: "7",
      question: t("faq-question-7"),
      answer: t("faq-answer-7"),
    },
  ];

  return (
    <section className={styles.faqs}>
      <div className={styles.faqs__container}>
        <div className="pageTitle">
          <h2>{t("faqs-faqs-title")}</h2>
        </div>
        <form className={styles.searchQuesForm}>
          <label htmlFor="searchQues">{t("faqs-faqs-label")}</label>
          <div className={styles.searchBox}>
            <input id="searchQues" placeholder={t("faqs-faqs-placeholder")} />
            <button className={styles.searchBtn}>{t("faqs-faqs-searchBtn")}</button>
          </div>
        </form>
        <ul className={styles.faqsList}>
          {
            faqsList.map((item, index) => (
              <FaqsCard
                key={item.id} 
                item={item}
                index={index}
                toggle={toggle}
                selected={selected}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Faqs