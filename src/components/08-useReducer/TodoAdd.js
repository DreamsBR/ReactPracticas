import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {
    const [{descriptcion}, handleInpustChange, reseToDo]= useForm({
        descriptcion: ''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(descriptcion.trim().length <= 1){
            return ;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: descriptcion,
            done:false
        };
        handleAddTodo(newTodo)
        // dispatch(actionToDo);
        reseToDo()
    }
    return (
        <>
            <h4>Agregar Todo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Aprender..."
                        autoComplete="off"
                        name="descriptcion"
                        onChange={handleInpustChange}
                        value={descriptcion}
                    />
                    <button
                    type="submit"
                        className="btn btn-outline-primary mt-2 btn-block"
                    >Agregar</button>
                    
                </form>

        </>
    )
}
