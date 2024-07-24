import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";


const useSubscribe = () => {
  // const dispatch = useDispatch();

  // const SubscribeSchema = Yup.object().shape({
  //   email: Yup.string().email('Enter a valid email').required('Email is required'),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     email: ''
  //   },
  //   validationSchema: SubscribeSchema,
  //   validateOnBlur: true,
  //   validateOnChange: true,
  //   onSubmit: values => {
  //     onSubmitForm(values);
  //   },
  // });

  // let email;
  // let emailError;
  // let onChangeEmail;
  // let onBlurEmail;
  // let onSubmit;

  // email = formik.values.email;
  // emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  // onChangeEmail = formik.handleChange;
  // onBlurEmail = formik.handleBlur;
  // onSubmit = formik.handleSubmit;

  // const onSubmitForm = async (values) => {
  //   console.log("loginData: ", {email: values.email});
  //   // dispatch(logIn(loginData));
  // };

  function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  }

  const onBlurEmail = () => {

  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setEmailError("required")
    } else {
      const validateEmail = ValidateEmail(email);
      setEmailError(validateEmail);
    }
    setEmail("");
  }
  
  return [email, emailError, onChangeEmail, onBlurEmail, onSubmit]
}

export default useSubscribe