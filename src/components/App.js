import React, { useState } from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../pages/main';
import Settings from '../pages/settings';
import BuildHistory from '../pages/build-history';
import Footer from '../components/Footer'

const App = () => {

  const [isSettingsSaved, setIsSettingsSaved] = useState(false);

  const [formState, setFormState] = useState({
    repo: '',
    buildCommand: '',
    mainBranch: '',
    syncTime: 10
  });

  const content = isSettingsSaved ? BuildHistory : Main;

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={content} />
        <Route path="/settings">
          <Settings settings={{ formState, setFormState }} setIsSettingsSaved={setIsSettingsSaved} />
        </Route>
        <Footer />
      </Router >
    </div>
  )
}

export default App;