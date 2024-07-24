import RatingStars from "../../Utils/RatingStars/RatingStars";
import { FaRegEdit } from "react-icons/fa";
import styles from "./styles.module.scss";
import Cookies from "js-cookie";
import useUpdateReview from "../../../hooks/review/useUpdateReview";
import UpdateComment from "../UpdateComment/UpdateComment";
import { useState } from "react";
// import RatingStars from "@/components/utils/RatingStars/RatingStars";


const ProductComment = ({ revData }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [commentData, setCommentData] = useState();
  
  const [
    reviewNotes,
    reviewValue,
    updateReviewHandler,
    onChangeRating
  ] = useUpdateReview()

  const editReview = (revData) => {
    updateReviewHandler(revData);
    setIsEditClicked(prevState => !prevState);
    setCommentData(revData);
  }

  return (
    <div className={styles.prodComment}>
      <div className={styles.wrapper}>
        <div className={JSON.parse(Cookies.get("user_id")) === revData.user_id ? styles.userImgCircle : styles.userImg}>
          {/* <img src={process.env.PUBLIC_URL + "/images/user2.svg"} alt="" /> */}
          <h2 className={styles.alias}>
            <span className={styles.first}>{revData.user_name.split(" ")[0][0]}</span>
            <span className={styles.second}>{revData.user_name.split(" ")[1][0]}</span>
          </h2>
        </div>
        <div className={styles.body}>
          <div className={styles.commentBox}>
            <div className={styles.commentDetails}>
              <div className={styles.user}>
                <h3 className={styles.userName}>{revData.user_name}</h3>
                <RatingStars rate={revData.value} />
              </div>
              <div className={styles.date}>{revData.created_at}</div>
            </div>
            {
              JSON.parse(Cookies.get("user_id")) === revData.user_id ? (
                <div className={styles.editBtn}>
                  <FaRegEdit onClick={() => editReview(revData)} />
                </div>
              ) : null
            }
          </div>
          <p className={styles.commentTxt}>{revData.notes}</p>
        </div>
      </div>
      {
        JSON.parse(Cookies.get("user_id")) === revData.user_id && isEditClicked ? (
          <div className={styles.updateComment}>
            <UpdateComment reviewValue={commentData?.value} reviewNotes={commentData?.notes} />
          </div>
        ) : null
      }
    </div>
  )
}

export default ProductComment;