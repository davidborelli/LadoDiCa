import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}
