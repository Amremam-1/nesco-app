import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { updateUserProfile } from "../../redux/thunkActions/userActions";
import useGetUserProfile from "../userProfile/useGetUserProfile";


const useAddAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiToken = Cookies.get("api_token");

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [updateProfileSuccess, setUpdateProfileSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEditData, setUserEditData] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);

  const showAddFormHandler = () => {
    setShowAddForm(!showAddForm);
  }


  // 1-First Get all user addresses and update with the new one
  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress,  isLoadingGetUser] = useGetUserProfile();

  const [allUserData, setallUserData] = useState([]);
  const [addressArray, setAddressArray] = useState(getUserProfileResUserAddress);

  console.log("+=+=+=+=+=+=+=+=+=+=+ getUserProfileResUser: ", getUserProfileResUser);
  console.log("+=+=+=+=+=+=+=+=+=+=+ getUserProfileResUserAddress: ", getUserProfileResUserAddress);
  console.log("******************************  allUserData:", allUserData);
  console.log("******************************  addressArray:", addressArray);

  const myAddressesSchema = Yup.object().shape({
    addressAlias: Yup.string().required('Address alias/Tag is required'),
    phone: Yup.number().required('Mobile number is required'),
    addressDetails: Yup.string().required('First address is required'),
    postalCode: Yup.number(),
    city: Yup.string().required('City name is required'),
    note: Yup.string()
  });
  

  const formik = useFormik({
    initialValues: {
      addressAlias: '',
      phone: '',
      addressDetails: '',
      postalCode: '',
      city: '',
      note: '',
    },
    validationSchema: myAddressesSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      onSubmitForm(values);
    },
  });


  let addressAlias = formik.values.addressAlias;
  let addressAliasError = formik.touched.addressAlias && formik.errors.addressAlias ? formik.errors.addressAlias : null;
  let onChangeAddressAlias = formik.handleChange;
  let onBlurAddressAlias = formik.handleBlur;

  let phone = formik.values.phone;
  let phoneError = formik.touched.phone && formik.errors.phone ? formik.errors.phone : null;
  let onChangePhone = formik.handleChange;
  let onBlurPhone = formik.handleBlur;

  let addressDetails = formik.values.addressDetails;
  let addressDetailsError = formik.touched.addressDetails && formik.errors.addressDetails ? formik.errors.addressDetails : null;
  let onChangeaddressDetails = formik.handleChange;
  let onBluraddressDetails = formik.handleBlur;

  let postalCode = formik.values.postalCode;
  let postalCodeError = formik.touched.postalCode && formik.errors.postalCode ? formik.errors.postalCode : null;
  let onChangePostalCode = formik.handleChange;
  let onBlurPostalCode = formik.handleBlur;

  let city = formik.values.city;
  let cityError = formik.touched.city && formik.errors.city ? formik.errors.city : null;
  let onChangeCity = formik.handleChange;
  let onBlurCity = formik.handleBlur;

  let note = formik.values.note;
  let noteError = formik.touched.note && formik.errors.note ? formik.errors.note : null;
  let onChangeNote = formik.handleChange;
  let onBlurNote = formik.handleBlur;


  let onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    console.log("______0______DISPATCHIN")
    const myAddressesData = {
      "alias": values.addressAlias,
      "details": values.addressDetails,
      "phone": values.phone,
      "city": values.city,
      "postal_code": values.postalCode,
      "note": values.note
    }

    // ----------------------------------------------------------------------------
    // To Add New Address:
    //   1-Git user profile data
    //   2-Git last address array if exist
    //   3-dispatch update user profile with: 
    //       user profile data & last address array.push(new address)
    
    let profileData;
    if (getUserProfileResUserAddress && getUserProfileResUserAddress.length > 0) {
      profileData = {
        "name": getUserProfileResUser.name,
        "email": getUserProfileResUser.email,
        "password": "123456789",
        "mobile": getUserProfileResUser.mobile,
        "address": [...getUserProfileResUserAddress, myAddressesData]
      }
    } else {
      profileData = {
        "name": getUserProfileResUser.name,
        "email": getUserProfileResUser.email,
        "password": "123456789",
        "mobile": getUserProfileResUser.mobile,
        "address": [myAddressesData]
      }
    }
    
    
    console.log("______1______DISPATCHIN")
    if (apiToken) {
      setLoading(true);
      console.log("______2______DISPATCHIN")
      await dispatch(updateUserProfile(profileData));
      setLoading(false);
    } else {
      console.log("______3______DISPATCHIN")
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
    showAddForm,
    showAddFormHandler,
    addressAlias,
    addressAliasError,
    onChangeAddressAlias,
    onBlurAddressAlias,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    addressDetails,
    addressDetailsError,
    onChangeaddressDetails,
    onBluraddressDetails,
    postalCode,
    postalCodeError,
    onChangePostalCode,
    onBlurPostalCode,
    city,
    cityError,
    onChangeCity,
    onBlurCity,
    note,
    noteError,
    onChangeNote,
    onBlurNote,
    onSubmit
  ]
}

export default useAddAddress;