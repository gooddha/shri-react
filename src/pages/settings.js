import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './settings.css'

const Settings = (props) => {

  const { state, setState } = props.settings;

  const handleChange = (e) => {
    setState(prevState => {
      let updatedValues = {
        values: {
          ...prevState.values,
          [e.target.name]: e.target.value
        }
      }
      return { ...prevState, ...updatedValues };
    });
  }

  const handleClear = (e) => {
    e.preventDefault();
    setState(prevState => {
      let updatedValues = {
        values: {
          ...prevState.values,
          [e.target.name]: ''
        }
      }
      return { ...prevState, ...updatedValues };
    });
  }

  const handleSave = (e) => {
    e.preventDefault();

    if (state.values.repo.length > 0 && state.values.buildCommand.length > 0) {

      setState(prevState => {
        let updatedValues = {
          isSettingsSet: true
        }
        return { ...prevState, ...updatedValues };
      });

      window.history.pushState(null, '', '/');
    } else {
      alert('Заполните все поля со здвездочкой');
    }

  }

  return (
    <>
      <header>
        <div className="wrapper">
          <h1>School CI server</h1>
        </div>
      </header>
      <main className="settings">
        <div className="wrapper">
          <h2>Settings</h2>
          <p className="description">Configure repository connection and synchronization settings.</p>
          <form action="">
            <label htmlFor="github-repo">
              <p>GitHub repository <span>*</span></p>
              <input
                type="text"
                id="github-repo"
                name="repo"
                required
                placeholder="user-name/repo-name"
                value={state.values.repo}
                onChange={handleChange}
              />
              <button
                className="grey-button clear-input"
                name="repo"
                onClick={handleClear}
              ></button>
            </label>
            <label htmlFor="build-command">
              <p>Build command <span>*</span></p>
              <input
                type="text"
                id="build-command"
                name="buildCommand"
                required
                placeholder="npm run build"
                value={state.values.buildCommand}
                onChange={handleChange}
              />
              <button
                className="grey-button clear-input"
                name="buildCommand"
                onClick={handleClear}
              ></button>
            </label>
            <label htmlFor="main-branch">
              <p>Main branch</p>
              <input
                type="text"
                id="main-branch"
                name="mainBranch"
                placeholder="master"
                value={state.values.mainBranch}
                onChange={handleChange}
              />
              <button
                className="grey-button clear-input"
                name="mainBranch"
                onClick={handleClear}
              ></button>
            </label>
            <div className="sync">
              Synchronize every <input
                type="number"
                min="0"
                placeholder="10"
                name="syncTime"
                value={state.values.syncTime}
                onChange={handleChange}
              /> minutes
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="yellow-button"
                onClick={handleSave}
              >Save</button>
              <Link to="/"><button className="grey-button">Cancel</button></Link>
            </div>

          </form>
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <div className="links">
            <a href="#">Support</a>
            <a href="#">Learning</a>
            <a href="#">Русская версия</a>
          </div>
          <div className="copyright">© 2021 Your Name</div>
        </div>
      </footer>
    </>
  )
}

export default Settings;
