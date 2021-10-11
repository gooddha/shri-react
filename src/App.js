import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { useSelector } from 'react-redux';
import Main from './pages/main';
import Settings from './pages/settings';
import BuildHistory from './pages/build-history';
import Footer from './components/Footer';

const App = () => {

  const isSettingsSaved = useSelector((state) => state.isSettingsSaved);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {isSettingsSaved ? <BuildHistory /> : <Main />}
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Footer />
      </Router >
    </div>
  );
}

export default App;