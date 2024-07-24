import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/thunkActions/reviewActions";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import notify from "../notify/useNotification";


const useAddReview = (prodId) => {
  const apiToken = Cookies.get("api_token");
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(true);
  const [reviewVal, setReviewVal] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [addReviewSuccess, setAddReviewSuccess] = useState("");
  const [addReviewError, setAddReviewError] = useState("");

  const onChangeReview = (e) => {
    setReviewVal(e.target.value);
  }

  const onChangeRating = (val) => {
    setRateValue(val);
    // setRateValue(e.target.value);
  }

  const onSubmitReview = async (e) => {
    e.preventDefault();

    const reviewData = {
      product_id: prodId,
      value: rateValue,
      notes: reviewVal
    }
    if (apiToken) {
      setLoading(true);
      await dispatch(addReview(reviewData));
      setLoading(false);
      setReviewVal("");
      setRateValue(0);
    }
  }

  const { reviewRes, isLoading, error } = useSelector(state => state.ReviewSlice);
  
  console.log("++++++ ----- ++++++reviewRes-----", reviewRes)

  let reviewResData = [];

  useEffect(() => {
    if (!loading) {
      if (reviewRes) {
        if (reviewRes.data) {
          if (reviewRes.data.status) {
            setAddReviewSuccess(reviewRes.data.message);
            notify(reviewRes.data.message, "success")
            if (reviewRes.data.review) {
              reviewResData = reviewRes.data.review;
            }
          } else {
            setAddReviewError(reviewRes.message);
            notify(reviewRes.message, "error")
          }
        }
    
      }
    }
  }, [loading, reviewRes])

  return [
    reviewVal,
    onChangeReview,
    rateValue,
    onChangeRating,
    onSubmitReview,
    reviewResData,
    addReviewSuccess,
    addReviewError,
    apiToken
  ];
}

export default useAddReview;