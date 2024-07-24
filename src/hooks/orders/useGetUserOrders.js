import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserOrders } from "../../redux/thunkActions/userOrdersActions";


const useGetUserOrders = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserOrders());
    }
    run();
  }, [localStorage.getItem("i18nextLng")]);

  

  const { getUserOrdersRes, isLoading, error } = useSelector(state => state.UserOrdersSlice);
  console.log("____________ getUserOrdersRes: ", getUserOrdersRes);


  const [invoices, setInvoices] = useState([]);
  const [invoiceMessage, setInvoiceMessage] = useState("");

  // let productData = [];
  // let productDetails = [];
  // let productInCart = [];



  useEffect(() => {
    if (getUserOrdersRes) {
      if (getUserOrdersRes.status) {
        if (getUserOrdersRes.message) {
          setInvoiceMessage(getUserOrdersRes.message)
        }
        if (getUserOrdersRes.invoice) {
          setInvoices(getUserOrdersRes.invoice)
        }
      }
    }
  }, [isLoading, getUserOrdersRes, invoices, invoiceMessage, localStorage.getItem("i18nextLng")])


  
  return [invoices, invoiceMessage, isLoading, error];
}
export default useGetUserOrders