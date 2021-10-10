import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './settings.css'

const Settings = (props) => {
  let history = useHistory();

  const { formState, setFormState } = props.settings;
  const { setIsSettingsSaved } = props;

  console.log(formState);


  const handleChange = (e) => {
    let newValue = e.target.value;
    if (e.target.name == 'syncTime') {
      newValue = String(newValue).replace(/\D/g, '');
    }

    setFormState(prevState => {
      let updatedValues = {
        ...prevState,
        [e.target.name]: newValue
      }
      return { ...prevState, ...updatedValues };
    });
  }

  const handleClear = (e) => {
    e.preventDefault();
    setFormState(prevState => {
      let updatedValues = {
        ...prevState.values,
        [e.target.name]: ''
      }
      return { ...prevState, ...updatedValues };
    });
  }

  const handleSave = (e) => {
    e.preventDefault();

    if (formState.repo.length > 0 && formState.buildCommand.length > 0) {

      setIsSettingsSaved(true);

      history.push('/');
    } else {
      alert('Заполните все поля со здвездочкой');
    }
  }

  // const InputText = ({ id, title, name, isRequired, placeholder, value, buttonType }) => {
  //   let req = isRequired ? 'required' : ''
  //   return (
  //     <label htmlFor={id}>
  //       <p>{title}<span> *</span></p>
  //       <input
  //         type="text"
  //         id={id}
  //         name={name}
  //         placeholder={placeholder}
  //         value={formState[name]}
  //         onChange={handleChange}
  //       />
  //       <button
  //         className={buttonType + "-button clear-input"}
  //         name={name}
  //         onClick={handleClear}
  //       ></button>
  //     </label>
  //   )
  // }

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
            {/*  
            <InputText
              id="github-repo"
              title="GitHub repository"
              name="repo"
              isRequired={true}
              placeholder="user-name/repo-name"
              value={formState.repo}
              buttonType="grey"
            />*/}
            <label htmlFor="github-repo">
              <p>GitHub repository <span>*</span></p>
              <input
                type="text"
                id="github-repo"
                name="repo"
                required
                placeholder="user-name/repo-name"
                value={formState.repo}
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
                value={formState.buildCommand}
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
                value={formState.mainBranch}
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
                value={formState.syncTime}
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

    </>
  )
}

export default Settings;
