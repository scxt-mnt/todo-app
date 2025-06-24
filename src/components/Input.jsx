import { useState } from "react";
import { useDispatch  } from "react-redux"
import { setUserValues } from "../userSlice";


const Input = () => {
const dispatch = useDispatch();
const [data, setData] = useState("");
const [age, setAge] = useState("");



const handleClick = (e) => {
    e.preventDefault()
    if(age) {                                                                                                                                                                                                                                                                                                                                                                                                            
      dispatch(setUserValues({age: age, name: data}))
}}
  return (
  <>
  <form onSubmit={handleClick}>
  <input value={data} onChange={(e) => setData(e.target.value)}   placeholder='yourName' type="text" /><br/>
  <input value={age} onChange={(e) => setAge(e.target.value) }></input> <br/>
  <button>add</button>
  </form>
  </>
  )

}
export default Input
