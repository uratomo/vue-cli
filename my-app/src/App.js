import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
      </header>
    </div>
  );
}

export default App;
