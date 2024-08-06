import React from "react"
import Login from "../../Components/Auth/Login/Login"
import Header from "../../Components/Home/Header/Header"
import useScrollTo from "../../hooks/scroll/useScrollTo"
import HELMET from "../../Components/Utils/HELMET/HELMET"
import { useTranslation } from "react-i18next"
import useFixedHeader from "../../hooks/scroll/useFixedHeader"
import Corporate from "../../Components/CorporateLogin/RegisterComplaint/Corporate"

const CorporateLogin = () => {
  const { t } = useTranslation()
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100)

  return (
    <>
      <HELMET
        title="meta-title-login"
        description="Nestritto Login Page description"
      />
      <Header customBG={true} />
      <Corporate />
    </>
  )
}

export default CorporateLogin
