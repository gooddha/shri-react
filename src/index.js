import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './pages/main';
import Settings from './pages/settings';
import BuildHystory from './pages/build-hystory';


ReactDOM.render(
  <div className="App">
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/settings" component={Settings} />
      <Route path="/build-hystory" component={BuildHystory} />
    </Router >
  </div>,
  document.getElementById('root')
);

