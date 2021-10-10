import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './build-history.css'

import BuildItem from '../components/BuildItem';
import Modal from '../components/Modal'



const BuildHistory = () => {

  const [showModal, setShowModal] = useState(false);
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
  ])

  const handleBuild = (e) => {
    e.preventDefault()
    setShowModal(true);
  }

  const handleShowMore = (e) => {
    const randValue = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }
    let statuses = ['ok', 'error', 'pending'];
    let descriptions = [
      'add documentation for postgres scaler',
      'Super cool UI kit for making websites that look like games',
      'Merge branch "master" of github.com:jaywcjlove/awesome',
      'upgrade typescript to 3.8',
      'add documentation for postgres scaler',
      'improved accessibility',
      'Form item has default height align with form size'
    ];
    setBuilds(builds => {
      return [
        ...builds,
        {
          status: randValue(statuses),
          number: "1386",
          description: randValue(descriptions),
          branch: "master",
          hash: "9c9f0b9",
          author: "Philip Kirkorov",
          date: "21 янв, 03:06",
          time: "1 ч 20 мин",
        }
      ]
    })
  }

  const buildItems = builds.map(({ status, number, description, branch, hash, author, date, time }, i) => {
    return <BuildItem
      status={status}
      number={number}
      description={description}
      branch={branch}
      hash={hash}
      author={author}
      date={date}
      time={time}
      key={i}
    />
  })

  return (
    <>
      <header>
        <div className="wrapper">
          <h1>philip1967/my-awesome-repo</h1>
          <div className="buttons">
            <button className="grey-button run-button" onClick={handleBuild}><span>Run build</span></button>
            <Link to="/settings"><button className="grey-button settings-button"></button></Link>
          </div>
        </div>
      </header>
      <main className="build-hystory">
        <div className="wrapper">
          <div className="build-items">
            {buildItems}
            <button className="grey-button" onClick={handleShowMore}>Show more</button>
          </div>
        </div>

        {showModal ? <Modal setModal={setShowModal} /> : null}

      </main>

    </>
  )
}

export default BuildHistory;
