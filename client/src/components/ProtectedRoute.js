import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './Form';
import {Route} from 'react-router-dom';


const ProtectedRoute = ({component: Component, ...rest}) => {
  const isAuth = useSelector(state => state.formReducer.isAuthenticated);
 
  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect to={{pathname: '/'}} />
  );
}
export default ProtectedRoute;