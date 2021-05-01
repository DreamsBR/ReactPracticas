import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'

import './effects.css'

export const FormWithCustomHook = () => {
    
    
    const [formValues, handleInpustChange] = useForm({
        name:'',
        email:'',
        password:''
    })

    const {name,  email, password} = formValues

    useEffect(() => {
        console.log('Email cambio');        
    }, [email])
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <i>FormWithCustomHook</i>   
            <hr/>

            <div className="form-group">
              <input 
                type="text"
                name="name"
                className="form-control"
                autoComplete= "off"
                placeholder="nombres"
                value = {name}
                onChange= {handleInpustChange}
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
                onChange= {handleInpustChange}
              />              
            </div>
            <br/>
            <div className="form-group">
              <input 
                type="password"
                name="password"
                className="form-control"
                autoComplete= "off"
                placeholder="Ingrese contraseña"
                value = {password}
                onChange= {handleInpustChange}
              />              
            </div>
            
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>

        </form>
    )
}
