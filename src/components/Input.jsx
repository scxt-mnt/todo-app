import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../userSlice';

const Input = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
 
    const handleClick = () => {
        dispatch(addUser({name, email}))
    }

  return (
   <>
    <input value={name} onChange={(e) => setName(e.target.value)} type='text' /><br/>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text'/>
    <button onClick={handleClick}>add</button>
   </>
  )
}


export default Input
