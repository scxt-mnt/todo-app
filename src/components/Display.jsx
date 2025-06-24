import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const data = useSelector((state) => state.user.value)
  return (
    <>
        <h1>{`name: ${data.name}`}</h1>
        <h1>{`age: ${data.age}`}</h1>

    </>
  )
}

export default Display
