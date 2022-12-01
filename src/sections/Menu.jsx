import { motion }  from 'framer-motion'
import {Link } from 'react-router-dom';
import { useEffect } from "react";



export const Menu = ({ showBg, setCursorOver,start,toggle,setToggleHeader }) => {


  const onAboutMe = () =>{
    return {__html: start ?  `
    <div class='marquee__inner'>
        <span>About Me</span>
        <span>About Me</span>
        <span>About Me</span>
        <span>About Me</span>
    </div>` : ``};
  };

  const onWork = () =>{
    return {__html: start ?  `
    <div class='marquee__inner'>
      <span>Work</span>
      <span>Work</span>
      <span>Work</span>
      <span>Work</span>
    </div>` : ``};
  };

  const  onContact= () =>{
    return {__html: start ?  `
    <div class='marquee__inner'>
      <span>Contact</span>
      <span>Contact</span>
      <span>Contact</span>
      <span>Contact</span>
    </div>` : ``};
  };

  const handleSettings = (state) =>{
    toggle( state )
    showBg( state )
    setCursorOver( state )
  };


  return (
    <section className="content-home"
    onLoad={
      useEffect(() => {
          setToggleHeader( true )
        }, [])
  }
    >

      {/* Items */}
      <Link
          className={start ? 'outline' : ""}
          to='/aboutme'
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
                onMouseLeave ={() => {
                  handleSettings(false)
                }}

                dangerouslySetInnerHTML={ onAboutMe() }>

          </motion.div>
      </Link>

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
                 onMouseEnter={() => {
                  handleSettings(true)
                }}
                onMouseLeave={() => {
                  handleSettings(false)
                }}  dangerouslySetInnerHTML={ onWork() }>

          </motion.div>
      </Link>

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
                }}  dangerouslySetInnerHTML={ onContact() }>

          </motion.div>
      </Link>

    </section>


  )
}
