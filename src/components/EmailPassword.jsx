import React, { useEffect, useState } from 'react'

const EmailPassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        const savedEmail = localStorage.getItem('email')
        const savedPassword = localStorage.getItem('password')

        if(savedEmail) setEmail(savedEmail)
        if(savedPassword) setPassword(savedPassword)
    },[])

    const handleSaveSession = () => {
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('password',password)
    }
    const handleClearSession = () => {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('password')
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        <h1>Email & Password (local Storage)</h1>
        <div>
            <input 
                type="email"
                placeholder='Enter email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
            />
        </div>
        <div>
            <input 
                type="password"
                placeholder='Enter password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} 
            />
        </div>
        <button onClick={handleSaveSession}>Save to session</button>
        <button onClick={handleClearSession}>Clear session storage</button>
    </div>
  )
}

export default EmailPassword