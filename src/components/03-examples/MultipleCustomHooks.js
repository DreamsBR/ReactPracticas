import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {    
    
    const { counter, incremente } =useCounter(1);

    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote } = !!data && data[0];


    // console.log(author, quote)

    // console.log(object)
    // console.log(data);

    return(
        <>
          <h1>Breaking Bad Frases</h1>
            <hr/>
            {
                loading
                ?(
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                :
                (
                <blockquote className="blockquote text-rigth">
                    <p className="mb-0">{quote}</p>
                    <br/>
                    <footer className="blockquote-footer">{author} <cite title="">Source Title</cite></footer>
                </blockquote>
                )

            }

            <button className="btn btn-primary" onClick={incremente}>
                Siguiente clase
            </button>
          


            
              
            
              
            
        </>
        
    )
}
