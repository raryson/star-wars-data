import React from 'react';
import logo from './logo.svg';
import Search from './Components/Search/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Search />
      </header>
    </div>
  );
}

export default App;
