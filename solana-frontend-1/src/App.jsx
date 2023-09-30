import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Web3 from '@solana/web3.js'


function App() {
  const [messages, setMessages] = useState([])
  const messageProgramID = new Web3.PublicKey('Fvprm5MAphbU4YLu9y6eHRNJZUS4NdgjMWPk15KdgmpD');



  async function fetchMessages() {
    const url = Web3.clusterApiUrl('devnet')
    const connection = new Web3.Connection(url);
    const accounts = await connection.getProgramAccounts(messageProgramID);
    // const decodedAccounts = accounts.map((accounts) => {
    //   return barsDecoderSchema.decode(account.account.data);
    // })
    // setMessages(decodedAccounts)
    console.log('Send Message', accounts)

  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{accounts}</h1> */}
   
      <div className="card">


        <h1>Send Message</h1>


        <button onClick={fetchMessages()}>
          View Message
        </button>
      </div>



    </>
  )
}

export default App
