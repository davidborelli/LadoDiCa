import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail" exact component={ProductDetail} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
