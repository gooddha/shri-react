import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './settings.css'

const Settings = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();

  const formState = useSelector((state) => state.formState);

  const handleChange = useCallback((e) => {

    let newValue = e.target.value;
    if (e.target.name == 'syncTime') {
      newValue = String(newValue).replace(/\D/g, '');
    }

    dispatch({
      type: 'change-value',
      payload: {
        name: e.target.name,
        value: newValue
      }
    });

    // setFormState(prevState => {
    //   let updatedValues = {
    //     ...prevState,
    //     [e.target.name]: newValue
    //   }
    //   return { ...prevState, ...updatedValues };
    // });
  }, []);

  const handleClear = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'clear-value',
      payload: {
        name: e.target.name
      }
    });

  }, []);

  const [loading, setLoading] = useState(false);

  const handleSave = useCallback((e) => {
    e.preventDefault();

    if (formState.repo.length > 0 && formState.buildCommand.length > 0) {
      setLoading(true);

      setTimeout(() => {
        let loadingResult = [true, false][Math.floor(Math.random() * 2)];
        setLoading(false);

        if (loadingResult) {
          dispatch({ type: 'save-settings' })
          history.push('/');
        } else {
          alert('Error while loading');
        }
      }, 2000)

    } else {
      alert('Заполните все поля со здвездочкой');
    }
  }, [formState]);




  // Пробовал сделать компонент для инпута
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
                disabled={loading}
              >Save</button>
              <Link to="/"><button className="grey-button" disabled={loading}>Cancel</button></Link>
            </div>

          </form>
        </div>
      </main>

    </>
  )
}

export default Settings;
