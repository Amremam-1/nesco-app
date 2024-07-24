import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const NutritionFacts = ({ subMenu, clickNutritionHandler, isNutritionClicked, mainMenuPath }) => {
  const { t, i18n } = useTranslation();

  return (
    <div id="subMenuDetails" className={styles.subMenuDetails}>
      <div className={styles.title}>
        <h3>{subMenu?.title}</h3>
        <p className={styles.menuItemDescr}>{subMenu?.description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.nutritionalInfo}>
          <div onClick={clickNutritionHandler} className={styles.mainTitle}>
            <h4 className={styles.title}>{t("ourMenu-nutritionFacts")}</h4>
            {isNutritionClicked ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {
            subMenu?.has_nutrition_facts === 1 ? (
              <div className={isNutritionClicked ? styles.table : styles.tableHidden}>
                <h3 className={styles.prodName}>{subMenu?.title}</h3>
                <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts")}</h5>
                <div className={styles.nutInfo}>
                  <div className={styles.mass}>
                    <img width={144} height={132} src={process.env.PUBLIC_URL + "/images/coffee_detail.png"} alt="cup" />
                    <p>{`9oz.`}</p>
                  </div>
                  {subMenu?.nutrition_facts?.serving_size ? (
                    <div className={styles.amountValue}>
                      <span className={styles.amount}>{t("ourMenu-nutritionFacts-servingSize")}</span>
                      <span className={styles.value}>{subMenu?.nutrition_facts?.serving_size}</span>
                    </div>
                  ) : null}
                  {subMenu?.nutrition_facts?.serving_per_container ? (
                    <div className={styles.amountValue}>
                      <span className={styles.amount}>{t("ourMenu-nutritionFacts-servingPerContainer")}</span>
                      <span className={styles.value}>{subMenu?.nutrition_facts?.serving_per_container}</span>
                    </div>
                  ) : null}
                  <h4 className={styles.subTitle}>{t("ourMenu-nutritionFacts-amountPerServing")}</h4>
                  {subMenu?.nutrition_facts?.calories ? (
                    <div className={styles.amountValue}>
                      <span className={styles.amount}>{t("ourMenu-nutritionFacts-calories")}</span>
                      <span className={styles.value}>{subMenu?.nutrition_facts?.calories}</span>
                    </div>
                  ): null}
                  {subMenu?.nutrition_facts?.calories_from_fat !== null ? (
                    <div className={styles.amountValue}>
                      <span className={styles.amount}>{t("ourMenu-nutritionFacts-caloriesFromFat")}</span>
                      <span className={styles.value}>{subMenu?.nutrition_facts?.calories_from_fat}</span>
                    </div>
                  ): null}
                </div>
                <div className={styles.dailyValue}>
                  <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts-dailyValue")}</h5>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    {subMenu?.nutrition_facts?.total_fat ? (
                      <p className={styles.txt}>
                        <span>{t("ourMenu-nutritionFacts-totalFat")}</span>
                        <span>{subMenu?.nutrition_facts?.total_fat}</span>
                      </p>
                    ): null}
                    {/* <span className={styles.percentVal}>{subMenu.nutritionFacts[0].totalFat_daily}</span> */}
                  </div>
                  <div className={styles.content}>
                    <div className={styles.line}>
                      {subMenu?.nutrition_facts?.saturated_fat ? (
                        <p>
                          <span>{t("ourMenu-nutritionFacts-saturatedFat")}</span>
                          <span>{subMenu?.nutrition_facts?.saturated_fat}</span>
                        </p>
                      ): null}
                      {/* <span className={styles.percentVal}>{subMenu.nutritionFacts[0].saturatedFat_daily}</span> */}
                    </div>
                    <div className={styles.line}>
                      {subMenu?.nutrition_facts?.trans_fat ? (
                        <p>
                          <span>{t("ourMenu-nutritionFacts-transFat")}</span>
                          <span>{subMenu?.nutrition_facts?.trans_fat}</span>
                        </p>
                      ): null}
                    </div>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                      {subMenu?.nutrition_facts?.cholesterol ? (
                        <p className={styles.txt}>
                          <span>{t("ourMenu-nutritionFacts-cholesterol")}</span>
                          <span>{subMenu?.nutrition_facts?.cholesterol}</span>
                        </p>
                      ): null}
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                      {subMenu?.nutrition_facts?.sodium ? (
                        <p className={styles.txt}>
                          <span>{t("ourMenu-nutritionFacts-sodium")}</span>
                          <span>{subMenu?.nutrition_facts?.sodium}</span>
                        </p>
                      ): null}
                    {/* <span className={styles.percentVal}>{subMenu.nutritionFacts[0].sodium_daily}</span> */}
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    {subMenu?.nutrition_facts?.total_carbohydrates ? (
                      <p className={styles.txt}>
                        <span>{t("ourMenu-nutritionFacts-totalCarbohydrates")}</span>
                        <span>{subMenu?.nutrition_facts?.total_carbohydrates}</span>
                      </p>
                    ): null}
                    {/* <span className={styles.percentVal}>{subMenu.nutritionFacts[0].totalCarbohydrates_daily}</span> */}
                  </div>
                  <div className={styles.content}>
                    <div className={styles.line}>
                      {subMenu?.nutrition_facts?.dietary_fiber ? (
                        <p>
                          <span>{t("ourMenu-nutritionFacts-dietaryFiber")}</span>
                          <span>{subMenu?.nutrition_facts?.dietary_fiber}</span>
                        </p>
                      ): null}
                      {/* <span className={styles.percentVal}>{subMenu.nutritionFacts[0].dietaryFiber_daily}</span> */}
                    </div>
                    <div className={styles.line}>
                      {subMenu?.nutrition_facts?.total_sugar ? (
                        <p>
                          <span>{t("ourMenu-nutritionFacts-totalSugar")}</span>
                          <span>{subMenu?.nutrition_facts?.total_sugar}</span>
                        </p>
                      ): null}
                    </div>
                    {subMenu?.nutrition_facts?.added_suger === '0' ?(
                      <p className={styles.note}>{t("ourMenu-nutritionFacts-zeroSugar")}</p>
                    ) : null}
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    {subMenu?.nutrition_facts?.protein ? (
                      <p className={styles.txt}>
                        <span>{t("ourMenu-nutritionFacts-protein")}</span>
                        <span>{subMenu?.nutrition_facts?.protein}g</span>
                      </p>
                    ): null}
                  </div>
                </div>
                <div className={styles.smTable}>
                  {subMenu?.nutrition_facts?.iron ? (
                    <div className={styles.head}>
                      <p className={styles.txt}>
                        <span>{t("ourMenu-nutritionFacts-iron")}</span>
                      </p>
                      <span className={styles.percentVal}>{subMenu?.nutrition_facts?.iron}</span>                     
                  </div>
                    ): null}
                </div>
                <div className={styles.smTable}>
                  {subMenu?.nutrition_facts?.calcium ? (
                    <div className={styles.head}>
                      <p className={styles.txt}>
                        <span>{t("ourMenu-nutritionFacts-calcium")}</span>
                      </p>
                      <span className={styles.percentVal}>{subMenu?.nutrition_facts?.calcium}</span>
                    </div>
                  ): null}
                </div>
                <div className={styles.moreInfo}>
                  <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts-moreInfo")}</h5>
                  {subMenu?.nutrition_facts?.more_info ? (
                    <p className={styles.text}>{subMenu?.nutrition_facts?.more_info}</p>
                  ): null}
                  <table className={styles.moreInfoTable}>
                    <tr className={styles.moreInfoTable__head}>
                      <th></th>
                      <th>{t("ourMenu-nutritionFacts-calories2")}</th>
                      <th>2000</th>
                      <th>2500</th>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-totalFat2")}</td>
                      <td>{subMenu?.nutrition_facts?.total_fat_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.total_fat_2000 ? `${subMenu?.nutrition_facts?.total_fat_2000}g` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.total_fat_2000 ? `${subMenu?.nutrition_facts?.total_fat_2500}g` : "..."}</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-satFat")}</td>
                      <td>{subMenu?.nutrition_facts?.sat_fat_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.sat_fat_2000 ? `${subMenu?.nutrition_facts?.sat_fat_2000}g` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.sat_fat_2500 ? `${subMenu?.nutrition_facts?.sat_fat_2500}g` : "..."}</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-cholesterol")}</td>
                      <td>{subMenu?.nutrition_facts?.cholesterol_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.cholesterol_2000 ? `${subMenu?.nutrition_facts?.cholesterol_2000}mg` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.cholesterol_2500 ? `${subMenu?.nutrition_facts?.cholesterol_2500}mg` : "..."}</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-sodium")}</td>
                      <td>{subMenu?.nutrition_facts?.sodium_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.sodium_2000 ? `${subMenu?.nutrition_facts?.sodium_2000}mg` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.sodium_2500 ? `${subMenu?.nutrition_facts?.sodium_2500}mg` : "..."}</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-totalCarbohydrates2")}</td>
                      <td>{subMenu?.nutrition_facts?.total_carbohydrates_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : ""}</td>
                      <td>{subMenu?.nutrition_facts?.total_carbohydrates_fat_2000 ? `${subMenu?.nutrition_facts?.total_carbohydrates_fat_2000}g` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.total_carbohydrates_fat_2500 ? `${subMenu?.nutrition_facts?.total_carbohydrates_fat_2500}g` : "..."}</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-dietaryFiber")}</td>
                      <td>{subMenu?.nutrition_facts?.dietary_fiber_calories === '1' ? t("ourMenu-nutritionFacts-lessThan") : ""}</td>
                      <td>{subMenu?.nutrition_facts?.dietary_fiber_2000 ? `${subMenu?.nutrition_facts?.dietary_fiber_2000}g` : "..."}</td>
                      <td>{subMenu?.nutrition_facts?.dietary_fiber_2500 ? `${subMenu?.nutrition_facts?.dietary_fiber_2500}g` : "..."}</td>
                    </tr>
                  </table>
                </div>
                <div className={styles.allergens}>
                  <h4 className={styles.subTitle}>{t("ourMenu-nutritionFacts-allergens")}</h4>
                  <img width={49} height={49} src={subMenu?.nutrition_facts?.allergens_icon} alt="" />
                  {/* <img width={49} height={49} src={process.env.PUBLIC_URL + `/images/grain.png`} alt="" /> */}
                  <h5>{i18n.dir() === "rtl" ? subMenu?.nutrition_facts?.allergens_ar_title : subMenu?.nutrition_facts?.allergens_en_title}</h5>
                  <p>{i18n.dir() === "rtl" ? subMenu?.nutrition_facts?.allergens_ar_description : subMenu?.nutrition_facts?.allergens_en_description}</p>
                </div>
              </div>
            
            ) : isNutritionClicked && <p className={styles.noInfoFound}>{t("ourMenu-noInfoFound")}</p>
          }
        </div>
        <div className={styles.image}>
          <img src={subMenu?.image} alt={subMenu?.title} />
          {/* <img src={process.env.PUBLIC_URL + `/images/ourmenu/${mainMenuPath}/${subMenu.img}`} alt={subMenu.nameEn} /> */}
        </div>
      </div>
  </div>
  )
}

export default NutritionFacts