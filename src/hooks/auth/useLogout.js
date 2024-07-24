import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/thunkActions/authActions';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import notify from '../notify/useNotification';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errMsgPopUp, setErrMsgPopUp] = useState("");
  const [successMsgPopUp, setSuccessMsgPopUp] = useState("");

  const logOutHandler = () => {
    setLoading(true);
    dispatch(logOut(
      {
        token: Cookies.get("api_token")
      }
    ));
    setLoading(false);
  }

  const { logOutRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("logOutRes__:", logOutRes);

  useEffect(() => {
    if (!loading) {
      if (logOutRes) {
        if (logOutRes.status) {
          Cookies.remove("api_token");
          Cookies.remove("userData");
          localStorage.removeItem("api_token");
          localStorage.removeItem("userData");
          // setSuccessMsgPopUp(logOutRes.message);
          notify(logOutRes.message, "success");
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          // setErrMsgPopUp(logOutRes.message);
          notify(logOutRes.message, "error");
        }
      }
    }
  }, [loading, logOutRes])

  return [ logOutHandler, errMsgPopUp, successMsgPopUp ];
}

export default useLogout;