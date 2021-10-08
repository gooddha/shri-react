import React from 'react'
import { Link } from "react-router-dom";
import './main.css'
import toolsIcon from '../img/tools-icon.svg';

const Main = () => {

  return (
    <>
      <header>
        <div className="wrapper">
          <h1>School CI server</h1>
          <Link to="/settings"><button><span>Settings</span></button></Link>
        </div>
      </header>
      <main>
        <div className="proposal">
          <img src={toolsIcon} alt="tools icon" />
          <p>Configure repository connection and synchronization settings</p>
          <Link to="/settings"><button>Open settings</button></Link>
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

export default Main;
