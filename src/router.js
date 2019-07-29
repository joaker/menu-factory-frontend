import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Ingredients from './routes/Ingredients';
import Menus from './routes/Menus';

export const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/ingredients" component={Ingredients} />
    <Route path="/menus" component={Menus} />
  </BrowserRouter>
);

export default Router;
