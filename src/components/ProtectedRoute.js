import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component: Component, ...rest}) => {
  //If password is not entered, user cannot view components passed here
  const isAuth = useSelector(state => state.formReducer.isAuthenticated);
 
  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect to={{pathname: '/'}} />
  );
}
export default ProtectedRoute;