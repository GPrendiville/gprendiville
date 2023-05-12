import React from 'react';
import './App.css';
import './github-mark.png'

//npm run deploy

function App() {
  return (
    <div >
      <header className="App-header">
        <div className="Top">
          <p className="Name">
            Griffith Prendiville
          </p>
          <a
          className="App-link"
          href="https://github.com/GPrendiville"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img src='/github-mark.png' alt='Github'/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
