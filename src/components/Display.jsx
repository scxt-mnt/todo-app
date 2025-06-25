import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../userSlice'
import { updateEmail } from '../userSlice'

const Display = () => {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.user.value)
    const [update, setUpdate] = useState("");
    return (
        <>
        {userList.map((state) => <div key={state.id}>
        <p>{`name: ${state.name}`}</p> 
        <p>{`email: ${state.email}`}</p>
        <input value={update} onChange={(e) => setUpdate(e.target.value)} type='text'/><button onClick={() => dispatch(updateEmail({id: state.id, email: update}))}>update email</button><br/>

        <button onClick={() => dispatch(deleteUser(state.id))}>delete user</button><br/>
        <br/>
        </div>)}
        </>
    )
}

export default Display
