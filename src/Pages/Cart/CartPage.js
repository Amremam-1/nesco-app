import React from 'react'
import Cart from '../../Components/Cart/Cart'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import Header from '../../Components/Home/Header/Header'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import withGuard from '../../Components/Utils/withGuard/withGuard'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'
// import axios from 'axios'

const CartPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Cart />
    </>
  )
}

export default withGuard(CartPage);