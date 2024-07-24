import Header from "../../Components/Home/Header/Header";
import StoreLocator from "../../Components/Home/StoreLocator/StoreLocator";
import Subscribe from "../../Components/Home/Subscribe/Subscribe";
import HELMET from "../../Components/Utils/HELMET/HELMET";
import useFixedHeader from "../../hooks/scroll/useFixedHeader";
import useScrollTo from "../../hooks/scroll/useScrollTo";

const StoreLocatorPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-storeLocator" description="Nestritto Store Locator Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 50 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <StoreLocator />
      <Subscribe />
    </>
  )
}

export default StoreLocatorPage