import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState(false)

  return (
    <>
      <button style={{backgroundColor : mode ? "white" : "black" , color : mode ? "black" : "white"}}
      onClick={() => {setMode(!mode)}}>{mode ? "Dark" : "Light"} Mode</button>
    </>
  )
}

export default App
