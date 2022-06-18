import React, {useState} from 'react'

//redux
import { useDispatch, useSelector} from 'react-redux'

//thunk async function
import { signInAsync } from '../store/slices/authSlice'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, error } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <div className='form'>
      <input type="text" name='username' value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={()=> dispatch(signInAsync({email, password})) }  >
        {loading? 'Loading' : 'Submit' }
      </button>
      {error.length > 0 && <p>{error}</p>}
    </div>
  )
}