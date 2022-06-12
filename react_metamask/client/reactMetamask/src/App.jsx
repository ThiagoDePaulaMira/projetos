import './App.css'

function App() {
  const ethereum = window.ethereum;

  const connect = () => {
  if (typeof window.ethereum !== 'undefined') {
    ethereum.request({ method: 'eth_requestAccounts' });
  }
}


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <button type="button" onClick={connect}>
            Connect Wallet
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
