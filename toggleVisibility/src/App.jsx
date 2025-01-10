import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText] = useState(true);
  return (
    <>
     <p>{text && "I am Ifra Shamim"}</p>
     <button onClick={() => {setText(!text)}}>Toggle</button>
      
    </>
  )
}

export default App
