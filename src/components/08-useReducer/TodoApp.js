import React, { useEffect, useReducer } from 'react'
// import { useForm } from '../../hooks/useForm'
import './style.css'
import { TodoAdd } from './TodoAdd'
import { TodoLista } from './TodoLista'
import { todoReducer } from './todoReducer'

const init = () =>{
    return JSON.parse(localStorage.getItem('todos'))||[]
}

export const TodoApp = () => {

    const [ todos, dispatch] = useReducer(todoReducer, [], init)
    
  

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

    const handleAddTodo=(newTodo)=>{        
        dispatch({
            type:'add',
            payload:newTodo
        });
    }

    

    console.log(todos);
    
    return (
        <div>
            <h1>Todo app ({todos.length}) </h1>
            <hr/>
            <div className="row">
            <div className="col-7">

            <TodoLista  
                todos={todos} 
                handleToggler={handleToggler} 
                handleDelte={handleDelte}
            />

            </div>
            <div className="col-5">
                <TodoAdd 
                    handleAddTodo={handleAddTodo}
                
                />
            </div>
            </div>
        </div>
    )
}
