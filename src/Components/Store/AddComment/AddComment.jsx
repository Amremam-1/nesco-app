import styles from "./styles.module.scss";
import useAddReview from "../../../hooks/review/useAddReview";
import { useTranslation } from "react-i18next";
import AddRating from "../AddRating/AddRating";
import Popup from "../../Utils/Popup/Popup";
import RatingStars from "../../Utils/RatingStars/RatingStars";
// import RatingStars from "@/components/utils/RatingStars/RatingStars";



const AddComment = ({prodId, rate, having_review, reviewList, reviewNotes, reviewValue}) => {
  const { t, i18n } = useTranslation();

  const [
    reviewVal,
    onChangeReview,
    rateValue,
    onChangeRating,
    onSubmitReview,
    reviewResData,
    addReviewSuccess,
    addReviewError,
    apiToken
  ] = useAddReview(prodId, reviewNotes, reviewValue);

  console.log("___8___ reviewResData:", reviewResData);

  return (
    <div className={styles.addComment}>
      <div className={styles.addComment__show}>
        <h3 className={styles.commRate}>
          {rate && <span className={styles.rate}>{rate.toFixed(1)}</span>}
          <span>{t("store-product-productComments-addComment-from")}</span>
          <span>5</span>
        </h3>
        {/* <RatingStars newRateValue={4} /> */}
        <RatingStars rate={rate} />
        <p className={styles.commNum}>
          {reviewList?.length} {reviewList?.length > 1 ? t("store-product-productComments-addComment-prodComments"): t("store-product-productComments-addComment-prodComment")}
        </p>
      </div>
      <form onSubmit={onSubmitReview} className={styles.addComment__add}>
        {/* <>
          {addReviewError  ? <Popup time={10000} type="error" msg={addReviewError} /> : null}
          {addReviewSuccess  ? <Popup time={10000} type="success" msg={addReviewSuccess} /> : null}
        </> */}
        <label htmlFor="addComment">{t("store-product-productComments-addComment-addYourComment")}</label>
        {
          apiToken ? (
            <>
              <AddRating onChangeRating={onChangeRating} rateValue={rateValue} />
              <textarea
                value={reviewVal}
                onChange={onChangeReview}
                name="commentInput"
                id="addComment"
                rows={4}
                placeholder={t("store-product-productComments-addComment-placeholder")}
              />
              <button type="submit" className={styles.shareCommentBtn}>{t("store-product-productComments-addComment-shareComment")}</button>
            </>
          ) : (
              <div className={styles.loginFirst}>
                <a href="/login">{t("store-loginFirst")}</a>
              </div>
          )
        }
      </form>
    </div>
  )
}

export default AddComment