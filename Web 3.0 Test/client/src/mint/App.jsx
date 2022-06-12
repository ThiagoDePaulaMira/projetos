import { useState } from 'react';
import './App.css';
import MainMint from './MainMint.jsx';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

function App() {
  const [accounts, setAccounts ] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <Sidebar/>
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
