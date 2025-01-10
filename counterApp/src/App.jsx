import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h2>{count}</h2>
   <button onClick={() => {setCount(count + 1)}}>Increament</button><br /><br />
   <button onClick={() => {setCount(count - 1)}}>Decreament</button><br /><br />
   <button onClick={() => {setCount(0)}}>Reset</button>
    </>
  )
}

export default App
