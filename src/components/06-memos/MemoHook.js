import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHoook = () => {

    const {counter, incremente} = useCounter(500);
    const [show, setShow] = useState(true);
    
    const procesoPesado =(interaciones) => {
        for (let i = 0; i < interaciones; i++) {
            console.log('Haciendo mimi');
        }

        return `${interaciones} iteraciones realizadas`;
    }
    const memoproceso = useMemo(() => procesoPesado(counter), [counter])
    
    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <p>{memoproceso}</p>
            <h3>counter : <small >{counter}</small></h3>
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
