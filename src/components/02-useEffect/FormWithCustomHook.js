import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'

import './effects.css'

export const FormWithCustomHook = () => {
    
    
    const [formValues, handleInpustChange] = useForm({
        name:'',
        email:'',
        password:'',
        loading: false
    })

    let {name,  email, password, loading } = formValues

  
    useEffect(() => {
      if(name.length === 0 || name === undefined ){
        loading = false    
        console.log(loading);      
        console.log('consume leng')            
      }
      return () =>{
        console.log(name.length);
        loading= true  
        console.log(loading);      
        
      }
        // console.log('Nombre cambio');        
        // console.log('Email cambio');        
    }, [name])
  
    const handleSubmit = (e) =>{            
      
        if(email.length == 0 || name === undefined ){
          loading = false          
          console.log('consume leng')            
        }
        if(password.length == 0 || name === undefined ){
          loading = false          
          console.log('consume leng')            
        }
        else{                    
          console.log('Error');
          e.preventDefault();
          console.log(formValues);
        }
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
            { loading ? 'debe de ingresar algo' :'123'  }
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
        {/* {name.length > 3 && email.length > 3 ? <button type="submit" className="btn btn-primary">
            Guardar
        </button> : '' } */}

        </form>
    )
}
