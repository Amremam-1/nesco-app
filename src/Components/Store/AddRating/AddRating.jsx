import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; import StarIcon from '@mui/icons-material/Star';
import styles from "./styles.module.scss";

const labelsEn = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const labelsAr = {
  0.5: "عديمة الفائدة",
  1: "عديمة الفائدة+",
  1.5: "ضعيف",
  2: "ضعيف+",
  2.5: "حسنًا",
  3: "موافق +",
  3.5: "جيد",
  4: "جيد+",
  4.5: "ممتاز",
  5: "ممتاز+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, i18n.dir() === "rtl" ? ${labelsAr[value]} : ${labelsEn[value]}`;
}

const AddRating = ({onChangeRating, rateValue}) => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(rateValue);
  const [hover, setHover] = useState(-1);

  onChangeRating(value);

  // useEffect(() => {
    
  // }, [])

  return (
    <div className={styles.ratingBox}>
      <Rating
        dir= {i18n.dir()}
        name="hover-feedback"
        precision={0.5}
        size="large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        getLabelText={getLabelText}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<StarIcon style={{ color: "#F2C652"}} fontSize="inherit" />}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <p className={styles.hoveredTxt}>{i18n.dir() === "rtl" ? labelsAr[hover !== -1 ? hover : value] : labelsEn[hover !== -1 ? hover : value]}</p>
      )}
    </div>
  )
}

export default AddRating