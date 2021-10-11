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

  const [formState, setFormState] = useState({
    repo: '',
    buildCommand: '',
    mainBranch: '',
    syncTime: 10
  });
  const [builds, setBuilds] = useState([
    {
      status: "ok",
      number: "1386",
      description: "add documentation for postgres scaler",
      branch: "master",
      hash: "9c9f0b9",
      author: "Philip Kirkorov",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
    }
  ]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {isSettingsSaved ? <BuildHistory build={{ builds, setBuilds }} /> : <Main />}
        </Route>
        <Route path="/settings">
          <Settings settings={{ formState, setFormState }} />
        </Route>
        <Footer />
      </Router >
    </div>
  );
}

export default App;