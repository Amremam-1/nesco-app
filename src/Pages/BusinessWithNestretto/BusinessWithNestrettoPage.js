import React from 'react'
import Header from '../../Components/Home/Header/Header'
import CommingSoon from '../../Components/Utils/CommingSoon/CommingSoon'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import { useTranslation } from 'react-i18next'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const BusinessWithNestrettoPage = () => {
  const { t, i18n } = useTranslation();
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-business" description="Nestritto Business Page description" />
      {/* <Header customBG={true} /> */}
      {/* {isHeaderFixed ? <Header customBG={true} fixedHeader={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 30 ? <Header customBG={true} fixedHeader={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <CommingSoon text={t("commingSoon-BusinessWithNestretto")} />
      <Subscribe />
    </>
  )
}

export default BusinessWithNestrettoPage