import React from 'react'
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import LoginFirstPage from '../../../Pages/LoginFirstPage/LoginFirstPage';

const withGuard = (Component) => {
  const Wrapper = (props) => {
    // const { signIn, isLoading, error } = useSelector((state) => state.authSlice);
    const apiToken = Cookies.get("api_token");

    return apiToken ? <Component {...props} /> : <LoginFirstPage />
  }
  return Wrapper;
}

export default withGuard;