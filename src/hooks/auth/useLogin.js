import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { useState } from "react";
import notify from "../notify/useNotification";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errMsgPopUp, setErrMsgPopUp] = useState("");
  const [successMsgPopUp, setSuccessMsgPopUp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let email;
  let password;
  let emailError;
  let passwordError;
  let onChangeEmail;
  let onBlurEmail;
  let onChangePassword;
  let onBlurPassword;
  let onSubmit;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;
  password = formik.values.password;
  passwordError = formik.touched.password && formik.errors.password ? formik.errors.password : null;
  onChangePassword = formik.handleChange;
  onBlurPassword = formik.handleBlur;
  onSubmit = formik.handleSubmit;


  const { signIn, isLoading, error } = useSelector((state) => state.authSlice);

  const onSubmitForm = async (values) => {

    // alert(JSON.stringify(values, null, 2));
    const loginData = {
      email: values.email,
      password: values.password,
    }
    console.log("loginData: ", loginData);
    setLoading(true);
    dispatch(logIn(loginData));
    setLoading(false);
  };


  console.log("signIn:_____", signIn);
  useEffect(() => {
    if (signIn) {
      if (signIn.status) {
        if (signIn.user.api_token) {
          setIsLoggedIn(true);
        } 
      }
    }
  }, [signIn])

  useEffect(() => {
    if (!loading) {
      if (signIn) {
        if (signIn.status) {
          if (signIn.user.api_token) {
            setIsLoggedIn(true);
            
            Cookies.set("api_token", signIn.user.api_token);
            Cookies.set("user_id", signIn.user.id);
            // Cookies.set("userData", JSON.stringify(signIn.user));
            
            localStorage.setItem("api_token", signIn.user.api_token)
            localStorage.setItem("user_id", signIn.user.id);
            // localStorage.setItem("userData", JSON.stringify(signIn.user));
            // localStorage.setItem("device_token", signIn.user.device_token);
  
            notify(signIn.message, "success");

            setTimeout(() => {
              navigate('/');
            }, 3000);
  
          } else {
            Cookies.remove("api_token");
            Cookies.remove("userData");
            // localStorage.removeItem("device_token");
            // localStorage.removeItem("userData");
          }
        } else {
          Cookies.remove("api_token");
          Cookies.remove("userData");

          setErrMsgPopUp(signIn.message);
          notify(signIn.message, "error");
        }
      }
    }
  }, [loading, signIn])


  return [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    errMsgPopUp,
    successMsgPopUp,
    isLoggedIn,
    onSubmit
  ];
}

export default useLogin;





// ------------------------------------------------------------------------


// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logIn } from "../../redux/thunkActions/authActions";
// import { resetSate } from "../../redux/slices/authSlice";

// const useLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const onChangeEmail= (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const validationValues = () => {
//     if (email === "") {
//       setEmailError(" البريد الالكتروني مطلوب");
//       return;
//     }
//     if (password === "") {
//       setPasswordError("كلمة المرور مطلوبة");
//       return;
//     }
//   }

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     validationValues();

//     const loginData = {
//       email,
//       password,
//     }
//     dispatch(logIn(loginData))
//   };

//   const { signIn, isLoading, error } = useSelector((state) => state.authSlice);
  
//   console.log("signIn", signIn);
//   console.log("isLoading", isLoading);
//   console.log("error", error);


//   useEffect(() => {
//     if (isLoading === false) {
//       if (typeof signIn === "object") {
//         if (signIn["token"]) {
//           localStorage.setItem("token", signIn["token"]);
//           localStorage.setItem("userData", JSON.stringify(signIn["data"]));

//           setEmail("")
//           setPassword("")

//           dispatch(resetSate());

//           setTimeout(() => {
//             navigate('/');
//           }, 3000);

//         } else {
//           localStorage.removeItem("token");
//           localStorage.removeItem("userData");
//         }
//         if (signIn["message"] === "Incorrect email or password") {
//           localStorage.removeItem("token");
//           localStorage.removeItem("userData");
//         }
//         if (error) {
//           if (error.code === "ERR_BAD_REQUEST") {
//           }
//         }
//       }
//     }
//   }, [isLoading]);


//   return [
//     email,
//     password,
//     emailError,
//     passwordError,
//     onChangeEmail,
//     onChangePassword,
//     onSubmit
//   ];
// }

// export default useLogin;