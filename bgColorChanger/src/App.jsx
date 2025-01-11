import { useState } from 'react'
import './App.css'

function App() {
 const [color , setColor] = useState('white');
  return (
    <>
    <div style={{backgroundColor : color , width : '20rem' , height : '10vh' , padding: '20px' }}></div>
     <select name="" id="" onChange={(e) => {
        setColor(e.target.value)
        console.log(e.target.value);
        
      }}>
      <option value="white">White</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
      <option value="red">Red</option>
     </select>
     </>
  )
}

export default App
