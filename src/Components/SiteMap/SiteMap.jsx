import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./styles.module.scss";
// import useGetAllProducts from "../../hooks/categories/useGetAllProducts";

// "sitemap":"Site Map",
// "sitemap-home":"Home", 
// "sitemap-about":"About Us", 
// "sitemap-menu":"Our Menu", 
// "sitemap-family":"Join Our Family", 
// "sitemap-contact":"Contact Us", 
// "sitemap-store":"Store Locator", 
// "sitemap-fqa":"FQA", 
// "sitemap-terms":"Terms & Condition", 
// "sitemap-register":"Registeration",

const linksList = [
  {
    title: "sitemap-home",
    link: "/"
  },
  {
    title: "sitemap-about",
    link: "/about"
  },
  {
    title: "sitemap-store",
    link: "/store"
  },
  {
    title: "sitemap-menu",
    link: "/our-menu"
  },
  {
    title: "sitemap-family",
    link: "/careers"
  },
  {
    title: "sitemap-contact",
    link: "/contact-us"
  },
  {
    title: "sitemap-store-locator",
    link: "/store-locator"
  },
  {
    title: "sitemap-fqa",
    link: "/faqs"
  },
  {
    title: "sitemap-terms",
    link: "/termsConditions"
  },
  {
    title: "sitemap-franchising-and-licensing",
    link: "/franchising-and-licensing"
  },
  {
    title: "sitemap-business-with-nestretto",
    link: "/business-with-nestretto"
  },
  // {
  //   title: "sitemap-news",
  //   link: "/news"
  // },
  // {
  //   title: "sitemap-gallery",
  //   link: "/gallery"
  // },
  {
    title: "gifts-text-1",
    link: "/gift"
  },
  {
    title: "sitemap-register",
    link: "/register"
  },
];


const SiteMap = () => {
  const { t, i18n } = useTranslation();
  // Just For Testing
  // const [getAllProductsResData] = useGetAllProducts(1, null);

  return (
    <section className={styles.siteMap}>
      <div className={styles.siteMap__container}>
        <div className="pageTitle">
          <h2>{t("sitemap")}</h2>
        </div>
        <ul className={styles.mapList}>
          {
            linksList.map((item, index) => (
              <li className={styles.mapListItem} key={index}>
                {i18n.dir() === "ltr" ? <FaChevronRight /> : <FaChevronLeft />}
                <a href={item.link}>{t(item.title)}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default SiteMap