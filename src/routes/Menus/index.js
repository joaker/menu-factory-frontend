import React from 'react';
import { Route } from 'react-router-dom';
import List from './List';
import Create from './Create';

export const Menus = ({ match }) => (
  <div className="menuRoutes">
    <Route path={`${match.path}/create`} component={Create} />
    <Route exact path={`${match.path}`} component={List} />
  </div>
);

export default Menus;
