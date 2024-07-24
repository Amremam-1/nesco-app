import { FaChevronLeft } from "react-icons/fa6";
import styles from "./styles.module.scss";
import AddressCard from "../../Account/AddressCard/AddressCard";
import AddNewItem from "../../Account/AddNewItem/AddNewItem";
import { useTranslation } from "react-i18next";
import Input from "../../Auth/Input/Input";
import useAddAddress from "../../../hooks/account/useAddAddress";
import useApplyCheckout from "../../../hooks/checkout/useApplyCheckout";
import { useState } from "react";
import useCheckCoupon from "../../../hooks/coupon/useCheckCoupon";
import AddressForm from "../../Account/MyAddresses/AddressForm/AddressForm";
import useGetUserProfile from "../../../hooks/userProfile/useGetUserProfile";
import useGetUserState from "../../../hooks/userProfile/useGetUserState";
import { useEffect } from "react";

const DeliveryAddress = ({ stepProgressHandler }) => {
  const { t, i18n } = useTranslation();
  const [couponID, setCouponID] = useState("");
  const [shippingAddress, setSetshippingAddress] = useState();
  const [checkoutData, setCheckoutData] = useState();

  // const [
  //   showAddForm,
  //   showAddFormHandler,
  //   firstName,
  //   firstNameError,
  //   onChangeFirstName,
  //   onBlurFirstName,
  //   lastName,
  //   lastNameError,
  //   onChangeLastName,
  //   onBlurLastName,
  //   email,
  //   emailError,
  //   onChangeEmail,
  //   onBlurEmail,
  //   phone,
  //   phoneError,
  //   onChangePhone,
  //   onBlurPhone,
  //   address1,
  //   address1Error,
  //   onChangeAddress1,
  //   onBlurAddress1,
  //   address2,
  //   address2Error,
  //   onChangeAddress2,
  //   onBlurAddress2,
  //   postalCode,
  //   postalCodeError,
  //   onChangePostalCode,
  //   onBlurPostalCode,
  //   city,
  //   cityError,
  //   onChangeCity,
  //   onBlurCity,
  //   note,
  //   noteError,
  //   onChangeNote,
  //   onBlurNote,
  //   onSubmit
  // ] = useAddAddress();

  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoadingGetUser] = useGetUserState();
  const [checkCouponHandler, checkCouponRes, couponValidationMsg] = useCheckCoupon(couponID);
  // const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoadingGetUser] = useGetUserProfile();
  
  console.log("_________^^________ getUserProfileResUser:", getUserProfileResUser);
  console.log("_________^^________ getUserProfileResUserAddress:", getUserProfileResUserAddress);

  const selectAddressHandler = (selectedAdd) => {
    console.log("______(S)_______Selected Address: ", selectedAdd);
    
    setSetshippingAddress(selectedAdd);
  }

  const couponHandler = (e) => {
    setCouponID(e.target.value);
  }

  // Three Hooks to get data for checkout api
  // 1-useCheckCoupon
  // 2-useAddAddress
  // 3-useGetUserProfile

  useEffect(() => {
    setCheckoutData({
      name: getUserProfileResUser.name,
      email: getUserProfileResUser.email,
      mobile: getUserProfileResUser.mobile,
      address: shippingAddress,
      city_id: 1,
      coupon: couponID,
    });
    
  }, [getUserProfileResUser, shippingAddress, couponID])
  
  console.log("___++_______++_____ checkoutData:", checkoutData);

  const [
    applyCheckoutHandler,
    applyCheckoutRes,
    applyCheckoutResData,
    applyCheckoutResDetails,
    showApplyCheckoutPopup,
    applyCheckSuccess
  ] = useApplyCheckout(checkoutData);


  console.log("applyCheckoutRes:", applyCheckoutRes)

  const proceedHandler = () => {
    // Get Address and user profile data before applyCheckoutHandler
    applyCheckoutHandler(checkoutData);
    // Before go to next page check first if address selected
    stepProgressHandler();
  }





  console.log(" ## $$ !! checkCouponRes: ", checkCouponRes);

  return (
    <section className={styles.deliveryAddress}>
      <div className={styles.deliveryAddress__container}>
        <div className={styles.chooseDeliveryAddr}>
          {
            getUserProfileResUserAddress?.length > 0 ? (
              getUserProfileResUserAddress?.map((item, index) => (
                <AddressCard
                  key={index} 
                  onSelectAddress={selectAddressHandler}
                  isForCheckout={true}
                  userAddress={item}
                />
              ))
            ) : (
                <div className={styles.notFound}>
                  <p>{t("account-myAddresses-noAddress")}</p>
              </div>
            )
          }
          {/* <AddressCard isForCheckout={true} isSelectedAddress={true} />
          <AddressCard isForCheckout={true} /> */}
        </div>
        <AddressForm />
        <div className={styles.promotion}>
          <label htmlFor="promoInp">{t("shoppingCart-promo-label")}</label>
          <div className={styles.promotionBox}>
            <input
              className={styles.promoInput}
              id="promoInp"
              type="text"
              placeholder={t("shoppingCart-promo-placeholder")} 
              name="couponId"
              onChange={couponHandler}
            />
            <button onClick={checkCouponHandler} className={styles.promoBtn}>{t("shoppingCart-promo-addBtn")}</button>
          </div>
          <div className={styles.couponMsgBox}>
            <p className={styles.couponMsg}>{couponValidationMsg}</p>
          </div>
        </div>
        <button onClick={proceedHandler} className={styles.proceedBtn}>{t("shoppingCart-btns-proceed")}</button>
      </div>
    </section>
  )
}

export default DeliveryAddress