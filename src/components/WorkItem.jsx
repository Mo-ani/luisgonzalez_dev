import React from 'react'
import { motion }  from 'framer-motion'
import {Link } from 'react-router-dom';

export const WorkItem = ({start,handleSettings,onWork,setToggleHeader}) => {
  return (
        <Link
            className={start ? 'outline' : ""}
            to='/work'
            onMouseDown={ () => {
              handleSettings(false)
            }}
        >
            <motion.div
                   initial={{ opacity: 1, scale:0 }}
                   animate={start ? {scale:1} : ''}
                   whileHover={{ opacity: [0, 1] }}
                   className={start ? 'items' : ""}
                   id='work'
                   onMouseEnter={() => {
                    handleSettings(true)
                  }}
                  onMouseLeave={() => {
                    handleSettings(false)
                  }}  
                  onClick={() => {
                    setToggleHeader( false )
                  }}
                  dangerouslySetInnerHTML={ onWork() }>
                
            </motion.div>
        </Link>
  )
}
