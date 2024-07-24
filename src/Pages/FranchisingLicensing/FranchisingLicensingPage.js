import React from 'react'
import Header from '../../Components/Home/Header/Header'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import CommingSoon from '../../Components/Utils/CommingSoon/CommingSoon'
import { useTranslation } from 'react-i18next'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'
import Franchising from '../../Components/Franchising/Franchising'

const FranchisingLicensingPage = () => {
  const { t, i18n } = useTranslation();
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-franchising" description="Nestritto Franchising Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 30 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      {/* <CommingSoon isForFranchising={true} text={t("commingSoon-FranchisingandLicensing")} /> */}
      <Franchising />
      <Subscribe />
    </>
  )
}

export default FranchisingLicensingPage