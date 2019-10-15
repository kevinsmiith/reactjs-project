import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Products from './pages/Products';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
