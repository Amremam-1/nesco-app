import React from 'react'
import Checkout from '../../Components/Checkout/Checkout'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import Header from '../../Components/Home/Header/Header';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import withGuard from '../../Components/Utils/withGuard/withGuard';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const CheckoutPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(500);

  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 140 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Checkout />
    </>
  )
}

export default withGuard(CheckoutPage);
