import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { applyCheckout } from "../../redux/thunkActions/checkoutActions";


const useApplyCheckout = (checkoutData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showApplyCheckoutPopup, setShowApplyCheckoutPopup] = useState(false);

  const apiToken = Cookies.get("api_token");

  console.log("_______________(C)_____________ checkoutData: ", checkoutData);
  const applyCheckoutHandler = async (dataPassed) => {
    console.log("_____(***)_____ dataPassed: ", dataPassed)
    if (apiToken) {
      setLoading(true);
      await dispatch(applyCheckout(dataPassed));
      setLoading(false);
    } else {
      setShowApplyCheckoutPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  const { applyCheckoutRes, isLoading, error } = useSelector((state) => state.CheckoutSlice); 
  
  console.log("___applyCheckoutRes:", applyCheckoutRes);
  // console.log("___applyCheckoutRes.data:", applyCheckoutRes.data);
  // console.log("___applyCheckoutRes.data.details:", applyCheckoutRes.data.details);

  let applyCheckoutResData = [];
  let applyCheckoutResDetails = [];
  let applyCheckSuccess = ""

  if (applyCheckoutRes) {
    if (applyCheckoutRes.status) {
      if (applyCheckoutRes.data) {
        applyCheckoutResData = applyCheckoutRes.data;
        if (applyCheckoutRes.data.details) {
          applyCheckoutResDetails = applyCheckoutRes.data.details;
        }
      }
    }
  }


  // useEffect(() => {
  //   if (!loading) {
  //     if (applyCheckoutRes) {
  //       if (applyCheckoutRes.status) {
  //         applyCheckSuccess = applyCheckoutRes.message;
  //         if (applyCheckoutRes.data) {
  //           applyCheckoutResData = applyCheckoutRes.data;
  //           if (applyCheckoutRes.data.details) {
  //             applyCheckoutResDetails = applyCheckoutRes.data.details;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }, [loading, applyCheckoutRes])

  return [
    applyCheckoutHandler,
    applyCheckoutRes,
    applyCheckoutResData,
    applyCheckoutResDetails,
    showApplyCheckoutPopup,
    applyCheckSuccess
  ]
}


export default useApplyCheckout;