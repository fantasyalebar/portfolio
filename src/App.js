import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from '../src/Components/Homepage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>

        <Homepage />
      </Router>
    </div>
  );
}

export default App;
