import React from 'react'
import Register from '../../Components/Auth/Register/Register';
import Header from '../../Components/Home/Header/Header';
import useScrollTo from '../../hooks/scroll/useScrollTo';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const RegisterPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-register" description="Nestritto Register Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 170 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Register />
    </>
  )
}

export default RegisterPage;