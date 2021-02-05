import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import Form from './Form';
import Home from './Home';
import Success from './Success';
import Failure from './Failure';
import Links from './Links';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { StyledMain } from './styles/styledMain';

function App() {
  return (
    <div className='app'>
      <StyledMain>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/form' component={Form} />
            <ProtectedRoute exact path='/success' component={Success} />
            <ProtectedRoute exact path='/failure' component={Failure} />
          </Switch>
        </Router>
        
      </StyledMain>
      <Links />
      </div>
  );
}

export default App;
