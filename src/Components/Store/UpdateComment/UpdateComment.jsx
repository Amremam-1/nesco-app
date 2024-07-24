import { useTranslation } from "react-i18next";
import useUpdateReview from "../../../hooks/review/useUpdateReview";
import AddRating from "../AddRating/AddRating";
import styles from "./styles.module.scss";

const UpdateComment = ({reviewNotes, reviewValue}) => {
  const { t, i18n } = useTranslation();

  const [
    ,
    ,
    updateReviewHandler,
    onChangeRating
  ] = useUpdateReview()

  return (
    <form className={styles.updateForm}>
      <AddRating onChangeRating={onChangeRating} rateValue={reviewValue} />
      <textarea
        value={reviewNotes}
        // onChange={onChangeReview}
        name="commentInput"
        id="addComment"
        rows={4}
        placeholder={t("store-product-productComments-addComment-placeholder")}
      />
      <button type="submit" className={styles.shareCommentBtn}>{t("store-updateComment")}</button>
    </form>
  )
}

export default UpdateComment