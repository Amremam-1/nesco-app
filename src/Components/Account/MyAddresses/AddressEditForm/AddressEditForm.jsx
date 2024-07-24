import { useTranslation } from "react-i18next";
import useAddAddress from "../../../../hooks/account/useAddAddress";
import Input from "../../../Auth/Input/Input";
import AddNewItem from "../../AddNewItem/AddNewItem";
import styles from "./styles.module.scss";
import useEditAddress from "../../../../hooks/account/useEditAddress";
import { useEffect } from "react";

const AddressEditForm = ({showUpdateAddForm}) => {
  const { t, i18n } = useTranslation();

  const [
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
  ] = useEditAddress()


  useEffect(() => {

  }, [showEditForm]);

  return (
    <>
      <h3 className={styles.mainTitle}>{t("account-myAddresses-editAdd")}</h3>
      <form onSubmit={onSubmit} className={showUpdateAddForm ? styles.addressForm : styles.addressFormHidden}>
        <label className={styles.title}>{t("account-myAddresses-addAlias")}</label>
        <div className={styles.inputsBox}>
          <Input 
            name="addressAlias"
            value={addressAlias}
            onChange={onChangeAddressAlias}
            onBlur={onBlurAddressAlias}
            errorMsg={addressAliasError}
            inputType="text"
            placeHolder={t("account-addressAlias")}
          />
        </div>
        <label className={styles.title}>{t("account-myAddresses-deliveryInfo")}</label>
        <div className={styles.inputsBox}>
          <Input 
            name="addressDetails"
            value={addressDetails}
            onChange={onChangeaddressDetails}
            onBlur={onBluraddressDetails}
            errorMsg={addressDetailsError}
            inputType="text"
            placeHolder={t("account-myAddresses-addDetails")}
            isTextArea={true}
            rows={3}
          />
          <Input 
            name="note"
            value={note}
            onChange={onChangeNote}
            onBlur={onBlurNote}
            errorMsg={noteError}
            inputType="text"
            placeHolder={t("account-myAddresses-note")}
            // forLogin={true}
            // fullWidth={true}
            isTextArea={true}
            rows={3}
          />
          <Input 
            name="phone"
            value={phone}
            onChange={onChangePhone}
            onBlur={onBlurPhone}
            errorMsg={phoneError}
            inputType="text"
            placeHolder={t("account-phone")}
          />
          <Input 
            name="postalCode"
            value={postalCode}
            onChange={onChangePostalCode}
            onBlur={onBlurPostalCode}
            errorMsg={postalCodeError}
            inputType="text"
            placeHolder={t("account-myAddresses-postalCode")}
          />
          <Input 
            name="city"
            value={city}
            onChange={onChangeCity}
            onBlur={onBlurCity}
            errorMsg={cityError}
            inputType="text"
            placeHolder={t("account-myAddresses-city")}
          />
        </div>
        {/* <div className={styles.inputsBox2}>
        </div> */}

        <button type="submit" className={styles.sendBtn}>{t("account-save")}</button>
      </form>
    </>
  )
}

export default AddressEditForm