import React from 'react'
import Header from '../../Components/Home/Header/Header'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import { useTranslation } from 'react-i18next';
import LoginFirst from '../../Components/Utils/LoginFirst/LoginFirst';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const LoginFirstPage = () => {
  const { t } = useTranslation();
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-login" description="Nestritto Login Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 170 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <LoginFirst />
    </>
  )
}

export default LoginFirstPage