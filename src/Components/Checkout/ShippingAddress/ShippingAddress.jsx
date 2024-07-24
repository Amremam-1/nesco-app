import { useTranslation } from "react-i18next";
import Input from "../../Auth/Input/Input";
import styles from "./styles.module.scss"
import Select from "../../Utils/Select/Select";
import useGetAllCities from "../../../hooks/userProfile/useGetAllCities";
import useAddUpdateAddress from "../../../hooks/shipping/useAddUpdateAddress";
import Spinner from "../../Utils/Spinner/Spinner";

const ShippingAddress = ({shippingAddress, shippingCity}) => {
  const { t, i18n } = useTranslation();

  const [
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
    isLoadingAddress,
    errorAddress
  ] = useAddUpdateAddress(shippingAddress, shippingCity);


  return (
    <div className={styles.shippingAddress}>
      {isLoadingAddress && <Spinner custom={true} />}
      {errorAddress && <p>Error: {errorAddress.message}</p>}
      <h4 className={styles.titleSm}>{t("account-shippingDetails")}</h4>
      <form onSubmit={onSubmit} className={styles.addressForm}>
        <label className={styles.title}>{t("account-myAddresses-deliveryInfo")}</label>
        <div className={styles.inputsBox}>
          <Select
            name="city"
            value={city}
            onChange={onChangeCity}
            onBlur={onBlurCity}
            errorMsg={cityError}
            shippingCity={shippingCity}
          />

          <Input 
            name="building"
            value={building}
            onChange={onChangeBuilding}
            onBlur={onBlurBuilding}
            errorMsg={buildingError}
            inputType="text"
            placeHolder={t("account-myAddresses-building")}
          />
          <Input 
            name="floor"
            value={floor}
            onChange={onChangeFloor}
            onBlur={onBlurFloor}
            errorMsg={floorError}
            inputType="text"
            placeHolder={t("account-myAddresses-floor")}
          />
          <Input 
            name="flat"
            value={flat}
            onChange={onChangeFlat}
            onBlur={onBlurFlat}
            errorMsg={flatError}
            inputType="text"
            placeHolder={t("account-myAddresses-flat")}
          />
          <Input 
            name="street"
            value={street}
            onChange={onChangeStreet}
            onBlur={onBlurStreet}
            errorMsg={streetError}
            inputType="text"
            placeHolder={t("account-myAddresses-street")}
          />
          <Input 
            name="state"
            value={state}
            onChange={onChangeState}
            onBlur={onBlurState}
            errorMsg={stateError}
            inputType="text"
            placeHolder={t("account-myAddresses-state")}
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
            name="phone"
            value={phone}
            onChange={onChangePhone}
            onBlur={onBlurPhone}
            errorMsg={phoneError}
            inputType="text"
            placeHolder={t("account-myAddresses-phone")}
          />

          <Input 
            name="note"
            value={note}
            onChange={onChangeNote}
            onBlur={onBlurNote}
            errorMsg={noteError}
            inputType="text"
            placeHolder={t("account-myAddresses-note")}
            isTextArea={true}
            rows={3}
          />
        </div>
        {/* <div className={styles.inputsBox2}>
        </div> */}

        <button type="submit" className={styles.sendBtn}>{t("account-save")}</button>
      </form>
    </div>
  )
}

export default ShippingAddress