import './App.css'

function App() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

  ethereum.request({ method: 'eth_requestAccounts' });

  const ethereumButton = document.querySelector('.enableEthereumButton');
  ethereumButton.addEventListener('click', () => {
    //Will Start the metamask extension
    ethereum.request({ method: 'eth_requestAccounts' });
  });



  return (
    <div className='App'>
      
          <button className="enableEthereumButton">Enable Ethereum</button>
          
        
    </div>
  )
}

export default App
