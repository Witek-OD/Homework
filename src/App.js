import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonData, clearData } from './actions/actions';
import './styles/styles.css';

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleFetch = () => {
    const url = document.getElementById('urlInput').value;
    dispatch(fetchPersonData(url));
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
      <div className="container">
        <h1>SWAPI</h1>
        <div className="search-container">
          <input
              type="text"
              id="urlInput"
              defaultValue="https://swapi.py4e.com/api/people/1/"
          />
          <button onClick={handleFetch}>Get info</button>
        </div>
        <div className="json-display">
          <pre>{data ? JSON.stringify(data, null, 2) : 'No data'}</pre>
        </div>
        <footer>
          <button className="clear-button" onClick={handleClear}>Clear</button>
        </footer>
      </div>
  );
}

export default App;
