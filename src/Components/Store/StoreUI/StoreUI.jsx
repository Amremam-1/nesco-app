import Header from "../../Home/Header/Header";
import StoreSidebar from "../StoreSidebar/StoreSidebar";
import styles from "./styles.module.scss";
// import useScrollTo from "../../../hooks/scroll/useScrollTo";

const StoreUI = ({ children }) => {
  // const [scrollPosition] = useScrollTo();
  
  return (
    <div className={styles.store}>
      <StoreSidebar />
      <div className={styles.store__container}>
        <Header customHeader={true} />
        {/* {scrollPosition > 200 ? <Header fixedHeader={true} customHeader={true} /> : <Header customHeader={true} /> } */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StoreUI;