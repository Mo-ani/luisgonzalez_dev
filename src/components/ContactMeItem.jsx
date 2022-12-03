import React from 'react'
import {Link } from 'react-router-dom';
import { motion }  from 'framer-motion';

export const ContactMeItem = ({start,handleSettings,onContact,setToggleHeader}) => {
  return (
        <Link
            className={start ? 'outline' : ""}
            to='/contactme'
            onMouseDown={ () => {
              handleSettings(false)
            }}
        >
            <motion.div
                   initial={{ opacity: 1, scale:0 }}
                   animate={start ? {scale:1 } : ''}
                   whileHover={{ opacity: [0, 1] }}
                   className={start ? 'items' : ""}
                   onMouseEnter={() => {
                    handleSettings(true)
                  }}
                  onMouseLeave={() => {
                    handleSettings(false)
                  }} 
                  onClick={() => {
                    setToggleHeader( false )
                  }}
                  dangerouslySetInnerHTML={ onContact() }>
                
            </motion.div>
        </Link>
  )
}
