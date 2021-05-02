import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {    
    
    const { counter, incremente } =useCounter(1);
    const [boxSize, setboxSize] = useState({})

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const parrafo = useRef();
    useLayoutEffect(() => {
        setboxSize(parrafo.current.getBoundingClientRect());
    }, [quote])
    // console.log(author, quote)

    // console.log(object)
    // console.log(data);

    return(
        <>
          <h1>Layoud Effect Frases</h1>
            <hr/>
      
                <blockquote className="blockquote text-left">
                    <p 
                    ref={parrafo}
                    className="mb-0"
                    >
                    {quote}
                    </p>
                    <br/>
                    
                </blockquote>
        
        <pre>
            {JSON.stringify(boxSize, null, 3)}

        </pre>

            <button className="btn btn-primary" onClick={incremente}>
                Siguiente clase
            </button>
          


            
              
            
              
            
        </>
        
    )
}
