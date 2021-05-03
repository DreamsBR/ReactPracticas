import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './style.css'
import { todoReducer } from './todoReducer'

const init = () =>{
    return JSON.parse(localStorage.getItem('todos'))||[]
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender aa',
    //     done:false
    // }]
}

export const TodoApp = () => {

    const [ todos, dispatch] = useReducer(todoReducer, [], init)
    
    const [{descriptcion}, handleInpustChange, reseToDo]= useForm({
        descriptcion: ''
    })

    useEffect(() => {        
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelte =(todoId)=> {
        console.log(todoId);
             
        const actionDelte={
            type:'delete',
            payload:todoId
        }
        dispatch(actionDelte)
    }

    const handleToggler=(todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    console.log(descriptcion);
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(descriptcion.trim().length <= 1){
            return ;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: descriptcion,
            done:false
        };

        const actionToDo={
            type:'add',
            payload:newTodo
        }
        dispatch(actionToDo);
        reseToDo()
        console.log('Nueva Tarea');
    }

    console.log(todos);
    return (
        <div>
            <h1>Todo app ({todos.length}) </h1>
            <hr/>
            <div className="row">
            <div className="col-7">

            <ul className="list-group list-group-flush">
                {todos.map(({ id,desc, done},i)=>(
                    <li key={id}
                    className="list-group-item">
                        <p 
                            className={`${done && 'complete'}` }
                            onClick={()=>handleToggler(id)}
                        >
                            {i+1}. {desc}
                        </p>
                        <button 
                            onClick={()=>handleDelte(id)}
                            className="btn btn-danger">
                            Borrar
                        </button>
                    </li>
                    

                ))}
            </ul>
            </div>
            <div className="col-5">
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

            </div>
            </div>
        </div>
    )
}
