import { useState } from 'react';
import Product from '../../Components/Store/Product/Product'
import StoreUI from '../../Components/Store/StoreUI/StoreUI'
import HELMET from '../../Components/Utils/HELMET/HELMET';

const ProductPage = () => {
  const [clickedCategory, setClickedCategory] = useState("");

  const clickCategoryHandler = (id) => {
    setClickedCategory(id);
  }

  return (
    <>
      <HELMET title="meta-title-product" description="Nestritto Product Page description" />
      <StoreUI clickCategoryHandler={clickCategoryHandler}>
        <Product />
      </StoreUI>
    </>
  )
}

export default ProductPage