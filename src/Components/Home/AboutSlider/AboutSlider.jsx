import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

import { EffectCreative, EffectFade, Mousewheel, Pagination } from 'swiper/modules';

// import './styles.css';


import styles from "./styles.module.scss";
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import MainSlider from '../MainSlider/MainSlider';
import Offers from '../Offers/Offers';
import Subscribe from '../Subscribe/Subscribe';

const AboutSlider = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        easing: "ease-in-sine",
        // delay: 100
      }
    );
  }, []);

  return (
    <section className={styles.aboutSlider}>
      <div className={styles.aboutSlider__container}>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, "-100%", 0],
            },
            next: {
              translate: [0, '100%', 0],
            },
          }}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCreative, Mousewheel, Pagination]}
          className={styles.aboutSwiper}
        >
          <SwiperSlide>
            <div className={`lazyload ${styles.imageOne}`}>
              <div className={styles.imgBox} data-aos="fade-up">
                <div className={i18n.dir() === "rtl" ? styles.gifLeft : styles.gifRight}>
                  <img src="/images/gifcoffee_beans.gif" alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.imgTitle}>
                    <h1>{t("home-about-img1Title")}</h1>
                    <span>&#9415;</span>
                  </div>
                  <p className={styles.imgDesc}>{t("home-about-img1Desc")}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`lazyload ${styles.imageTwo}`}>
              <div className={styles.imgBox}>
                <div className={styles.gif}>
                  <img src="/images/powder-coffee-ar.gif" alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.imgTitle}>
                    <h1>{t("home-about-img2Title1")}</h1>
                    {/* <br /> */}
                    <h1>{t("home-about-img2Title2")}</h1>
                  </div>
                  <p className={styles.imgDesc}>{t("home-about-img2Desc")}</p>
                  <a className={styles.knowMoreBtn} href="/about">{t("home-about-discover")}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`lazyload ${styles.imageThree}`}>
              <div className={styles.imgBox}>
                <div className={styles.gif}>
                  <img src="/images/coffee-cup-ar.gif" alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.imgTitle}>
                    <h1>{t("home-about-img3Title1")}</h1>
                    {/* <br /> */}
                    <h1>{t("home-about-img3Title2")}</h1>
                  </div>
                  <p className={styles.imgDesc}>{t("home-about-img3Desc")}</p>
                  <a className={styles.knowMoreBtn} href="/our-menu">{t("home-about-more")}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className={styles.lastSlide}>
              <MainSlider />
              <Offers />
              <Subscribe />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  )
}

export default AboutSlider