import React from 'react'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import Header from '../../Components/Home/Header/Header';
import Subscribe from '../../Components/Home/Subscribe/Subscribe';
import AccountTabs from '../../Components/Account/AccountTabs/AccountTabs';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import withGuard from '../../Components/Utils/withGuard/withGuard';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const AccountPage = ({ clickedLink }) => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(200);

  return (
    <>
      <HELMET title="meta-title-account" description="Nestritto Account Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 100 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <AccountTabs clickedLink={clickedLink} />
    </>
  )
}

export default withGuard(AccountPage);