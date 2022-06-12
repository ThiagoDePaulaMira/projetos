import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className="App">
          <a
            className="App-nav"
            href="/about/"
            
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="App-nav"
            href="/about1/"
          >
            about 1
          </a>
  </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Fast
          </a>
          {' | '}
          <a
            className="item active"
            href="/about/"
            
          >
            Vite Docs
          </a>
        </p>
      </header>
      
    </div>
  )
}

export default App
