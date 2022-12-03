import { useEffect } from "react";
import { AboutMeItem } from '../components/AboutMeItem';
import { WorkItem } from '../components/WorkItem';
import { ContactMeItem } from '../components/ContactMeItem';
import { UseWindowSize } from "../hooks/UseWindowSize";



export const Menu = ({ setCursorOver,setToggleHeader,setFooterAbsolute,start,toggle,showBg }) => {
  
  const [width, height] = UseWindowSize() 


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
    width < 900 ? toggle(false) : toggle( state ) 
    width < 900 ? showBg(false) : showBg( state )
    width < 900 ? setCursorOver(false) : setCursorOver( state )
  };


  return (
    <section className="content-home"
    onLoad={
      useEffect(() => {
          setToggleHeader( true )
          setFooterAbsolute( true )
        }, [])
  }
    >

      {/* Items */}
      <AboutMeItem start={start} handleSettings={handleSettings} setToggleHeader={setToggleHeader} onAboutMe={onAboutMe}/>

      <WorkItem start={start} handleSettings={handleSettings} setToggleHeader={setToggleHeader} onWork={onWork}/>

      <ContactMeItem start={start} handleSettings={handleSettings} setToggleHeader={setToggleHeader} onContact={onContact}/>

    </section>


  )
}
