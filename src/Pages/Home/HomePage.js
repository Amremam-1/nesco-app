import React, { useState } from "react"
import About from "../../Components/Home/About/About"
import Offers from "../../Components/Home/Offers/Offers"
import Subscribe from "../../Components/Home/Subscribe/Subscribe"
import Header from "../../Components/Home/Header/Header"
import MainSlider from "../../Components/Home/MainSlider/MainSlider"
import useScrollTo from "../../hooks/scroll/useScrollTo"
import HELMET from "../../Components/Utils/HELMET/HELMET"
import AboutSlider from "../../Components/Home/AboutSlider/AboutSlider"
import useFixedHeader from "../../hooks/scroll/useFixedHeader"
import AboutDetails from "../../Components/Home/AboutDetails/AboutDetails"
import Menu from "../../Components/Home/Menu/Menu"

const HomePage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(200)

  return (
    <div className="homePage">
      <HELMET
        title="meta-title-home"
        description="From the love of coffee beans’ smell and the ecstasy of the first coffee slurp the idea of NESTRETTO COFFEE has created , it all started in 2017 we've founded the first branch in Abha ,and kept on developing this brand ending up today with 35 branches in Asir , Jazan and Riyadh regions, doing our best to achieve the goal of reaching all Saudi Arabia regions sooner and then go viral to reach all the world later."
      />
      {isHeaderFixed ? <Header fixedHeader={true} /> : <Header />}
      {/* {scrollPosition > 100 ? <Header fixedHeader={true} /> : <Header /> } */}
      <About />

      {/* edite mora  */}
      <AboutDetails />
      <Menu />
      <MainSlider />
      <Offers />
      {/* <Subscribe isForHome={true} /> */}
    </div>
  )
}

export default HomePage
