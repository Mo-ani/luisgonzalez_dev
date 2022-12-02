import { useEffect } from "react";
import { AboutMeItem } from '../components/AboutMeItem';
import { WorkItem } from '../components/WorkItem';
import { ContactMeItem } from '../components/ContactMeItem';



export const Menu = ({ showBg, setCursorOver,start,toggle,setToggleHeader,setFooterAbsolute }) => {


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
          setFooterAbsolute( true )
        }, [])
  }
    >

      {/* Items */}
      <AboutMeItem start={start} handleSettings={handleSettings} onAboutMe={onAboutMe}/>

      <WorkItem start={start} handleSettings={handleSettings} onWork={onWork}/>

      <ContactMeItem start={start} handleSettings={handleSettings} onContact={onContact}/>

    </section>


  )
}
