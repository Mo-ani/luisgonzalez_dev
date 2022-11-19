import React, { useState, useEffect } from "react";

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = ( isOver ) => setPlaying(isOver);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
      playing ? audio.loop = true : audio.pause();
      playing ? audio.volume = 0.2 : audio.pause();
    },
    [playing]
    
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  
  return [playing, toggle];
};