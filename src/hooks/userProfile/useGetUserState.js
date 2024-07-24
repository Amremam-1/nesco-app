import { useSelector } from 'react-redux';

const useGetUserState = () => {
  const { getUserProfileRes, isLoading, error } = useSelector(state => state.UserSlice);

  console.log("_____====_____getUserProfileRes:", getUserProfileRes);

  let getUserProfileResUser = [];
  let getUserProfileResUserAddress = [];

  if (getUserProfileRes) {
    if (getUserProfileRes.status) {
      if (getUserProfileRes.user) {
        getUserProfileResUser = getUserProfileRes.user
        if (getUserProfileRes.user.address) {
          getUserProfileResUserAddress = getUserProfileRes.user.address;
        }
      } 
    } 
  }

  
  
  return [getUserProfileRes, getUserProfileResUser, getUserProfileResUserAddress, isLoading];
}

export default useGetUserState