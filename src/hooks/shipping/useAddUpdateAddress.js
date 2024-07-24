import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { addUpdateAddress } from "../../redux/thunkActions/shippingAddressActions";
import useGetCartItems from "../cart/useGetCartItems";
import notify from "../notify/useNotification";



const useAddUpdateAddress = (shippingAddress, shippingCity) => {
  // const [
  //   productsInCartArray,
  //   cartItemsData,
  //   cartLength,
  //   isCartEmpty,
  //   cartEmptyMsg,
  //   shippingAddress,
  //   city,
  //   isLoadingCart,
  //   errorCart
  // ] = useGetCartItems();
  console.log("_____(  %   )_______ shippingAddress: ", shippingAddress);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiToken = Cookies.get("api_token");

  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const showAddFormHandler = () => {
    setShowAddForm(!showAddForm);
  }

  const myAddressesSchema = Yup.object().shape({
    city: Yup.string().required('City name is required'),

    building: Yup.number().required('Building is required'),
    floor: Yup.number().required('Floor number is required'),
    flat: Yup.number().required('Flat is required'),
    street: Yup.number().required('Street address is required'),
    state: Yup.string().required('State address is required'),
    postalCode: Yup.number().required('Postal code is required'),
    phone: Yup.number().required('Mobile number is required'),
    note: Yup.string()
  });

  // let initialValues;
  // const [initialValues, setInitialValues] = useState(
  //   {
  //     building: '',
  //     floor: '',
  //     flat: '',
  //     street: '',
  //     state: '',
  //     city: '',
  //     postalCode: '',
  //     phone: '',
  //     note: '',
  //   }
  // );

  // useEffect(() => {
  //   if (shippingAddress) {
  //     // console.log("_____(  %   )_______ shippingAddress: ", shippingAddress)
  //     setInitialValues(
  //       {
  //         building: shippingAddress.building,
  //         floor: shippingAddress.floor,
  //         flat: shippingAddress.flat,
  //         street: shippingAddress.street,
  //         state: shippingAddress.state,
  //         city: '',
  //         postalCode: shippingAddress.postal,
  //         phone: shippingAddress.phone,
  //         note: '',
  //       }
  //     );
  //   }
  // }, [shippingAddress])

  useEffect(() => {
    
  }, [shippingAddress])



  const formik = useFormik({
    initialValues: {
      building: shippingAddress.building,
      floor: shippingAddress.floor,
      flat: shippingAddress.flat,
      street: shippingAddress.street,
      state: shippingAddress.state,
      city: '',
      postalCode: shippingAddress.postal,
      phone: shippingAddress.phone,
      note: shippingAddress.note || '',
    },
    validationSchema: myAddressesSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  
  let building = formik.values.building;
  let buildingError = formik.touched.building && formik.errors.building ? formik.errors.building : null;
  let onChangeBuilding = formik.handleChange;
  let onBlurBuilding = formik.handleBlur;

  let floor = formik.values.floor;
  let floorError = formik.touched.floor && formik.errors.floor ? formik.errors.floor : null;
  let onChangeFloor = formik.handleChange;
  let onBlurFloor = formik.handleBlur;
  
  
  let flat = formik.values.flat;
  let flatError = formik.touched.flat && formik.errors.flat ? formik.errors.flat : null;
  let onChangeFlat = formik.handleChange;
  let onBlurFlat = formik.handleBlur;
  

  let street = formik.values.street;
  let streetError = formik.touched.street && formik.errors.street ? formik.errors.street : null;
  let onChangeStreet = formik.handleChange;
  let onBlurStreet = formik.handleBlur;
  

  let state = formik.values.state;
  let stateError = formik.touched.state && formik.errors.state ? formik.errors.state : null;
  let onChangeState = formik.handleChange;
  let onBlurState = formik.handleBlur;

  let city = formik.values.city;
  let cityError = formik.touched.city && formik.errors.city ? formik.errors.city : null;
  let onChangeCity = formik.handleChange;
  let onBlurCity = formik.handleBlur;
  
  let postalCode = formik.values.postalCode;
  let postalCodeError = formik.touched.postalCode && formik.errors.postalCode ? formik.errors.postalCode : null;
  let onChangePostalCode = formik.handleChange;
  let onBlurPostalCode = formik.handleBlur;

  let phone = formik.values.phone;
  let phoneError = formik.touched.phone && formik.errors.phone ? formik.errors.phone : null;
  let onChangePhone = formik.handleChange;
  let onBlurPhone = formik.handleBlur;
    
  let note = formik.values.note;
  let noteError = formik.touched.note && formik.errors.note ? formik.errors.note : null;
  let onChangeNote = formik.handleChange;
  let onBlurNote = formik.handleBlur;


  let onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    const myAddressesData = {
      "city_id": values.city,
      "address": {
        "building": values.building,
        "floor": values.floor,
        "flat": values.flat,
        "street": values.street,
        "state": values.state,
        "postal": +values.postalCode,
        "phone": values.phone,
        "note": values.note
      }
    }

    console.log("______(=&=)_________ myAddressesData:", myAddressesData)

    if (apiToken) {
      setLoading(true);
      await dispatch(addUpdateAddress(myAddressesData));
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 3000)
    } else {
      setTimeout(() => {
        navigate('/login');
      }, 3000)
    }
  };

  const { addUpdateAddressRes, isLoading, error } = useSelector(state => state.ShippingAddressSlice);

  if (!loading) {
    if (addUpdateAddressRes) {
      if (addUpdateAddressRes.status) {
        notify(addUpdateAddressRes.message, "success");
      }
    }
  }

  console.log("________------___________ addUpdateAddressRes: ", addUpdateAddressRes);

  return [
    showAddForm,
    showAddFormHandler,

    building,
    onChangeBuilding,
    onBlurBuilding,
    buildingError,
    floor,
    onChangeFloor,
    onBlurFloor,
    floorError,
    flat,
    onChangeFlat,
    onBlurFlat,
    flatError,
    street,
    onChangeStreet,
    onBlurStreet,
    streetError,
    state,
    onChangeState,
    onBlurState,
    stateError,
    city,
    cityError,
    onChangeCity,
    onBlurCity,
    postalCode,
    postalCodeError,
    onChangePostalCode,
    onBlurPostalCode,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    note,
    noteError,
    onChangeNote,
    onBlurNote,
    onSubmit,
    isLoading,
    error
  ]
}

export default useAddUpdateAddress