import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCunter] = useState(initialState);

    const incremente=()=>{
        setCunter(counter+1);        
    }
    const decrement=()=>{
        setCunter(counter-1);        
    }
    const reset=()=>{
        setCunter(initialState);        
    }

    return {
        counter,
        incremente,
        decrement,
        reset
    };

}
