import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../userSlice';


const Input = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleTodo = (e) => {
    e.preventDefault()
    dispatch(addTodos({ todo: todo }))
  }
  return (
    <>

      <form onSubmit={handleTodo} className='w-[19rem] h-[25rem] grid text-black place-items-center gap-1  border border-grey-300 shadow-2xl p-0 rounded-xl'>
        <h1 className=' transform font-bold text-4xl '>Todo</h1>
        <textarea placeholder='what are you going to do?' className='bg-white border border-black w-60 outline-none max-h-[9rem] rounded-xl text-center p-5' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className=' w-20 h-[35px] bg-black text-white m-0 rounded-md'>addTodo</button>
      </form>


    </>
  )
}

export default Input
