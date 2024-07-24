import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { updateUserProfile } from "../../redux/thunkActions/userActions";
import useGetUserProfile from "../userProfile/useGetUserProfile";
import useGetUserState from "../userProfile/useGetUserState";


const useEditAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiToken = Cookies.get("api_token");

  const [clickedAddress, setClickedAddress] = useState();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [updateProfileSuccess, setUpdateProfileSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEditData, setUserEditData] = useState(null);

  const [showEditForm, setShowEditForm] = useState(false);

  const showEditFormHandler = () => {
    setShowEditForm(prevState => !prevState);
  }


  // 1-First Get all user addresses and update with the new one
  // const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoadingGetUser] = useGetUserProfile();
  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoadingGetUser] = useGetUserState()

  const [allUserData, setallUserData] = useState([]);
  const [addressArray, setAddressArray] = useState(getUserProfileResUserAddress);

  const myAddressesSchema = Yup.object().shape({
    addressAlias: Yup.string().required('Address alias/Tag is required'),
    phone: Yup.number().required('Mobile number is required'),
    addressDetails: Yup.string().required('First address is required'),
    postalCode: Yup.number(),
    city: Yup.string().required('City name is required'),
    note: Yup.string()
  });

  const [initialValues, setInitialValues] = useState(
    {
      addressAlias: '',
      phone: '',
      addressDetails: '',
      postalCode: '',
      city: '',
      note: '',
    }
  );
  
  const handleUpdatedUser = (newData) => {
    setClickedAddress(newData);
    console.log("()___________(3)__handleUpdatedUser(newData)");
    // setUserEditData(newData);
    console.log("___######______#####______newData: ", newData)
    if (newData) {
      
      setInitialValues(
        {
          addressAlias: newData.alias,
          phone: newData.phone,
          addressDetails: newData.details,
          postalCode: newData.postal_code,
          city: newData.city,
          note: newData.note,
        }
      )
      console.log("___######______#####______newData initialValues", initialValues)
      console.log("()___________(4)__initialValues Updated with clicked address");
    }
  }

  useEffect(() => {

  }, [clickedAddress])

  const formik = useFormik({
    initialValues,
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
    // ----------------------------------------------------------------------------
    // To Update Exist Address:
    //   1-Git user profile data
    //   2-Git last address array if exist
    //   3-dispatch update user profile with: 
    //       user profile data & last address array.push(new address)
    const updatedAddress = {
      "alias": values.addressAlias,
      "details": values.addressDetails,
      "phone": values.phone,
      "city": values.city,
      "postal_code": values.postalCode,
      "note": values.note
    }

    
    let filteredUserAddresses;
    if (getUserProfileResUserAddress && getUserProfileResUserAddress.length > 0) {
      // filteredUserAddresses = getUserProfileResUserAddress.filter((item) => item.alias !== addressAlias);
      filteredUserAddresses = getUserProfileResUserAddress.map((item) => {
        console.log("_____(*)___________filteredUserAddresses_item: ", item)
        console.log("_____(*)___________filteredUserAddresses_clickedAddress: ", clickedAddress)
        if (item.alias === clickedAddress.alias) {
          return updatedAddress
        }
        return item;
      });

      console.log("_____(*)___________filteredUserAddresses: ", filteredUserAddresses)

      const profileData = {
        "name": getUserProfileResUser.name,
        "email": getUserProfileResUser.email,
        "password": "123456789",
        "mobile": getUserProfileResUser.mobile,
        "address": filteredUserAddresses
      }
      // setLoadingRemoveAddress(true);
      await dispatch(updateUserProfile(profileData));
      // setLoadingRemoveAddress(false);
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
    showEditForm,
    showEditFormHandler,
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
    onSubmit,
    handleUpdatedUser
  ]
}
export default useEditAddress