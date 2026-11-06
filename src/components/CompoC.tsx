import UserContext from '@/utils/createContext'
import React, { useContext } from 'react'

function CompoC() {
  const user=useContext(UserContext);
  console.log(user);
  return (
    <div className='border border-black'>
      <h1>UserProfile</h1>
      <p>Name: {user.name}</p>
    </div>
  )
}

export default CompoC