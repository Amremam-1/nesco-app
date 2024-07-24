import Input from "../../Auth/Input/Input";
import styles from "./styles.module.scss";
import { BiPlus } from "react-icons/bi";
import AddressCard from "../AddressCard/AddressCard";
import { useTranslation } from "react-i18next";
import AddressForm from "./AddressForm/AddressForm";
import useGetUserProfile from "../../../hooks/userProfile/useGetUserProfile";
import { useEffect, useState } from "react";
import AddressEditForm from "./AddressEditForm/AddressEditForm";
import { useSelector } from "react-redux";
import useGetUserState from "../../../hooks/userProfile/useGetUserState";

const MyAddresses = () => {
  const { t, i18n } = useTranslation();

  // const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress,  isLoadingGetUser] = useGetUserProfile();

  // console.log("____()_________ getUserProfileResUser: ", getUserProfileResUser);
  // console.log("____()_________ getUserProfileResUserAddress: ", getUserProfileResUserAddress);
  // console.log("____()_________ isLoadingGetUser: ", isLoadingGetUser);



  const [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoadingGetUser] = useGetUserState()

  // useEffect(() => {

  // }, [isLoadingGetUser]);

  const [showUpdateAddForm, setShowUpdateAddForm] = useState(false);
  // const [updatedUser, setUpdatedUser] = useState();
  const handleEditAddress = (userAddress) => {
    setShowUpdateAddForm(true);
    console.log("()___________(2)__Edit Form Displayed");
    // setUpdatedUser(userAddress);
    // setTimeout(() => {
    // }, [2000])
  };

  return (
    <div className={styles.myAddresses}>
      <div className={styles.myAddresses__container}>
        <h3 className={styles.title}>{t("account-myAddresses-myAdd")}</h3>
        <div className={styles.savedAddresses}>
          {
            getUserProfileResUserAddress?.length > 0 ? (
              getUserProfileResUserAddress?.map((item, index) => (
                <AddressCard handleEditAddress={handleEditAddress} userAddress={item} key={index} />
              ))
            ) : (
                <div className={styles.notFound}>
                  <p>{t("account-myAddresses-noAddress")}</p>
              </div>
            )
          }
        </div>
        {
          showUpdateAddForm ? <AddressEditForm showUpdateAddForm={showUpdateAddForm} /> : <AddressForm />
        }
      </div>
    </div>
  )
}

export default MyAddresses;