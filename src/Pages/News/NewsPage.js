import Header from '../../Components/Home/Header/Header'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import NewsContainer from '../../Components/OurNews/NewsContainer/NewsContainer';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';
import useScrollTo from '../../hooks/scroll/useScrollTo'

const NewsPage = ({ forNews, forNewsId, forGallery, forVideos }) => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-news" description="Nestritto News Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 50 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <NewsContainer
        forNews={forNews}
        forNewsId={forNewsId}
        forGallery={forGallery}
        forVideos={forVideos} 
      />
      <Subscribe />
    </>
  )
}

export default NewsPage;