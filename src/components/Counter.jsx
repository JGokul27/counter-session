import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        const savedCounter = localStorage.getItem('counter')
        if(savedCounter){
            setCounter(parseInt(savedCounter))
        }
    },[])
    useEffect(()=> {
        localStorage.setItem('counter', counter)
    }, [counter])
  return (
    <div>
        <h1>Counter (localStorage)</h1>
        <p>Counter : {counter}</p>
        <button onClick={()=> setCounter(counter + 1)}>Increment</button>
        <button onClick={()=> setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default Counter