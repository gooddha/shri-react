import React from 'react'
import { Link } from "react-router-dom";
import './build-hystory.css'

const BuildHystory = () => {

  return (
    <>
      <header>
        <div className="wrapper">
          <h1>philip1967/my-awesome-repo</h1>
          <div className="buttons">
            <Link to="/build-hystory"><button className="grey-button run-button"><span>Run build</span></button></Link>
            <Link to="/settings"><button className="grey-button settings-button"></button></Link>
          </div>
        </div>
      </header>
      <main className="build-hystory">
        <div className="wrapper">
          <div className="build-items">
            <div className="build-item status-ok">
              <div className="status-icon-container">
                <div className="status-icon"></div>
              </div>
              <div className="build-info-container">
                <div className="info">
                  <div className="header">
                    <div className="number">#1368</div>
                    <div className="description">add documentation for postgres scaler</div>
                  </div>
                  <div className="details">
                    <div className="commit-info">
                      <div className="branch">master</div>
                      <div className="hash">9c9f0b9</div>
                    </div>
                    <div className="author">Philip Kirkorov</div>
                  </div>
                </div>
                <div className="datetime">
                  <div className="date">21 янв, 03:06</div>
                  <div className="time">1 ч 20 мин</div>
                </div>
              </div>
            </div>

            <button className="grey-button ">Show more</button>
          </div>
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

export default BuildHystory;
