import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './feature/user'
import { useSelector } from 'react-redux'

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  return (
    <>
      {!user.name && (<div>

        <input placeholder='Name' value={name} onChange={e => setName(e.target.value)} /><br/>
        <input placeholder='Age' value={age} onChange={e => setAge(e.target.value)} /><br/>
        <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />

      </div>)}
      {!user.name ?
        <button onClick={() => dispatch(login({ name, age, email }))}>Login</button>
        :
        <button onClick={() => dispatch(logout())}>Logout</button>
      }

    </>
  )
}

export default Login