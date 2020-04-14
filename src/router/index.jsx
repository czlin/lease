import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from '../pages/Index/index';

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  )
}