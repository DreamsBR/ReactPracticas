import React, { useState } from 'react'
import './cunter.css'


export const CounterApp = () => {
  
  const [counter, setCounter] = useState(
    { 
      counter1 : 10,
      counter2:20,
      counter3:20,
      counter4:20
    })

    const { counter1, counter2 } = counter;

  console.log(counter1);
  return (
        <>
          <h1>counter: {counter1}</h1>
          <h1>counter: {counter2}</h1>
          <hr/>

          <button 
          className="btn btn-primary"
          onClick={() => { setCounter( 
                {
                  ...counter,
                  counter1: counter1+1,
                                  
                })}
          }
          >
            +1</button>
        </>
    )
}
