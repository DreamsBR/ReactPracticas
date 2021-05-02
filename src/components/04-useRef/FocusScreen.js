import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
export const FocusScreen = () => {
    
    const inputRef = useRef();
    // console.log(ref)
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }
    return (
        <div>
            <i>Focus Scrrem</i>
            <hr/>
            
            <input 
            ref={inputRef}
            type="text"  
            className="form-control" 
            />
            
            <button 
            onClick={handleClick}
            className="btn btn-outline-primary mt-2">
                Focus
            </button>
        </div>
    )
}
