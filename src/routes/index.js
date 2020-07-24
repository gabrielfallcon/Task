import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Register}/>
        <Route path='/in'  component={Login}/>
        <Route path='/index'  component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;