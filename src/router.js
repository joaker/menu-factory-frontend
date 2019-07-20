import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Ingredients from './routes/Ingredients';

export const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/ingredients" component={Ingredients} />
  </BrowserRouter>
);

export default Router;
