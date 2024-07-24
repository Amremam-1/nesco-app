import { useState } from 'react';
import { placeOrder } from '../../redux/thunkActions/paymentActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../notify/useNotification';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllUserReivews } from '../../redux/thunkActions/reviewActions';

const useGetUserReviews = (urlParams) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getAllUserReivews());
      setLoading(false);
    }

    run();
  }, [])


  const { getAllUserReivewsRes, isLoading, error } = useSelector(state => state.ReviewSlice);

  console.log("_______( <+---+> )__________ getInvoiceRes:", getAllUserReivewsRes);

  let allUserReviews = [];

  if (!loading) {
    if (getAllUserReivewsRes) {
      if (getAllUserReivewsRes.status) {
        if (getAllUserReivewsRes["user reviews"]) {
          allUserReviews = getAllUserReivewsRes["user reviews"];
        }
      }
    }
  }
  
  return [allUserReviews, isLoading, error]
}

export default useGetUserReviews