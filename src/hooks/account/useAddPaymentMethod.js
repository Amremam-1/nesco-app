import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { addPaymentMethod } from "../../redux/thunkActions/paymentMethodActions";


const useAddPaymentMethod = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const showAddFormHandler = () => {
    setShowForm(!showForm);
  }

  const myWalletSchema = Yup.object().shape({
    cardHolderName: Yup.string().required('Card Holder Name is required'),
    cardNumber: Yup.number().required('Card Number is required'),
    month: Yup.string().required('Month is required'),
    year: Yup.number().required('Year is required')
  });


  const formik = useFormik({
    initialValues: {
      cardHolderName: '',
      cardNumber: '',
      month: '',
      year: ''
    },
    validationSchema: myWalletSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  
  let cardHolderName = formik.values.cardHolderName;
  let cardHolderNameError = formik.touched.cardHolderName && formik.errors.cardHolderName ? formik.errors.cardHolderName : null;
  let onChangeCardHolderName = formik.handleChange;
  let onBlurCardHolderName = formik.handleBlur;

  let cardNumber = formik.values.cardNumber;
  let cardNumberError = formik.touched.cardNumber && formik.errors.cardNumber ? formik.errors.cardNumber : null;
  let onChangeCardNumber = formik.handleChange;
  let onBlurCardNumber = formik.handleBlur;

  let month = formik.values.month;
  let monthError = formik.touched.month && formik.errors.month ? formik.errors.month : null;
  let onChangeMonth = formik.handleChange;
  let onBlurMonth = formik.handleBlur;

  let year = formik.values.year;
  let yearError = formik.touched.year && formik.errors.year ? formik.errors.year : null;
  let onChangeYear = formik.handleChange;
  let onBlurYear = formik.handleBlur;

  let onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {

    const myPaymentMethodData = {
      cardHolderName: values.cardHolderName,
      cardNumber: values.cardNumber,
      month: values.month,
      year: values.year
    }


    setLoading(true);
    await dispatch(addPaymentMethod(myPaymentMethodData));
    setLoading(false);
  };

  const { addPayment, isLoading, error } = useSelector(state => state.PaymentSlice);

  
  let addPaymentData = [];
  useEffect(() => {
    if (!loading) {

      if (addPayment) {
        if (addPayment.status) {
          if (addPayment.data) {
            addPaymentData = addPayment.data;
          }
        }
      }
    }
  }, [loading])
  
  // useEffect(() => {
  //   if (!loading) {
  //     if (addPayment && addPayment.status === true) {
  //       // notify("تم اضافة المنتج للعربه بنجاح", "success");
  //       setTimeout(() => {
  //         // window.location.reload(false);
  //         // window.location.href = "/cart";
  //       }, [1500])
  //     } else if (addPayment && addPayment.status === false) {
  //       // notify("قم بتسجيل الدخول اولا", "warn");
  //     } else {
  //       // notify("هناك مشكلة في عملية اضافة المنتج للعربه", "error");
  //     }
  //   }
  // }, [loading])


  return [
    showAddFormHandler,
    showForm,
    cardHolderName,
    cardHolderNameError,
    onChangeCardHolderName,
    onBlurCardHolderName,
    cardNumber,
    cardNumberError,
    onChangeCardNumber,
    onBlurCardNumber,
    month,
    monthError,
    onChangeMonth,
    onBlurMonth,
    year,
    yearError,
    onChangeYear,
    onBlurYear,
    onSubmit,
    addPayment,
    addPaymentData
  ]
}

export default useAddPaymentMethod