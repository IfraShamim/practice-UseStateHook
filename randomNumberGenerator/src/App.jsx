import { useState } from 'react'
import './App.css'

function App() {
  const [randomNum, setRandomNum] = useState(null)

  return (
    <>
    <button onClick={() => {
      setRandomNum(Math.floor(Math.random()*100)+1)
    }}>Generate Random Number</button>
    <h1>{randomNum}</h1>
    
    </>
    
  )
}

export default App
