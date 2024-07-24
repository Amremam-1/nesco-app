import { BiPlus } from "react-icons/bi";
import styles from "./styles.module.scss";

const AddNewItem = ({ title, showFormHandler}) => {
  return (
    <div onClick={showFormHandler} className={styles.addNewItem}>
      <BiPlus />
      <h4 className={styles.addTitle}>{title}</h4>
    </div>
  )
}

export default AddNewItem;