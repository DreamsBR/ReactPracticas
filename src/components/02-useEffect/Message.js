import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x:0 , y:0})

    const {x,y}= coors;

    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {x:e.x, y:e.y}
            // console.log(coors);
            setCoors(coors)
        }
        console.log('Mensage mostrado');
        window.addEventListener('mousemove' , mouseMove)
        return () => {            
            console.log('Mensage desmontado');
            window.removeEventListener('mousemove' , mouseMove)
        }

    }, [])
    
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x: {x} ; y: {y}
            </p>
        </div>
    )
}
