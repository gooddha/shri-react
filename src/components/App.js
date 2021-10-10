import React, { useState } from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../pages/main';
import Settings from '../pages/settings';
import BuildHistory from '../pages/build-history';

const App = () => {

  const [state, setState] = useState({
    isSettingsSet: false,
    values: {
      repo: '',
      buildCommand: '',
      mainBranch: '',
      syncTime: 10
    }
  });

  const content = state.isSettingsSet ? BuildHistory : Main;

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={content} />
        <Route path="/settings">
          <Settings settings={{ state, setState }} />
        </Route>
      </Router >
    </div>
  )
}

export default App;