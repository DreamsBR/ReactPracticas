import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'
import { Small } from './Small';
export const Memorize = () => {

    const {counter, incremente} = useCounter(15);
    const [show, setShow] = useState(true);
    
    
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h3>counter : <Small value={counter}/></h3>
            <button
                className="btn btn-primary"
                onClick={incremente}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-2"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        
        </div>
    )
}
