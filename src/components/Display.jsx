
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodos, updateTodos } from '../userSlice'
import { useRef, useState } from 'react'
import SearchBar from './SearchBar'


const Display = () => {
  const selector = useSelector((state) => state.todo.value)
  const dispatch = useDispatch();
  const [update, setUpdate] = useState();
  const [id, setId] = useState(null);
  const [isTrue, setIsTrue] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const searchEngine = useRef({});




  const length = selector.length

  const handleUpdate = () => {
    dispatch(updateTodos({ id: id, todo: update }))
    setId(null)
    setIsTrue(false)
  }

  const handleDropDown = () => {
    setDropDown(!dropDown);
  }
  const handleClose = () => {
    setDropDown(false);
  }
  

  return (

    <>

      <button className='bg-black text-white h-10 w-[100px] rounded-xl hover:bg-green-900 transition duration-1000' onClick={handleDropDown}>{`todo List ${dropDown ? ": " : ":"} ${length}`}</button>
      {dropDown === true && (


        <main className='absolute overflow-y-auto grid bg-gray-100 border 
      bordeqr-gray-300 shadow-2xl h-[38rem] w-[20rem] m-0 place-items-center gap-5 rounded-xl pb-11 '>


          <section className='w-full flex justify-end self-start sticky top-0 h-3 m-1 pr-2 z-10 text-3xl z-10 text-red-500'>
            <button onClick={handleClose}>X</button>
          </section>

          <section className='self-start w-[300px] bg-white absolute top-2 '>
              <SearchBar searchEngine={searchEngine} length={length}/>
          </section> 


          {selector.map((state) =>


            <section className={`grid relative  place-items-center min-w-[280px] max-w-[280px] min-h-[150px] h-[150px] bg-white text-black rounded-xl m-2 shadow-2xl border border-gray-200 ${isTrue ? 'overflow-hidden' : 'overflow-auto'}  self-start p-0`} ref={e => searchEngine.current[state.id] = e} >

              <section className='sticky flex justify-end top-0 font-bold text-lg self-start w-full h-1 pr-2'>
                <button onClick={() => { dispatch(deleteTodos({ id: state.id })), setId(state.id), setId(null) }
                }>x</button><br />
              </section>

              <section className='absolute top-10 flex w-[200px] transform self-start justify-start -mt-10 ml-[-45px]'>
                <button onClick={() => {
                  setId(state.id)
                  setIsTrue(!isTrue)
                  setUpdate(state.todo)
                  isTrue ? setId(null) : false
                }}> {id === state.id ? <p className='text-red-500 '>X</p> : <p>edit</p>}
                </button>
              </section>


              {state.todo ? <p className='font-bold text-xl bg-green-400 rounded-md break-all mt-5 mr-3 ml-3 mb-5 p-2 self-start'>{state.todo}</p> : <p className='bg-red-500 rounded-md mt-5 mr-3 ml-3 mb-5 p-2 self-start'> no input </p>}

              {id === state.id && (
                <>
                  {isTrue === true && (
                    <>
                      <div className='absolute bg-white/10 h-[9rem] h-screen w-screen backdrop-filter backdrop-blur-lg' />

                      <section className='absolute top-10 flex w-[200px] transform self-start justify-start -mt-10 ml-[-45px] truncate'>

                        <button onClick={() => {
                          setId(state.id)
                          setIsTrue(!isTrue)
                          setUpdate(state.todo)
                          isTrue ? setId(null) : false
                        }}> <p className='text-red-500 '>X</p>
                        </button>
                      </section>

                      {isTrue === true && (
                        <p className='font-bold text-xl bg-green-400 rounded-md mt-5 mr-3 ml-3 mb-5 p-2 self-start h-[1rem]'>{state.todo ? state.todo : "no input"}</p>
                      )}
                    </>
                  )}

                  <section className='absolute grid '>
                    <textarea className='w-[13rem] h-[6rem] border border-red-300 p-2 outline-none focus:border-red-900 z-20' value={update} onChange={(e) => setUpdate(e.target.value)} type="text" />
                    <button onClick={handleUpdate}>update</button>
                  </section>
                </>
              )}




            </section>
          )}</main>)}
    </>
  )
}

export default Display
