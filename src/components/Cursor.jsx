import React, { useRef, useState, useEffect } from 'react'
import { useMousePosition } from '../hooks/useMousePosition.js'
import { UseWindowSize } from '../hooks/UseWindowSize.js';


export const Cursor = ({cursorOver}) => {

    const [isDown, setIsDown] = useState( false )
    const { clientX, clientY } = useMousePosition();
    const [width, height] = UseWindowSize();

    useEffect(() => {
        document.addEventListener( 'mousedown', ()=>{setIsDown( true )});
        document.addEventListener( 'mouseup', ()=>{setIsDown( false )});
        return () => {
        document.removeEventListener( 'mousedown', ()=>{setIsDown( true )});
        document.removeEventListener( 'mouseup', ()=>{setIsDown( false )});
    }
    }, [])
    
  return (
    <div className={ isDown ? 'cursor click' : 
                    cursorOver ? 'cursor hover' : 
                    width < 900 || height < 500 ? 'cursor mobile' : 'cursor'}  
        style={{left: clientX, top: clientY,
                 transform: "translate(-50%, -50%)",}}>   
    </div>
  )
}
