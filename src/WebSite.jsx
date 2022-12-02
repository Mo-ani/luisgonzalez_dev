import { useState } from 'react'
import {HashRouter as Router, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fab from '@fortawesome/free-brands-svg-icons';
import * as icons from '@fortawesome/free-solid-svg-icons';

import { Menu } from './sections/Menu';
import { AboutMe } from './sections/AboutMe';
import { Work } from './sections/Work';
import { Contact } from './sections/Contact';

import { Cursor } from './components/Cursor';
import { Start } from './components/Start';
import { useAudio } from './hooks/useAudio';
import { UseWindowSize } from './hooks/UseWindowSize';


//Probando comentarios
export const WebSite = () => {  
    const [showBg, setShowBg] = useState(false)
    const [cursorOver, setCursorOver] = useState(false)
    const [start, setStart] = useState(false)
    const [toggleHeader, setToggleHeader] = useState(true)
    const [ playing, toggle ] = useAudio( 'https://www.mboxdrive.com/signalsound.mp3' );
    const [ footerAbsolute, setFooterAbsolute] = useState(false)


  return (
    
    <div className='container'>
        <Cursor cursorOver={cursorOver} />
        <img className={ showBg ? 'bg-show' : 'bg-hidden' } src="https://i.postimg.cc/tT02byd3/bg-video-OSC.gif" />

        <header className={ toggleHeader ? 'header-show' : 'header-hidden'}>
            <img src="https://i.postimg.cc/mDMp1hZp/logobg.png" alt="logo" />   
        </header>
       
        <Start start={start} setStart={setStart} setCursorOver={ setCursorOver }/>
        <Router>
            <Routes>
                <Route path="/" element={<Menu 
                                            start={start}
                                            showBg={ setShowBg } 
                                            setCursorOver={ setCursorOver } 
                                            setToggleHeader={setToggleHeader} 
                                            toggle={toggle}
                                            setFooterAbsolute={setFooterAbsolute}/>} />
                <Route path="/aboutme" element={<AboutMe 
                                                    setStart={setStart} 
                                                    setCursorOver={setCursorOver} 
                                                    setToggleHeader={setToggleHeader} 
                                                    setFooterAbsolute={setFooterAbsolute}/>}/>
                <Route path="/work" element={<Work 
                                                setStart={setStart} 
                                                setCursorOver={setCursorOver} 
                                                setToggleHeader={setToggleHeader} />}/>
                <Route path="/contactme" element={<Contact 
                                                    setStart={setStart} 
                                                    setCursorOver={setCursorOver} 
                                                    setToggleHeader={setToggleHeader} />}/>
            </Routes>
        </Router>
        <footer className={footerAbsolute ? 'absolute': ''}>
            <div className="welcome">“sino quien menos necesita” -Buda-</div>
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
