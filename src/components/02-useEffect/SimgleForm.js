import React, { useEffect, useState } from 'react'

import './effects.css'
import { Message } from './Message'
export const SimgleForm = () => {
    
    
    const [formState, setformState] = useState({
        name:'',
        email:''
    })

    const {name,  email } = formState

    useEffect(()=>{
        // console.log('Hola we');
    },[]);


    useEffect(()=>{
        // console.log('Cambio realizado');
    },[formState]);
    
    
    useEffect(()=>{
        // console.log('email realizado');
    },[email]);

    const handleInputChange = ({target}) => {
        
        
        setformState({
            ...formState,
            [target.name]:target.value
        })
    }
    
    return (
        <>
            <i>useEfect</i>   
            <hr/>

            <div className="form-group">
              <input 
                type="text"
                name="name"
                className="form-control"
                autoComplete= "off"
                placeholder="nombres"
                value = {name}
                onChange= {handleInputChange}
              />
              
            </div>
            <br/>
            <div className="form-group">
              <input 
                type="text"
                name="email"
                className="form-control"
                autoComplete= "off"
                placeholder="@email"
                value = {email}
                onChange= {handleInputChange}
              />              
            </div>
            {(name==='123') && <Message/>}


        </>
    )
}
