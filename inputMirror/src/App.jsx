import { useState } from 'react'
import './App.css'

function App() {
const [inputVal , setInputVal] = useState('')
const handleInputChange = (e) => {
  setInputVal(e.target.value);
}
  return (
    <>
    <h2>Input Mirror</h2>
     <input type="text" value={inputVal} onChange={handleInputChange}/>
     <p>You Typed: {inputVal}</p>
    </>
  )
}

export default App
