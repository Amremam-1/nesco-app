import Header from "../../Components/Home/Header/Header";
import Subscribe from "../../Components/Home/Subscribe/Subscribe";
import OurMenuContainer from "../../Components/OurMenu/OurMenuContainer/OurMenuContainer";
import HELMET from "../../Components/Utils/HELMET/HELMET";
import useFixedHeader from "../../hooks/scroll/useFixedHeader";
import useScrollTo from "../../hooks/scroll/useScrollTo";

const OurMenuPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-menu" description="Nestritto Menu Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 100 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <OurMenuContainer />
      <Subscribe />
    </>
  )
}

export default OurMenuPage