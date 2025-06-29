
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

        <div className='absolute  overflow-y-auto grid bg-white border 
      border-black h-[38rem] w-[20rem] m-0 place-items-center gap-2 rounded-xl pt-10'>

          {length === 0 ? <h1 className='text-black w-19 h-10 text-xl'>no to-do listed</h1> : null}

          <button onClick={handleClose} className='absolute w-1 h-1 text-3xl right-[25px] top-[5px]'>X</button>


          {selector.map((state) =>


            <div className='  grid place-content-center min-w-[150px] max-w-auto h-[200px] bg-black text-white gap-10' key={state.id}>



              <section >
                <p >{state.todo}</p>
                <button onClick={() => { dispatch(deleteTodos({ id: state.id })), setId(state.id), setId(null) }
                }>delete</button><br />
              </section>



              {id === state.id && (
                <>

                  <input value={update} onChange={(e) => setUpdate(e.target.value)} type="text" />
                  <button onClick={handleUpdate}>update</button>
                </>
              )}
              <button onClick={() => {
                setId(state.id)
                setIsTrue(!isTrue)
                setUpdate(state.todo)
                isTrue ? setId(null) : false
              }}> {id === state.id ? "X" : "edit"}
              </button>
            </div>
          )}</div>)}
    </>
  )
}

export default Display
