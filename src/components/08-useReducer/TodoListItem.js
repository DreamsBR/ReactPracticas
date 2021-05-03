import React from 'react'

export const TodoListItem = ({todos, i, handleToggler , handleDelte}) => {
    
    const {id, done, desc} = todos
    
    return (
        <div>
            
            <li              
                key={id}
                    className="list-group-item mt-2">
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
                    

        </div>
    )
}
