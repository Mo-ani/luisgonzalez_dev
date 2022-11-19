import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fab from '@fortawesome/free-brands-svg-icons'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { ContentSection } from './sections/ContentSection'
import { useState } from 'react'
import { Cursor } from './components/Cursor'

export const WebSite = () => {  
    const [showBg, setShowBg] = useState(false)
    const [cursorOver, setCursorOver] = useState(false)

    
  return (
    
    <div className='container'>
        <Cursor cursorOver={cursorOver}/>
        <img className={ showBg ? 'bg-show' : 'bg-hidden' } src="https://i.postimg.cc/tT02byd3/bg-video-OSC.gif" />
        <header>
            <img src="https://i.postimg.cc/mDMp1hZp/logobg.png" alt="logo" />   
        </header>
        {/* content home */}
        <ContentSection  showBg={ setShowBg } setCursorOver={ setCursorOver }/>
        <footer>
            <div className="welcome">welcome, im luis gonzalez</div>
            <div className="info">
                <div className="controlers">
                    <span className='on'><FontAwesomeIcon icon={icons.faVolumeHigh} /></span>
                    <span className='off'><FontAwesomeIcon icon={icons.faVolumeXmark} /></span>
                </div>
                <div className="network ">
                    <p>follow me on:</p>
                    <a href="https://www.google.com/"><FontAwesomeIcon icon={fab.faLinkedinIn} /></a>
                    <a href="#"><FontAwesomeIcon icon={fab.faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={fab.faTwitter} /></a>
                </div>
            </div>
        </footer>
    </div>


  )
}
