import React from 'react'
import { Link } from "react-router-dom";
import './settings.css'

const Settings = () => {
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
              <input type="text" id="github-repo" required placeholder="user-name/repo-name"></input>
              <button className="grey-button clear-input"></button>
            </label>
            <label htmlFor="build-command">
              <p>Build command <span>*</span></p>
              <input type="text" id="build-command" required placeholder="npm run build" />
              <button className="grey-button clear-input"></button>
            </label>
            <label htmlFor="main-branch">
              <p>Main branch</p>
              <input type="text" placeholder="master" />
              <button className="grey-button clear-input"></button>
            </label>
            <div className="sync">
              Synchronize every <input type="number" min="0" placeholder="10" /> minutes
            </div>
            <div className="buttons">
              <button type="submit" className="yellow-button">Save</button>
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
