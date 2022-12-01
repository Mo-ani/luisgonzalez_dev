import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


export const AboutMe = ({setStart,setCursorOver, setToggleHeader}) => {

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

        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay: 0.2,
                opacity: { duration: 1 },
                default: { ease: "linear" }
              }}
            className='title'>
                Hola soy luis
                <h2 className='line'>
                    Gonzalez
                </h2>
        </motion.div>


            {/* Atras */}
            <Link
            className='atras'
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
