import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import useGetSliderImgs from "../../../hooks/slider/useGetSliderImgs"
import axios from "axios"
import { useEffect } from "react"
import useGetAllCategories from "../../../hooks/categories/useGetAllCategories"
// import { setupCache } from 'axios-cache-adapter';

const slidesArray = [
  {
    id: "4",
    pic: "4-slider.jpeg",
  },
  {
    id: "5",
    pic: "5-slider.jpeg",
  },
  {
    id: "6",
    pic: "6-slider.jpeg",
  },
  {
    id: "7",
    pic: "7-slider.jpeg",
  },
  {
    id: "8",
    pic: "8-slider.jpeg",
  },
  {
    id: "9",
    pic: "9-slider.jpeg",
  },
]

const MainSlider = () => {
  const { t } = useTranslation()

  // const [sliderImgsData, isLoading, error] = useGetSliderImgs();
  // console.log("sliderImgsData: ", sliderImgsData);

  const [categoriesData] = useGetAllCategories()
  console.log("_____(**)_____: categoriesData: ", categoriesData)

  const getData = async (url) => {
    const baseUrl = axios.create({
      baseURL: "https://nestrettocoffee.com/dashboard/api",
    })

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET",
        api_password: "123456",
        language: localStorage.getItem("i18nextLng"),
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0",
      },
    }

    const res = await baseUrl.get(url, config)

    console.log("slider response: ", res)
  }

  useEffect(() => {
    // getData("/slider");
  }, [])

  return (
    <section className={`${styles.mainSlider}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("home-productSlider-ourCategories")}
        </h2>
        <div className={styles.carouselWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={styles.mySwiper}
            navigation
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => "console.log(swiper)"}
          >
            {categoriesData ? (
              categoriesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a href="/store" className={styles.sliderImage}>
                    <img
                      className="lazyload"
                      src={process.env.PUBLIC_URL + slide.image}
                      alt={slide.title}
                    />
                  </a>
                </SwiperSlide>
              ))
            ) : (
              <p>No Images Found</p>
            )}
          </Swiper>
        </div>
        <button className={styles.discoverBtn}>
          <a href="/store">{t("home-productSlider-shopAllProducts")}</a>
        </button>
      </div>
    </section>
  )
}

export default MainSlider

// ===================================================================================
// {
//   slidesArray ? (
//     slidesArray.map((slide, index) => (
//       <SwiperSlide key={slide.id}>
//         <div className={styles.sliderImage}>
//           <img className="lazyload" src={process.env.PUBLIC_URL + `/images/MainSlider/${slide.pic}`} alt={`Slide-${slide.id}`} />
//         </div>
//       </SwiperSlide>
//     ))
//   ) : <p>No Images Found</p>
// }
// ===================================================================================

// const [sliderImgsData, isLoading, error] = useGetSliderImgs();

// console.log("sliderImgsData: ", sliderImgsData);
// -----------------------------------------------------

// const cache = setupCache({
//   maxAge: 1 * 60 * 1000, // Cache data for 1 minute
// });

// const fetchData = async () => {
//   const response = await fetch("https://gold-global.org/dashboard/api/slider", {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'POST, GET',
//       'api_password': '123456',
//       'language': 'ar',
//       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0',
//     }
//   });

//   const res = await response.json();

//   console.log("slider response: ", res)
// }

// const response = await fetch("https://gold-global.org/dashboard/api/slider", {
//   method: 'GET',
//   mode: "cors",
//   cache: "no-cache",
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'POST, GET',
//     'api_password': '123456',
//     'language': 'ar',
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0',
//   }
// });
