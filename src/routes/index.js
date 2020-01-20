import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import ProductDetail from '~/pages/ProductDetail';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail" exact component={ProductDetail} />
    </Switch>
  );
}
