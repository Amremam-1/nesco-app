import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { updateProfile } from "../../redux/thunkActions/accountActions";
import Cookies from "js-cookie";
import useGetUserProfile from "../userProfile/useGetUserProfile";
import { updateUserProfile } from "../../redux/thunkActions/userActions";


const useAccountManager = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiToken = Cookies.get("api_token");
  
  
  
  const [loading, setLoading] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isEmailNotifyChecked, setIsEmailNotifyChecked] = useState(false);
  const [isSMSNotifyChecked, setIsSMSNotifyChecked] = useState(false);


  // ---------------------------------------------------------------------
  // First you need to show current user data for the user if he want to change it.
  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress,  isLoadingGetUser] = useGetUserProfile();


  // ---------------------------------------------------------------------
  // Fill all Input Values with userProfileData

  
  const emailNotifyHandler = () => {
    setIsEmailNotifyChecked(!isEmailNotifyChecked)
  };

  const smsNotifyHandler = () => {
    setIsSMSNotifyChecked(!isSMSNotifyChecked)
  };

  const accountManagerSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    phone: Yup.number().required('Mobile number is required'),
    oldPassword: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length'),
      // .required('Old Password is required'),
    newPassword: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length')
      .required('New Password is required'),
    confirmNewPassword: Yup.string()
      .min(8, 'Confirm Password should be of minimum 8 characters length')
      .max(50, 'Confirm Password should be of maximum 50 characters length')
      .required('Please retype your new password')
      .oneOf([Yup.ref('newPassword')], 'Your New passwords do not match.')
  });

  // Get User Profile Data to be shown when user open his/her profile to updata/not update them
  // From const [userProfileData] = useGetUserProfile();
  // .split(" ")[0]

  const formik = useFormik({
    initialValues: {
      firstName: getUserProfileResUser.name?.split(" ")[0],
      lastName: getUserProfileResUser.name?.split(" ")[1],
      email: getUserProfileResUser.email,
      phone: getUserProfileResUser.mobile,
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
      // firstName: '',
      // lastName: '',
      // email: '',
      // phone: '',
      // oldPassword: '',
      // newPassword: '',
      // confirmNewPassword: ''
    },
    validationSchema: accountManagerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    // onReset: ,
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  // onSubmit: async (values, { resetForm }) => {
  //   await onSubmit(values)
  //   resetForm()
  // }},
  
  let firstName;
  let firstNameError;
  let onChangeFirstName;
  let onBlurFirstName;

  let lastName;
  let lastNameError;
  let onChangeLastName;
  let onBlurLastName;
  
  let email;
  let emailError;
  let onChangeEmail;
  let onBlurEmail;
  
  let phone;
  let phoneError;
  let onChangePhone;
  let onBlurPhone;

  let oldPassword;
  let oldPasswordError;
  let onChangeOldPassword;
  let onBlurOldPassword;

  let newPassword;
  let newPasswordError;
  let onChangeNewPassword;
  let onBlurNewPassword;

  let confirmNewPassword;
  let confirmNewPasswordError;
  let onChangeConfirmNewPassword;
  let onBlurConfirmNewPassword;

  let onSubmit;

  firstName = formik.values.firstName;
  firstNameError = formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null;
  onChangeFirstName = formik.handleChange;
  onBlurFirstName = formik.handleBlur;

  lastName = formik.values.lastName;
  lastNameError = formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null;
  onChangeLastName = formik.handleChange;
  onBlurLastName = formik.handleBlur;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;

  phone = formik.values.phone;
  phoneError = formik.touched.phone && formik.errors.phone ? formik.errors.phone : null;
  onChangePhone = formik.handleChange;
  onBlurPhone = formik.handleBlur;

  oldPassword = formik.values.oldPassword;
  oldPasswordError = formik.touched.oldPassword && formik.errors.oldPassword ? formik.errors.oldPassword : null;
  onChangeOldPassword = formik.handleChange;
  onBlurOldPassword = formik.handleBlur;

  newPassword = formik.values.newPassword;
  newPasswordError = formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : null;
  onChangeNewPassword = formik.handleChange;
  onBlurNewPassword = formik.handleBlur;

  confirmNewPassword = formik.values.confirmNewPassword;
  confirmNewPasswordError = formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? formik.errors.confirmNewPassword : null;
  onChangeConfirmNewPassword = formik.handleChange;
  onBlurConfirmNewPassword = formik.handleBlur;

  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {

    const accountManagerData = {
      "name": `${values.firstName}${values.lastName}`,
      "email": values.email,
      "mobile": values.phone,
      "password": values.newPassword,
      "address":[
        { "alias": "Home", "details": "Address Home details", "phone": "01125361144", "city": "Egy", "postal_code": "22004", "note": "any note" },
        {"alias":"Work", "details":"Address Work details","phone":"01125361144","city":"Egy","postal_code":"22004","note":"any note"}
      ]
    }
    // Dispatch update-profile
    if (apiToken) {
      setLoading(true);
      await dispatch(updateUserProfile(accountManagerData));
      setLoading(false);
    } else {
      setShowLoginPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };


  const { updateUserProfileRes, isLoading, error } = useSelector((state) => state.UserSlice); 
  
  console.log("___updateUserProfileRes:", updateUserProfileRes)

  let updateMessage = "";
  let updatedUserData;

  useEffect(() => {
    if (!loading) {
      if (updateUserProfileRes) {
        updateMessage = updateUserProfileRes.message
        if (updateUserProfileRes.status) {
          updatedUserData = updateUserProfileRes.user
        }
      }
    }
  }, [loading, updateUserProfileRes])

  return [
    firstName,
    firstNameError,
    onChangeFirstName,
    onBlurFirstName,
    lastName,
    lastNameError,
    onChangeLastName,
    onBlurLastName,
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    oldPassword,
    oldPasswordError,
    onChangeOldPassword,
    onBlurOldPassword,
    newPassword,
    newPasswordError,
    onChangeNewPassword,
    onBlurNewPassword,
    confirmNewPassword,
    confirmNewPasswordError,
    onChangeConfirmNewPassword,
    onBlurConfirmNewPassword,
    isEmailNotifyChecked,
    isSMSNotifyChecked,
    emailNotifyHandler,
    smsNotifyHandler,
    onSubmit,
    updateUserProfileRes,
    updateMessage,
    updatedUserData
  ]
}

export default useAccountManager;