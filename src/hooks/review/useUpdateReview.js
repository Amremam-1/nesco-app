import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/thunkActions/reviewActions";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import notify from "../notify/useNotification";


const useUpdateReview = () => {
  const apiToken = Cookies.get("api_token");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [reviewNotes, setReviewNotes] = useState("");
  const [reviewValue, setReviewValue] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [oldReivewData, setOldReivewData] = useState();


  const updateReviewHandler = (reviewData) => {
    console.log("_((((())))))_reviewData", reviewData);
    setOldReivewData(reviewData);
  }

  const onChangeRating = (val) => {
    setRateValue(val);
  }

  useEffect(() => {
    setReviewNotes(oldReivewData?.notes);
    setReviewValue(oldReivewData?.value);
  }, [oldReivewData]);

  


  return [
    reviewNotes,
    reviewValue,
    updateReviewHandler,
    onChangeRating
  ];
}

export default useUpdateReview