import { useState } from 'react'
import './App.css'

function App() {
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [submit , setSubmit] = useState({});
const nameHandler = (name) => {
setName(name);
}
const emailHandler = (email) => {
  setEmail(email);
}
const submitHandler = (submit) => {
  submit.preventDefault();
  setSubmit({name , email});
  setName('');
  setEmail('');
}
  return (
    <>
     <form onSubmit={submitHandler}>
      <input value={name} type="text" placeholder='Name' onChange={(e) => {
        nameHandler(e.target.value)
      }}/> <br /><br />
      <input value={email} type="email" placeholder='Email' onChange={(e) => {
        emailHandler(e.target.value)
      }}/> <br /><br />
      <button type='Submit'>Submit</button>
     </form>
     {submit.name && (
        <h2>Name: {submit.name}, Email: {submit.email}</h2>
      )}
    </>
  )
}

export default App
