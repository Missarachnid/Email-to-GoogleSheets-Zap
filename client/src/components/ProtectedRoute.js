import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './Form';


const ProtectedRoute = () => {
  const isAuth = useSelector(state => state.formReducer.isAuthenticated);
  return isAuth ? (
    <Form />
  ) : (
    <Redirect to={{pathname: '/'}} />
  );
}
export default ProtectedRoute;