import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { checkCoupon } from "../../redux/thunkActions/couponActions";
import notify from "../notify/useNotification";


const useCheckCoupon = (couponCode) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showApplyCheckoutPopup, setShowApplyCheckoutPopup] = useState(false);
  const [couponValidationMsg, setCouponValidationMsg] = useState("");

  const apiToken = Cookies.get("api_token");


  const checkCouponHandler = async () => {
    if (apiToken) {
      setLoading(true);
      await dispatch(checkCoupon(couponCode));
      setLoading(false);
      setTimeout(() => {
        // navigate('/cart');
        window.location.reload();
      }, 3000);
      // setCouponValidationMsg("");
    } else {
      setShowApplyCheckoutPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  // useEffect(() => {
  //   checkCouponHandler();
  // }, [localStorage.getItem("i18nextLng")]);

  const { checkCouponRes, isLoading, error } = useSelector((state) => state.CouponSlice); 
  
  console.log("___applyCheckoutRes:", checkCouponRes);

  let checkCouponResData = [];

  useEffect(() => {
    if (!loading) {
      if (checkCouponRes) {
        if (checkCouponRes.status) {
          setCouponValidationMsg(checkCouponRes.message);
          notify(checkCouponRes.message, "success");
        } else {
          setCouponValidationMsg(checkCouponRes.message);
          notify(checkCouponRes.message, "error");
        }
      }
    }
  }, [loading, checkCouponRes, localStorage.getItem("i18nextLng")])

  return [checkCouponHandler, checkCouponRes, couponValidationMsg]
}


export default useCheckCoupon;