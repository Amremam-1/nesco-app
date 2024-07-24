import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useState } from "react";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2"
import AccountManager from "../AccountManager/AccountManager";
import MyAddresses from "../MyAddresses/MyAddresses";
import MyWallet from "../MyWallet/MyWallet";
import MyOrders from "../MyOrders/MyOrders";
import MyWishList from "../MyWishList/MyWishList";
import MyRatingsReviews from "../MyRatingsReviews/MyRatingsReviews";
import { useEffect } from "react";
import withGuard from "../../Utils/withGuard/withGuard";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../../redux/thunkActions/userActions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import useGetUserProfile from "../../../hooks/userProfile/useGetUserProfile";

const AccountTabs = ({ clickedLink }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const accountManagerTab = t("account-accountManagerTab");
  const myAddressesTab = t("account-myAddressesTab");
  const myWalletTab = t("account-myWalletTab");
  const myOrdersTab = t("account-myOrdersTab");
  const myWishListTab = t("account-myWishListTab");
  const myRatingsReviewsTab = t("account-myRatingsReviewsTab");

  const [clickedTabTitle, setClickedTabTitle] = useState(accountManagerTab);
  const [showTabs, setShowTabs] = useState(false);
  const [isManageAccount, setIsManageAccount] = useState(true);
  const [isMyAddresses, setIsMyAddresses] = useState(false);
  const [isMyWallet, setIsMyWallet] = useState(false);
  const [isMyOrders, setIsMyOrders] = useState(false);
  const [isMyWishList, setIsMyWishList] = useState(false);
  const [isMyRatingsReviews, setIsMyRatingsReviews] = useState(false);


  useEffect(() => {
    setClickedTabTitle(accountManagerTab);

    const run = async () => {
      await dispatch(getUserProfile({
        "token": Cookies.get("api_token")
      }));
    }

    run();
  }, [t, accountManagerTab, localStorage.getItem("i18nextLng")])

  // dispatch(getUserProfile({
  //   "token": Cookies.get("api_token")
  // }));



  const accountManagerHandler = async (val) => {
    // window.location.href = "/store/account";

    navigate('/store/account');
    
    setClickedTabTitle(val);
    setIsManageAccount(true);
    setIsMyAddresses(false);
    setIsMyWallet(false);
    setIsMyOrders(false);
    setIsMyWishList(false);
    setIsMyRatingsReviews(false);
    setShowTabs(false);
  }

  const myAddressesHandler = (val) => {
    // window.location.href = "/store/account/addresses";
    navigate('/store/account/addresses');

    setClickedTabTitle(val);
    setIsManageAccount(false);
    setIsMyAddresses(true);
    setIsMyWallet(false);
    setIsMyOrders(false);
    setIsMyWishList(false);
    setIsMyRatingsReviews(false);
    setShowTabs(false);
  }

  const myWalletHandler = (val) => {
    // window.location.href = "/store/account/wallet";
    navigate('/store/account/wallet');

    setClickedTabTitle(val);
    setIsManageAccount(false);
    setIsMyAddresses(false);
    setIsMyWallet(true);
    setIsMyOrders(false);
    setIsMyWishList(false);
    setIsMyRatingsReviews(false);
    setShowTabs(false);
  }

  const myOrdersHandler = (val) => {
    // window.location.href = "/store/account/orders";
    navigate('/store/account/orders');

    setClickedTabTitle(val);
    setIsManageAccount(false);
    setIsMyAddresses(false);
    setIsMyWallet(false);
    setIsMyOrders(true);
    setIsMyWishList(false);
    setIsMyRatingsReviews(false);
    setShowTabs(false);
  }

  const myWishListHandler = (val) => {
    // window.location.href = "/store/account/wishlist";
    navigate('/store/account/wishlist');

    setClickedTabTitle(val);
    setIsManageAccount(false);
    setIsMyAddresses(false);
    setIsMyWallet(false);
    setIsMyOrders(false);
    setIsMyWishList(true);
    setIsMyRatingsReviews(false);
    setShowTabs(false);
  }

  const myRatingsReviewsHandler = (val) => {
    // window.location.href = "/store/account/ratings-reviews";
    navigate('/store/account/ratings-reviews');

    setClickedTabTitle(val);
    setIsManageAccount(false);
    setIsMyAddresses(false);
    setIsMyWallet(false);
    setIsMyOrders(false);
    setIsMyWishList(false);
    setIsMyRatingsReviews(true);
    setShowTabs(false);
  }

  useEffect(() => {
    if (clickedLink === "addresses") {
      // myAddressesHandler(myAddressesTab);
      setClickedTabTitle(accountManagerTab);
      setIsManageAccount(false);
      setIsMyAddresses(true);
      setIsMyWallet(false);
      setIsMyOrders(false);
      setIsMyWishList(false);
      setIsMyRatingsReviews(false);
      setShowTabs(false);
    }
    if (clickedLink === "wallet") {
      // myWalletHandler(myWalletTab);
      setClickedTabTitle(myWalletTab);
      setIsManageAccount(false);
      setIsMyAddresses(false);
      setIsMyWallet(true);
      setIsMyOrders(false);
      setIsMyWishList(false);
      setIsMyRatingsReviews(false);
      setShowTabs(false);
    }
    if (clickedLink === "orders") {
      // myOrdersHandler(myOrdersTab);
      setClickedTabTitle(myOrdersTab);
      setIsManageAccount(false);
      setIsMyAddresses(false);
      setIsMyWallet(false);
      setIsMyOrders(true);
      setIsMyWishList(false);
      setIsMyRatingsReviews(false);
      setShowTabs(false);
    }
    if (clickedLink === "wishlist") {
      // myWishListHandler(myWishListTab);
      setClickedTabTitle(myWishListTab);
      setIsManageAccount(false);
      setIsMyAddresses(false);
      setIsMyWallet(false);
      setIsMyOrders(false);
      setIsMyWishList(true);
      setIsMyRatingsReviews(false);
      setShowTabs(false);
    }
    if (clickedLink === "ratings-reviews") {
      // myRatingsReviewsHandler(myRatingsReviewsTab);
      setClickedTabTitle(myRatingsReviewsTab);
      setIsManageAccount(false);
      setIsMyAddresses(false);
      setIsMyWallet(false);
      setIsMyOrders(false);
      setIsMyWishList(false);
      setIsMyRatingsReviews(true);
      setShowTabs(false);
    }
  }, [])

  return (
    <section className={styles.accountTabs}>
      <div className={styles.accountTabs__container}>
        <div className={styles.title}>
          <h2>{t("account-myAccount")}</h2>
        </div>
        <div className={styles.accountHead}>
          <div onClick={() => setShowTabs(!showTabs)} className={styles.showTabsIcon}>
            <h3>{clickedTabTitle}</h3>
            <button>
              {showTabs ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />}
            </button>
          </div>

          <div className={showTabs ? styles.tabs : styles.tabsHidden}>
            <h3 onClick={(val) => accountManagerHandler(accountManagerTab)} className={isManageAccount ? styles.tabActive : styles.tab}>{accountManagerTab}</h3>
            {/* <h3 onClick={(val) => myAddressesHandler(myAddressesTab)} className={isMyAddresses ? styles.tabActive : styles.tab}>{myAddressesTab}</h3> */}
            {/* <h3 onClick={(val) => myWalletHandler(myWalletTab)} className={isMyWallet ? styles.tabActive : styles.tab}>{myWalletTab}</h3> */}
            <h3 onClick={(val) => myOrdersHandler(myOrdersTab)} className={isMyOrders ? styles.tabActive : styles.tab}>{myOrdersTab}</h3>
            <h3 onClick={(val) => myWishListHandler(myWishListTab)} className={isMyWishList ? styles.tabActive : styles.tab}>{myWishListTab}</h3>
            <h3 onClick={(val) => myRatingsReviewsHandler(myRatingsReviewsTab)} className={isMyRatingsReviews ? styles.tabActive : styles.tab}>{myRatingsReviewsTab}</h3>
          </div>
        </div>
        <div className={styles.accountBody}>
          {isManageAccount ? <AccountManager /> : null}
          {/* {isMyAddresses ? <MyAddresses /> : null} */}
          {/* {isMyWallet ? <MyWallet /> : null} */}
          {isMyOrders ? <MyOrders /> : null}
          {isMyWishList ? <MyWishList /> : null}
          {isMyRatingsReviews ? <MyRatingsReviews /> : null}
        </div>
      </div>
    </section>
  )
}

export default AccountTabs;
// export default withGuard(AccountTabs);