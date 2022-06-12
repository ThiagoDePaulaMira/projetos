
function App() {

  const ethereum = window.ethereum;

  const connect = () => {
    
  if (typeof window.ethereum !== 'undefined') {
    ethereum.request({ method: 'eth_requestAccounts' });
}
  }
  

  return (
    <div >
      
      <button type="button" onClick={connect}>connect</button>
          
        
    </div>
  )
}

export default App
