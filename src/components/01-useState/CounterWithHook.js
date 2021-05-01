import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './cunter.css'
export const CounterWithHook = () => {
    
    const {state, incremente, decrement, reset} =  useCounter();
    
    return (
        
        
        <>
            <h1>Counter with hook {state}</h1>
            <hr />

            <a onClick={()=> incremente(3)} class="btn btn-primary"  role="button">+1</a>
            
            <a onClick={()=> decrement(3)} class="btn btn-primary"  role="button">-1</a>
            
            <a onClick={reset} class="btn btn-primary"  role="button">Restard</a>
        </>
    )
}
