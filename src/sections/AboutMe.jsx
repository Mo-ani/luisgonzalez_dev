import { motion } from 'framer-motion';
import React, { useEffect } from 'react'



export const AboutMe = ({setStart,setCursorOver,setFooterAbsolute,setToggleHeader}) => {

  return (
    <div
        className='about-me'
        onLoad={
            useEffect(() => {
                setStart( true )
                setFooterAbsolute( false )
                setToggleHeader(false)
              }, [])
        }
    >
        <div className='content-main'>
            <div className='info'>

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

                <div className='description'> I USE MY PASSION AND SKILLS
                    TO CREATE DIGITAL PRODUCTS AND
                    EXPERIENCES. NATIONAL AND
                    INTERNATIONAL CUSTOMERS RELY ON
                    ME FOR DESIGN, IMPLEMENTATION, AND
                    MANAGEMENT OF THEIR DIGITAL
                    </div>
                </div>
            
            <div className='graphic'>

            </div>
        </div>


            {/* Atras */}
            {/* <Link
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
            >Atras</Link> */}
    </div>


  )
}
