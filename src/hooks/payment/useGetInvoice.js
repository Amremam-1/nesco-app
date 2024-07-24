import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getInvoice } from '../../redux/thunkActions/invoiceActions';

const useGetInvoice = (urlParams) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getInvoice(urlParams));
      setLoading(false);
    }

    run();
  }, [])


  const { getInvoiceRes, isLoading, error } = useSelector(state => state.InvoiceSlice);

  console.log("_______( <+---+> )__________ getInvoiceRes:", getInvoiceRes);

  let invoiceObject = {};

  if (!loading) {
    if (getInvoiceRes) {
      if (getInvoiceRes.status) {
        if (getInvoiceRes.invoice) {
          invoiceObject = getInvoiceRes.invoice;
        }
      }
    }
  }
  
  return [invoiceObject, isLoading, error]
}

export default useGetInvoice;