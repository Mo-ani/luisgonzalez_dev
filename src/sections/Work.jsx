import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';



export const Work = ({setStart,setCursorOver, setToggleHeader}) => {
  
  return (
    <div 
        className='about-me'
        onLoad={
            useEffect(() => {
                setStart( true )
                setToggleHeader( false )
              }, [])              
        }
>  
        <div className='content'>Contenido de la pagina</div>
        <Link 
            to='/'
            onMouseEnter={()=>{
                setCursorOver(true);
            }}
            onMouseLeave={()=>{
                setCursorOver(false);
            }}

            onClick={ () => {
                setToggleHeader( true )
                setCursorOver(false);
            }}
        >Atras</Link>
</div>

    
  )
}
