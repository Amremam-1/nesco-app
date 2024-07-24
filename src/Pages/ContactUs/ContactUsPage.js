import React from 'react'
import Header from '../../Components/Home/Header/Header'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import ContactUs from '../../Components/ContactUs/ContactUs'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const ContactUsPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-contactUs" description="Nestritto Contact Us Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 100 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <ContactUs />
      <Subscribe />
    </>
  )
}

export default ContactUsPage