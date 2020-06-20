import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
import TierList from "./components/TierList";

export default () => {
  return (
    <div>
      <h1>From redo branch</h1>
      <TierList />
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 36b529f... delete unused files, add dependencies
    </div>
  );
}

export default App;
