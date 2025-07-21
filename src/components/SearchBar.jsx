import {useState, useRef} from 'react'
import { useSelector } from 'react-redux';
import styles from './Visibility.module.css';
const SearchBar = ({searchEngine, length}) => {
  const [searchStore, setSearchStore] = useState('');
  const noMatch = useRef();
  const blanks = useRef();
  const selector = useSelector((state) => state.todo.value)



    const handleSearch = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const lookFor = selector.find(items => items.todo.toLowerCase().trim() === searchStore.toLowerCase().trim());
      if (lookFor) {
        noMatch.current.style.display = 'none',
          blanks.current.style.display = 'none',
          searchEngine.current[lookFor.id].scrollIntoView({
            block: 'center',
            behavior: 'smooth',
          })
        if (searchStore === "") {
          blanks.current.style.display = 'block'
        }
      }
      else {
        noMatch.current.style.display = 'block'
      }
      console.log(lookFor)
    }, 100)

  }


    return (
        <>
                {length === 0 ? <h1 className=' absolute 
                  text-black  text-xl transform translate-y-[270px] translate-x-[78px] '>no to-do listed</h1> : <>
                    <form onSubmit={handleSearch}>
                        <input
                            placeholder='search your todos here!' type='text' className='absolute w-[200px] rounded-lg text-center outline-none border focus:border-green-500 shadow-xl border-gray-300 focus:shadow-green-300 focus:shadow-xl' value={searchStore} onChange={(e) => setSearchStore(e.target.value)} /> <button className='bg-green-500 absolute right-[28px] rounded-xl text-sm w-[70px] h-[25px] top-[1px]'>search</button></form>
                    <p ref={blanks} className={`${styles.noMatch} text-red-500 tranform translate-y-6 text-[13px]`}>your search bar is blank</p>
                    <p ref={noMatch} className={`${styles.noMatch} text-red-500 tranform translate-y-6 text-[13px]`}>no match found</p>

                </>}

        </>
    )
}

export default SearchBar
