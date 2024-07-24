import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import LocationCard from "./LocationCard/LocationCard";
import { useTranslation } from "react-i18next";
import Select from 'react-select'
import MapComponent from "./GoogleMap/MapComponent";
import { NescoBranches } from "../../../utils/NescoBranches";


const totalBranches = NescoBranches.reduce((a, obj) => a + Object.keys(obj.branches).length, 0);
console.log("totalBranches: ", totalBranches);

// const optionsEn = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const optionsEn1 = NescoBranches.map((item, index) => {
//   return { value: item.nameEn, label: item.nameEn }
// });

// const optionsAr1 = NescoBranches.map((item, index) => {
//   return { value: item.nameEn, label: item.nameAr }
// });

// const optionsEn = [{ value: 'all', label: 'All Stores' }].concat(optionsEn1)
// const optionsAr = [{ value: 'all', label: 'كل الفروع' }].concat(optionsAr1)




const StoreLocator = () => {
  const { t, i18n } = useTranslation();
  
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  // const [selectedOption, setSelectedOption] = useState([]);

  // console.log("selectedOption:", selectedOption.value)

  
  // useEffect(() => {
  //   if (selectedOption?.value !== "all") {
  //     const filteredCity = NescoBranches.filter((item, index) => item.nameEn === selectedOption.value);
  //     setFilteredLocations(filteredCity);
  //   } else {
  //     setFilteredLocations(NescoBranches);
  //   }
  // }, [selectedOption])
  
  const toggle = (i) => {
    // To Close All other Boxs
    if (selected === i) {
      return setSelected(null);
    }
    // To Open only clicked box
    setSelected(i);
  }

  const selectLocationHandler = (e) => {
    if (e.target.value !== 0) {
      const filteredCity = NescoBranches.filter((item, index) => item.nameEn === e.target.value);
      setFilteredLocations(filteredCity);
    }
  };

  const submitLocationForm = (event) => {
    event.preventDefault();
  }

  //   LiveAddress.geocode(address, function(geo) {
  //     alert("The address is at: " + geo.coords);
  // });

  const [clickedBranch, setClickedBranch] = useState([]);
  const [cityBranches, setCityBranches] = useState([]);
  const [mapZoom, setMapZoom] = useState(5);
  const [cityCenter, setCityCenter] = useState([23.689883991493314, 44.90955744913453]);

  const clickBranchHandler = (val) => {
    setClickedBranch(val);
    setCityCenter(val);
    setMapZoom(17);
    window.scrollTo(250,250);
  };

  const cityLocationsHandler = (branches, center) => {
    setCityBranches(branches);
    setCityCenter(center);
    setMapZoom(11);
    window.scrollTo(250,250);
  };

  console.log("___clickedBranch___:", clickedBranch);

  return (
    <section className={styles.storeLocator}>
      <div className={styles.storeLocator__container}>
        <div className="pageTitle">
          <h2>{t("storeLocator-ourStores")}</h2>
        </div>
        <form onSubmit={submitLocationForm} className={styles.locatorForm}>
          <label className={styles.label}>{t("storeLocator-searchIn")}</label>
          <select className={styles.selectCountry}>
            <option value="KSA" defaultChecked>{t("storeLocator-KSA")}</option>
          </select>

          {/* <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={i18n.dir() === "rtl" ? optionsAr : optionsEn} 
            className={styles.customSelect}
            placeholder={t("storeLocator-allStores")}
            classNamePrefix={styles.customSelectInner}
          /> */}

          <select onChange={selectLocationHandler} className={styles.selectCity}>
            <option value={0}>{t("storeLocator-allStores")} ({totalBranches})</option>
            {
              NescoBranches ? (
                NescoBranches.map((city, index) => (
                  <option key={index} value={city.nameEn}>{i18n.dir() === "rtl" ? city.nameAr : city.nameEn} ({city.branches.length})</option>
                ))
              ) : null
            }
          </select>
          {/* <button className={styles.searchBtn}>بحث</button> */}
        </form>
        <ul className={styles.filteredLocations}>
          <div className={styles.list}>
            {
              filteredLocations.length === 0 ? (
                NescoBranches.map((city, index) => (
                  <LocationCard
                    key={city.id} 
                    item={city}
                    index={index}
                    toggle={toggle}
                    selected={selected}
                    clickBranchHandler={clickBranchHandler}
                    cityLocationsHandler={cityLocationsHandler}
                  />
                ))
              ) : filteredLocations.map((city, index) => (
                  <LocationCard
                    key={city.id} 
                    item={city}
                    index={index}
                    toggle={toggle}
                    selected={selected}
                    clickBranchHandler={clickBranchHandler}
                    cityLocationsHandler={cityLocationsHandler}
                  />
              ))
            }
          </div>
          <div className={styles.googleMap}>
            <MapComponent 
              lat={clickedBranch[0]}
              lng={clickedBranch[1]}
              cityBranches={cityBranches}
              mapZoom={mapZoom}
              cityCenter={cityCenter}
            />
          </div>
        </ul>
      </div>
    </section>
  )
}

export default StoreLocator;

// lat={24.701989130674686}
// lng={46.66842149307317}