import React from 'react'
import ForgetPassowrd from '../../Components/Auth/ForgetPassword/ForgetPassowrd'
import Header from '../../Components/Home/Header/Header'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const ForgetPassword = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <ForgetPassowrd />
    </>

  )
}

export default ForgetPassword