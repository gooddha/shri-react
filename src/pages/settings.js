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
          <p>Configure repository connection and synchronization settings.</p>
          <form action="">
            <label htmlFor="github-repo">GitHub repository <span>*</span></label>
            <input type="text" id="github-repo" required />
            <label htmlFor="build-command">Build command <span>*</span></label>
            <input type="text" id="build-command" required />
            <label htmlFor="main-branch">Main branch</label>
            <input type="text" />
            <div className="sync">
              Synchronize every <input type="number" min="0" /> minutes
            </div>
            <div className="buttons">
              <button type="submit">Save</button>
              <Link to="/"><button>Cancel</button></Link>
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
