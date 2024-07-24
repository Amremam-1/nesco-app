import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../notify/useNotification';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { trackOrder } from '../../redux/thunkActions/userOrdersActions';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";

const useTrackOrder = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);


  const TrackOrderSchema = Yup.object().shape({
    serialNumber: Yup.string().required('Serial number is required'),
  });

  const formik = useFormik({
    initialValues: {
      serialNumber: '',
    },
    validationSchema: TrackOrderSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let serialNumber;
  let onChangeSerialNumber;
  let onBlurSerialNumber;
  let serialNumberError;
  let onSubmit;

  serialNumber = formik.values.serialNumber;
  serialNumberError = formik.touched.serialNumber && formik.errors.serialNumber ? formik.errors.serialNumber : null;
  onChangeSerialNumber = formik.handleChange;
  onBlurSerialNumber = formik.handleBlur;
  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    setLoading(true);
    dispatch(trackOrder({
      serial_number: values.serialNumber
    }));
    setLoading(false);
  };



  const { trackOrderRes, isLoading, error } = useSelector(state => state.UserOrdersSlice);

  console.log("_______( */* )__________ placeOrderRes:", trackOrderRes);

  let invoice_status = {
    nameAr: "",
    nameEn: ""
  };;
  let invoice_message
  let falseMessage;

  if (!loading) {
    if (trackOrderRes) {
      if (trackOrderRes.status === false) {
        // notify(trackOrderRes.message, "success")
        falseMessage = trackOrderRes.message
      } else {
        // notify(trackOrderRes.message, "error");
        invoice_message = trackOrderRes.message
        if (trackOrderRes.invoice_status === "NEW" || trackOrderRes.invoice_status === 1 || trackOrderRes.invoice_status === '1') {
          invoice_status = {
            nameAr: 'جديد',
            nameEn: "NEW"
          }
        } else if (trackOrderRes.invoice_status === "PREPARED_FOR_SHIPPING" || trackOrderRes.invoice_status === 2 || trackOrderRes.invoice_status === '2') {
          invoice_status = {
            nameAr: 'جاهز للشحن',
            nameEn: "PREPARED_FOR_SHIPPING"
          }
        } else if (trackOrderRes.invoice_status === "DELIVERD" || trackOrderRes.invoice_status === 3 || trackOrderRes.invoice_status === '3') {
          invoice_status = {
            nameAr: 'تم التسليم',
            nameEn: "DELIVERD"
          }
        } else if (trackOrderRes.invoice_status === "REFUSED" || trackOrderRes.invoice_status === 4 || trackOrderRes.invoice_status === '4') {
          invoice_status = {
            nameAr: 'تم الرفض',
            nameEn: "REFUSED"
          }
        } else if (trackOrderRes.invoice_status === "CANCELLED" || trackOrderRes.invoice_status === 5 || trackOrderRes.invoice_status === '5') {
          invoice_status = {
            nameAr: 'تم الالغاء',
            nameEn: "CANCELLED"
          }
        }
      }
    }

  }
  return [
    serialNumber,
    onChangeSerialNumber,
    onBlurSerialNumber,
    serialNumberError,
    onSubmit,
    invoice_status,
    invoice_message,
    falseMessage,
    isLoading,
    error
  ]
}


export default useTrackOrder