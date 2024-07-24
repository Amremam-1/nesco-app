import StoreContainer from '../../Components/Store/StoreContainer/StoreContainer'
import StoreUI from '../../Components/Store/StoreUI/StoreUI'
import HELMET from '../../Components/Utils/HELMET/HELMET';

const StorePage = () => {
  return (
    <>
      <HELMET title="meta-title-store" description="Nestritto Store Page description" />
      <StoreUI>
        <StoreContainer />
      </StoreUI>
    </>
  )
}

export default StorePage












// --------------------------------------------------------------------------------------------------
// import React, { useState } from 'react'
// import StoreContainer from '../../Components/Store/StoreContainer/StoreContainer'
// import StoreUI from '../../Components/Store/StoreUI/StoreUI'
// import useGetCategoryDetails from '../../hooks/categories/useGetCategoryDetails';
// import useBestSellingProducts from '../../hooks/products/useBestSellingProducts';

// const StorePage = () => {
//   let pageNum = 1;
//   const [clickedCategory, setClickedCategory] = useState("");

//   const clickCategoryHandler = (id) => {
//     setClickedCategory(id);
//   }
//   const [categoryData, categoryCurrentPage, categoryPagesArray, categoryTotal] = useGetCategoryDetails(clickedCategory);

//   const [bestSellingData, bestSellingCurrentPage, bestSellingPagesArray, bestSellingTotal] = useBestSellingProducts(pageNum);
  

//   return (
//     <StoreUI clickCategoryHandler={clickCategoryHandler}>
//       <StoreContainer />
//     </StoreUI>
//   )
// }

// export default StorePage