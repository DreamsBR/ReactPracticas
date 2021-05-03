import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoLista = ({todos, handleToggler , handleDelte }) => {
    return (
        <>
        <ul className="list-group list-group-flush">
                
                {todos.map((todo,i)=>(
                    <TodoListItem 
                        key={todo.id}
                        todos={todo}
                        i = {i}
                        handleToggler={handleToggler}
                        handleDelte={handleDelte}
                    
                    />
                ))}
            </ul>
        </>
    )
}
