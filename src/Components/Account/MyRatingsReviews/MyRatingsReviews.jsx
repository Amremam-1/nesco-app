import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import useGetUserReviews from "../../../hooks/review/useGetUserReviews";
import Spinner from "../../Utils/Spinner/Spinner";

const MyRatingsReviews = () => {
  const { t, i18n } = useTranslation();

  const [allUserReviews, isLoadingUserReviews, errorUserReviews] =  useGetUserReviews()

  return (
    <div className={styles.myRatingsReviews}>
      {isLoadingUserReviews && <Spinner custom={true} />}
      {errorUserReviews && <p>Error: {errorUserReviews.message}</p>}
      <div className={styles.myRatingsReviews__container}>
        <h3 className={styles.title}>{t("account-myRatingsReviews-title")}</h3>
        <div className={styles.records}>
          {
            allUserReviews ? (
              allUserReviews?.map((item, index) => (
                <p>{item.id}</p>
              ))
            ): !isLoadingUserReviews && (
              <div className={styles.notFound}>
                <p>{t("account-myRatingsReviews-noRecords")}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MyRatingsReviews