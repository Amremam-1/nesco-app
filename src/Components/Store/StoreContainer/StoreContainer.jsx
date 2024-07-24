import React from 'react'
import useStoreContainer from "../../../hooks/store/useStoreContainer";
import useStoreSidebar from "../../../hooks/store/useStoreSidebar";
import Pagination from "../../Utils/Pagination/Pagination";
import styles from "./styles.module.scss";
import SkeletoneProductCard from '../ProductCard/SkeletoneProductCard/SkeletoneProductCard';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../../Utils/Spinner/Spinner';

const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));


const StoreContainer = () => {
  const { t } = useTranslation();
  
  // const [
  //   getAllProductsResData,
  //   totalProducts,
  //   per_pageProducts,
  //   isLoading,
  //   error
  // ] = useStoreContainer()
  
  const [
    getAllProductsResData,
    totalProducts,
    per_pageProducts,
    numberOfPages,
    getPage,
    categoryTitle,
    categoryName,
    categoryId,
    isLoading,
    error
  ] = useStoreSidebar();
  
  

  // useEffect(() => {

  // }, [localStorage.getItem("i18nextLng")]);

  return (
    <div className={styles.storeContainer}>
      <div className={styles.contentHeading}>
        <h3 className={styles.clickedTitle}>{categoryTitle}</h3>
      </div>
      <div className={getAllProductsResData?.length > 0 ? styles.filteredProducts : styles.noProducts}>
        {isLoading && <Spinner custom={true} />}
        {error && <p>Error: {error.message}</p>}

        {
          getAllProductsResData?.length > 0 ? (
            getAllProductsResData?.map((productData, index) => (
              <React.Suspense fallback={<SkeletoneProductCard />} key={index}>
                <LazyProductCard 
                  productData={productData}
                />
              </React.Suspense>
            ))
          ) : !isLoading && (
              <div className={styles.notFound}>
                <p>{t("store-container-noResults")}</p>
              </div>
            )
        }
      </div>
      {
        getAllProductsResData?.length > 0 && numberOfPages > 1 ? (
          <Pagination
            pageCount={numberOfPages}
            onPress={getPage} 
          />
        ) : null
      }
    </div>
  )
}

export default StoreContainer


