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
          <Link to="/settings"><button className="grey-button"><span>Settings</span></button></Link>
        </div>
      </header>
      <main className="main">
        <div className="proposal">
          <img src={toolsIcon} alt="tools icon" />
          <p>Configure repository connection and synchronization settings</p>
          <Link to="/settings"><button className="yellow-button">Open settings</button></Link>
        </div>
      </main>
    </>
  )
}

export default Main;
