import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import {MultipleCustomHooks} from "../03-examples/MultipleCustomHooks";

export const RealExample = () => {
        
    const [show, setshow] = useState(false)
    
    return (
        <div>
            <h1>Real Example </h1>
            <hr/>

        { show && <MultipleCustomHooks/>}
        <br/>
        <button
        className="btn btn-danger mt-5"
        onClick={ ()=>{
            setshow(!show)
        }}
        >
            Show/Hide
        </button>
        </div>
    )
}
