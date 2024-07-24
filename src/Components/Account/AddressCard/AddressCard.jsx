import styles from "./styles.module.scss";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useUpdateAddress from "../../../hooks/account/useUpdateAddress";
import { useTranslation } from "react-i18next";
import useRemoveAddress from "../../../hooks/account/useRemoveAddress";
import AddressForm from "../MyAddresses/AddressForm/AddressForm";
import { useState } from "react";
import useAddAddress from "../../../hooks/account/useAddAddress";
import useEditAddress from "../../../hooks/account/useEditAddress";

const AddressCard = ({ userAddress, isForCheckout, isSelectedAddress, handleEditAddress, onSelectAddress }) => {
  const { t, i18n } = useTranslation();
  
  const [
    showEditForm,
    showEditFormHandler,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    handleUpdatedUser
  ] = useEditAddress();


  const editUserAddressHandler = () => {
    console.log("()___________(1)__Edit BTN Clicked");
    handleEditAddress();
    // showEditFormHandler();
    handleUpdatedUser(userAddress);
  }

  // const [updateAddressHandler, updatedAddressData] = useUpdateAddress("addressId");

  const [removeAddressHandler, loadingRemoveAddress] = useRemoveAddress(userAddress.alias);

  return (
    <div className={styles.addressCard}>
      <div className={styles.addressCard__container}>
        <div className={styles.details}>
          <div className={styles.content}>
            <h4 className={styles.alias}>{userAddress.alias}</h4>
            <p className={styles.address}>{userAddress.details}</p>
            <p className={styles.mobNum}>{userAddress.phone}</p>
            <p className={styles.note}>{userAddress.note}</p>
          </div>
          <div className={styles.content}>
            <p className={styles.city}>{userAddress.city}</p>
            <p className={styles.postalCode}>{userAddress.postal_code}</p>
          </div>
        </div>
        <div className={styles.actions}>
          {
            isForCheckout ? (
              <div className={styles.selectAdd}>
                <input
                  onChange={() => onSelectAddress(userAddress)}
                  id="selectAdd"
                  type="radio"
                  name="chooseAddress"
                  checked={isSelectedAddress} 
                />
                <label htmlFor="selectAdd">{t("account-addCard-select")}</label>
              </div>
            ) : null
          }
          <div className={isForCheckout ? styles.btns : styles.btnsEnd}>
            {/* <div onClick={editUserAddressHandler} className={styles.editBtn}>
              <FaEdit />
              <span>{t("account-addCard-edit")}</span>
            </div> */}
            <div onClick={removeAddressHandler} className={styles.removeBtn}>
              <RiDeleteBin5Fill />
              <span>{t("account-addCard-remove")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressCard;