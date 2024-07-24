import React from 'react'
import Careers from '../../Components/Careers/Careers'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import Header from '../../Components/Home/Header/Header'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'
import JoinOurFamily from '../../Components/Careers/JoinOurFamily'

const CareersPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(500);


  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* <Careers /> */}
      <Header customBG={true} />
      <JoinOurFamily />
      <Subscribe />
    </>
    )
}

export default CareersPage