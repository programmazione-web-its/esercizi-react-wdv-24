import { useState } from 'react'
import Button from './Button'

export default function Form() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function resetValues() {
    setUsername('')
    setPassword('')
    setEmail('')
  }

  return (
    <div className='registration-form'>
      <div className='form-group'>
        <label>Username</label>
        <input
          className='form-input'
          value={username}
          type='text'
          name='username'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Email</label>
        <input
          className='form-input'
          value={email}
          type='email'
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          className='form-input'
          value={password}
          type='password'
          name='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='preview-box'>
        <strong>Anteprima</strong>
        <span>username: {username}</span>
        <span>email: {email}</span>
        <span>password: {password}</span>
      </div>
      <Button onClick={resetValues}>Reset</Button>
    </div>
  )
}
