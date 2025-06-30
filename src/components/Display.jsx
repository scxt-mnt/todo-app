
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodos, updateTodos } from '../userSlice'
import { useState } from 'react'

const Display = () => {
  const selector = useSelector((state) => state.todo.value)
  const dispatch = useDispatch();
  const [update, setUpdate] = useState();
  const [id, setId] = useState();
  const [isTrue, setIsTrue] = useState(false)
  const [dropDown, setDropDown] = useState(false)


  const length = selector.length

  const handleUpdate = () => {
    dispatch(updateTodos({ id: id, todo: update }))
    setId(null)

  }

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }
  const handleClose = () => {
    setDropDown(false)
  }


  return (

    <>

      <button className='bg-black text-white h-10 w-[100px] rounded-xl hover:bg-green-900 transition duration-1000' onClick={handleDropDown}>{`todo List ${dropDown ? ": " : ":"} ${length}`}</button>
      {dropDown === true && (

        <main className='absolute  overflow-y-auto grid bg-white border 
      border-gray-400 shadow-2xl h-[38rem] w-[20rem] m-0 place-items-center gap-2 rounded-xl pb-10  '>


          <section className='w-full flex justify-end self-start sticky top-0 h-3 m-1 pr-2 z-10 text-3xl z-10 text-red-500'>
            <button onClick={handleClose}>X</button>
          </section>

          <section className='self-start'>
            {length === 0 ? <h1 className='text-black  text-xl'>no to-do listed</h1> : null}
          </section>


          {selector.map((state) =>


            <section className='grid relative  place-items-center min-w-[280px] max-w-[280px] min-h-[150px] h-[150px] bg-white text-black rounded-xl m-0 shadow-lg border border-gray-500 p-5 overflow-auto self-start' key={state.id}>




              <p className='font-bold text-xl bg-green-400 rounded-md break-all '>{state.todo}</p>

              <section className='sticky flex justify-end top-0 font-bold text-lg'>
                <button onClick={() => { dispatch(deleteTodos({ id: state.id })), setId(state.id), setId(null) }
                }>x</button><br />
              </section>


              {id === state.id && (
                <>
                  <section className='absolute grid '>
                    <textarea className='w-[13rem] h-[6rem]   whitespace-auto border border-red-300 p-2' value={update} onChange={(e) => setUpdate(e.target.value)} type="text" />
                    <button onClick={handleUpdate}>update</button>
                  </section>
                </>
              )}
              <button className='absolute  bottom-[1px] left-[10px] translate-y-[3px]' onClick={() => {
                setId(state.id)
                setIsTrue(!isTrue)
                setUpdate(state.todo)
                isTrue ? setId(null) : false
              }}> {id === state.id ? <p className='text-red-500 '>X</p> : <p>edit</p>}
              </button>
            </section>
          )}</main>)}
    </>
  )
}

export default Display
