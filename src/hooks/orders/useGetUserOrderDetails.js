import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserOrderDetails, getUserOrders } from "../../redux/thunkActions/userOrdersActions";


const useGetUserOrderDetails = (id) => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserOrderDetails(id));
    }
    run();
  }, [localStorage.getItem("i18nextLng")]);

  

  const { getUserOrderDetailsRes, isLoading, error } = useSelector(state => state.UserOrdersSlice);
  console.log("____________ getUserOrderDetailsRes: ", getUserOrderDetailsRes);


  const [invoiceDetails, setInvoiceDetails] = useState([]);
  const [invoiceDetailsMessage, setInvoiceDetailsMessage] = useState("");

  // let productData = [];
  // let productDetails = [];
  // let productInCart = [];



  useEffect(() => {
    if (getUserOrderDetailsRes) {
      if (getUserOrderDetailsRes.status) {
        if (getUserOrderDetailsRes.message) {
          setInvoiceDetailsMessage(getUserOrderDetailsRes.message)
        }
        if (getUserOrderDetailsRes.invoice) {
          setInvoiceDetails(getUserOrderDetailsRes.invoice)
        }
      }
    }
  }, [isLoading, getUserOrderDetailsRes, invoiceDetails, invoiceDetailsMessage, localStorage.getItem("i18nextLng")])


  
  return [invoiceDetails, invoiceDetailsMessage, isLoading, error];
}

export default useGetUserOrderDetails