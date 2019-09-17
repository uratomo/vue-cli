import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Todo />, document.getElementById('root'));


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
