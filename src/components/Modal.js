import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Modal = (props) => {

  const { setModal } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((e) => {
    let newValue = e.target.value;

    setInputValue(newValue);
  }, []);

  const handleCancel = useCallback(() => {
    setModal(false);
  }, [])


  return (
    <div className="modal-container style=">
      <div className="modal">
        <h2>New build</h2>
        <p>Enter commit hash which you want to build</p>
        <label htmlFor="build-command">
          <input
            type="text"
            id="build-command"
            required
            placeholder="Commit hash"
            onChange={handleChange}
            value={inputValue}
          />
          <button className="grey-button clear-input"></button>
        </label>
        <div className="buttons">
          <button type="submit" className="yellow-button" onClick={handleCancel}>Run build</button>
          <Link to="/"><button className="grey-button" onClick={handleCancel}>Cancel</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Modal;