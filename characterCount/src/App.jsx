import { useState } from 'react'
import './App.css'

function App() {
const [inputVal , setInputVal] = useState('');
const [charCount , setCharCount] = useState(0);
const handleInputChange = (e) => {
  let value = e.target.value;
  setCharCount(value.length);
  setInputVal(value);
}
  return (
    <>
    <h2>Character Count</h2>
     <input type="text" value={inputVal} onChange={handleInputChange}/>
     <p>You Typed: {inputVal}</p>
     <p>Character Count: {charCount}</p>

    </>
  )
}

export default App
