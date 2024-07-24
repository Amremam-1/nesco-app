import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { useState } from "react";
import notify from "../notify/useNotification";

const useFranchising = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  const FranchisingSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    IDNumber: Yup.string().required('ID Number is required'),
    nationality: Yup.string().required('Nationality is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    educQualification: Yup.string().required('Educational qualification is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      IDNumber: '',
      nationality: '',
      dateOfBirth: '',
      educQualification: ''
    },
    validationSchema: FranchisingSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let fullName;
  let fullNameError;
  let onChangeFullName;
  let onBlurFullName;

  let IDNumber;
  let IDNumberError;
  let onChangeIDNumber;
  let onBlurIDNumber;

  let nationality;
  let nationalityError;
  let onChangeNationality;
  let onBlurNationality;

  let dateOfBirth;
  let dateOfBirthError;
  let onChangeDateOfBirth;
  let onBlurDateOfBirth;

  let educQualification;
  let educQualificationError;
  let onChangeEducQualification;
  let onBlurEducQualification;

  let onSubmit;

  fullName = formik.values.fullName;
  fullNameError = formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : null;
  onChangeFullName = formik.handleChange;
  onBlurFullName = formik.handleBlur;

  IDNumber = formik.values.IDNumber;
  IDNumberError = formik.touched.IDNumber && formik.errors.IDNumber ? formik.errors.IDNumber : null;
  onChangeIDNumber = formik.handleChange;
  onBlurIDNumber = formik.handleBlur;

  nationality = formik.values.nationality;
  nationalityError = formik.touched.nationality && formik.errors.nationality ? formik.errors.nationality : null;
  onChangeNationality = formik.handleChange;
  onBlurNationality = formik.handleBlur;

  dateOfBirth = formik.values.dateOfBirth;
  dateOfBirthError = formik.touched.dateOfBirth && formik.errors.dateOfBirth ? formik.errors.dateOfBirth : null;
  onChangeDateOfBirth = formik.handleChange;
  onBlurDateOfBirth = formik.handleBlur;

  educQualification = formik.values.educQualification;
  educQualificationError = formik.touched.educQualification && formik.errors.educQualification ? formik.errors.educQualification : null;
  onChangeEducQualification = formik.handleChange;
  onBlurEducQualification = formik.handleBlur;
  
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




  return [
    fullName,
    fullNameError,
    onChangeFullName,
    onBlurFullName,
    IDNumber,
    IDNumberError,
    onChangeIDNumber,
    onBlurIDNumber,
    nationality,
    nationalityError,
    onChangeNationality,
    onBlurNationality,
    dateOfBirth,
    dateOfBirthError,
    onChangeDateOfBirth,
    onBlurDateOfBirth,
    educQualification,
    educQualificationError,
    onChangeEducQualification,
    onBlurEducQualification,
    onSubmit
  ];
}

export default useFranchising