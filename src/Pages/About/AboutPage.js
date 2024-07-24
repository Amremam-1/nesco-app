import React from 'react'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import Header from '../../Components/Home/Header/Header';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import Subscribe from '../../Components/Home/Subscribe/Subscribe';
import AboutUs from '../../Components/AboutUs/AboutUs';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const AboutPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);
  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 50 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <AboutUs />
      <Subscribe />
    </>
  )
}

export default AboutPage
