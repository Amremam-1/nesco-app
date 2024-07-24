import React from 'react'
import Terms from '../../Components/Terms/Terms'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import Header from '../../Components/Home/Header/Header'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const TermsPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(200);

  return (
    <>
      <HELMET title="meta-title-terms" description="Nestritto Terms Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Terms />
      <Subscribe />
    </>
  )
}

export default TermsPage
