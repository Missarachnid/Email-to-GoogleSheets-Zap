import React from 'react';
import '../css/App.css';
import ProtectedRoute from './ProtectedRoute';
import Form from './Form';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { AUTH_TOGGLE} from '../actions/formActions';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.formReducer.isAuthenticated);
  console.log('isAuth', isAuth);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/form' component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
