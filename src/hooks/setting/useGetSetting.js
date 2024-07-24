import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../redux/thunkActions/settingActions";


const useGetSetting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getSetting());
    }

    run();
  }, []);

  

  const { setting, isLoading, error } = useSelector(state => state.SettingSlice);

  let settingData = [];
  let email = "";
  let mobile = "";
  let website_name = "";
  let facebook_link = "";
  let instgram_link = "";
  let twitter_link = "";
  let address = "";
  let whatsapp = "";
  let android_link = "";
  let ios_link = "";
  let policy = "";
  let cities = [];


  if (setting) {
    if (setting.data) {
      settingData = setting.data;
      email = setting.data.email
      mobile = setting.data.mobile
      website_name = setting.data.website_name
      facebook_link = setting.data.facebook_link
      instgram_link = setting.data.instgram_link
      twitter_link = setting.data.twitter_link
      address = setting.data.address
      whatsapp = setting.data.whatsapp
      android_link = setting.data.android_link
      ios_link = setting.data.ios_link
      policy = setting.data.policy
      cities = setting.data.cities
    }
  }
  
  return [
    settingData,
    email,
    mobile,
    website_name,
    facebook_link,
    instgram_link,
    twitter_link,
    address,
    whatsapp,
    android_link,
    ios_link,
    policy,
    cities
  ];
}
export default useGetSetting;