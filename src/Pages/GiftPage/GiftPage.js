import Gift from '../../Components/Gifts/Gift/Gift'
import Header from '../../Components/Home/Header/Header'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import HELMET from '../../Components/Utils/HELMET/HELMET'
import useFixedHeader from '../../hooks/scroll/useFixedHeader'

const GiftPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(200);
  
  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <Gift />
      <Subscribe />
    </>
  )
}
export default GiftPage