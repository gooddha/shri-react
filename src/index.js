import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './pages/main';
import Settings from './pages/settings';


ReactDOM.render(
  <Router>
    <Route exact path="/" component={Main} />
    <Route path="/settings" component={Settings} />
  </Router >,
  document.getElementById('root')
);

