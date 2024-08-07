import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import { useEffect } from "react"
// import NavigationDots from "../NavigationDots/NavigationDots";
import Aos from "aos"
import "aos/dist/aos.css"
import useGetHomePageData from "../../../hooks/pages/useGetHomePageData"

const About = () => {
  const { t, i18n } = useTranslation()

  const [homePageData] = useGetHomePageData()

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-sine",
      // delay: 100
    })
  }, [])
  // snap-y snap-mandatory w-screen h-screen overflow-x-hidden
  // snap-start h-screen w-screen flex
  return (
    <section className={`${styles.about}`}>
      <div className={`${styles.about__images}`}>
        <div
          className={`scrollSection lazyload ${styles.imageOne}`}
          style={
            {
              backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["1"]})`,
            }
          }
        >
          <div className={styles.imgBox} data-aos="fade-up">
            <div className={styles.content}>
              <div className={styles.imgTitle}>
                <p className={styles.imgDesc}>{t("home-about-img1Desc")}</p>
                <h1>{t("home-about-img1Title")}</h1>
                <span className={styles.data}>{t("home-about-data")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`scrollSection lazyload ${styles.imageTwo}`}
          style={{
            backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["2"]})`,
          }}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            <div className={styles.imageTwo__content}>
              <div className={styles.imgTitle}>
                <h1>{t("home-about-img2Title1")}</h1>
                <h1>{t("home-about-img2Title2")}</h1>
              </div>

              <p className={styles.imgDesc}>{t("home-about-img2Desc")}</p>
              <a className={styles.knowMoreBtn} href="/about">
                {t("home-about-discover")}
              </a>
            </div>
          </div>
        </div> */}
        <section
          className={`scrollSection lazyload  ${styles.elementor_section}`}
        >
          <div className={styles.elementor_section_top}></div>
          <div
            className={
              i18n.language === "en" ? styles.image_tree : styles.image_tree_ar
            }
          >
            <img src="/images/coffeeTree.png" alt="" />
          </div>

          <div className={styles.elementor_container}>
            <div className={styles.elementor_wrapper}>
              <div className={styles.elementor_image}>
                <img src="/images/close-up.jpg" alt="close" />
              </div>

              <div className={styles.elementor_text}>
                <div className={styles.text}>
                  <h2 className={styles.content}>
                    {t("home-about-img2Title1")}
                  </h2>
                </div>

                <div
                  className={
                    i18n.language === "en"
                      ? styles.text_image
                      : styles.text_image_ar
                  }
                >
                  {i18n.language === "en" ? (
                    <img src={"/images/make_coffee.png"} alt="coffee" />
                  ) : (
                    <img src={"/images/coffee-bg.png"} alt="coffee" />
                  )}
                </div>
              </div>

              <div className={styles.text_center}>
                <h1>{t("home-about-img2Title2")}</h1>
              </div>
            </div>

            <div className={styles.wrapper_features}>
              <div className={styles.right}>
                <p className={styles.text}>{t("home-about-img2Desc")}</p>
                <span className={styles.line}></span>

                <div className={styles.singature}>
                  <img src="/images/singature.png" alt="singature" />
                  <p className={styles.subtitle}>
                    {t("home-about-img3Title1")}
                  </p>
                </div>
              </div>
              <div className={styles.left}>
                <img src="/images/aboutus-cup.png" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.elementor_section_bottom}></div>
        </section>

        {/* <div
          className={`scrollSection lazyload ${styles.imageThree}`}
          style={{
            backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["3"]})`,
          }}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            <div className={styles.imageTwo__content}>
              <div className={styles.imgTitle}>
                <h1>{t("home-about-img3Title1")}</h1>
                <h1>{t("home-about-img3Title2")}</h1>
              </div>

              <p className={styles.imgDesc}>{t("home-about-img3Desc")}</p>
              <a className={styles.knowMoreBtn} href="/our-menu">
                {t("home-about-more")}
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About
