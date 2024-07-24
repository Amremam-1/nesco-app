import React from 'react'
import Login from '../../Components/Auth/Login/Login'
import Header from '../../Components/Home/Header/Header'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import { useTranslation } from 'react-i18next';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const CorporateLogin = () => {
  const { t } = useTranslation();
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);


  return (
    <>
      <HELMET title="meta-title-login" description="Nestritto Login Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 170 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Login pageTitle={t("login-loginCredCorporate")} />
    </>
  )
}

export default CorporateLogin