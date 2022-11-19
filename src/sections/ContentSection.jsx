import { useAudio } from "../hooks/useAudio"
import { useState } from "react";
import { motion }  from 'framer-motion'


export const ContentSection = ({showBg, setCursorOver}) => {

  const [ playing, toggle ] = useAudio( 'https://www.mboxdrive.com/signalsound.mp3' )
  const [start, setStart] = useState(false)


  const onStart = () => {
    return {__html: start ?  `` : `<div>Start</div>`};
  };

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
    showBg( state )
    toggle( state )
    setCursorOver( state )
  };

  
  return (
    <section className="content-home"> 
      {/* start */}

      <div className={start ? "" : "start-btn"} 
      onClick={ () => {
        setStart(!start)
        setCursorOver( false );
      }} 
      onMouseEnter={() => {
        setCursorOver( true )
      }}
      onMouseLeave={() => {
        setCursorOver( false )
      }} dangerouslySetInnerHTML={ onStart() }
      ></div>

      {/* Items */}
      <div className={start ? 'outline' : ""}>
          <motion.div 
                 initial={{ opacity: 1, x:-100 }}
                 animate={start ? {x:0} : ''}
                 whileHover={{ opacity: [0, 1] }}
                 className={start ? 'items' : ""}  id="about-me"
                 onMouseEnter={() => {
                  handleSettings(true)
                }}
                onMouseLeave={() => {
                  handleSettings(false)
                }}  dangerouslySetInnerHTML={ onAboutMe() }>
                
          </motion.div>          
      </div>

      
      <div className={start ? 'outline' : ""}>
          <motion.div 
                 initial={{ opacity: 1, x:-100 }}
                 animate={start ? {x:0} : ''}
                 whileHover={{ opacity: [0, 1] }}
                 className={start ? 'items' : ""} id="work"
                 onMouseEnter={() => {
                  handleSettings(true)
                }}
                onMouseLeave={() => {
                  handleSettings(false)
                }}  dangerouslySetInnerHTML={ onWork() }>
                
          </motion.div>
      </div>
      
      <div className={start ? 'outline' : ""}>
          <motion.div 
                 initial={{ opacity: 1, x:-100 }}
                 animate={start ? {x:0} : ''}
                 whileHover={{ opacity: [0, 1] }}
                 className={start ? 'items' : ""}  id="contact"
                 onMouseEnter={() => {
                  handleSettings(true)
                }}
                onMouseLeave={() => {
                  handleSettings(false)
                }}  dangerouslySetInnerHTML={ onContact() }>
                
          </motion.div>

      </div>

    </section>
  )
}
