import React from "react"
import Subscribe from "../../Components/Home/Subscribe/Subscribe"
import HELMET from "../../Components/Utils/HELMET/HELMET"
import Header from "../../Components/Home/Header/Header"

import useFixedHeader from "../../hooks/scroll/useFixedHeader"
import Political from "../../Components/Political/Political"

const PoliticalPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(200)

  return (
    <>
      <HELMET
        title="meta-title-terms"
        description="Nestritto Political Page description"
      />
      <Header customBG={true} />
      <Political />
      <Subscribe />
    </>
  )
}

export default PoliticalPage
