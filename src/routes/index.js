import React from 'react';
import { isAuthenticated } from '../Hook/Auth';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} render={props => 
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/register'  component={Register}/>
        <PrivateRoute path='/home' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;