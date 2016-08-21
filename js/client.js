import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "../pages/Layout";
import Todos from "../pages/Todos";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";

const app = documnet.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route  path="settings" compoment={Settings}></Route>
      <Route path="favorites(/:item)"> component={Favorites}></Route>
    </Route>
  </Router>,
  app);
