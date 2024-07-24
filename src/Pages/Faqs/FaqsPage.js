import Header from '../../Components/Home/Header/Header'
import Faqs from '../../Components/Faqs/Faqs'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import useScrollTo from '../../hooks/scroll/useScrollTo'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const FaqsPage = () => {
  // const [scrollPosition] = useScrollTo();
  // const [isHeaderFixed] = useFixedHeader(100);
  
  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Faqs />
      <Subscribe />
    </>
  )
}

export default FaqsPage