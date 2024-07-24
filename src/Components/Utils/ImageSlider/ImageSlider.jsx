import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { createArray } from "../../../utils/usefulFunctions";

const ImageSlider = ({ imagesList }) => {
  const [count, setCount] = useState(0);
  const imagesArray = createArray(imagesList.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % imagesList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={styles.imageSlider}>
      <img src={process.env.PUBLIC_URL + `/images/productSlider/${imagesList[count].img}`} alt="" />
      <div className={styles.dots}>
        {
          imagesArray.map((img) => (
            <span onClick={() => setCount(+img -1)} key={img} className={styles.dot}></span>
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider