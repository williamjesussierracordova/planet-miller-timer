import React, { useRef, useEffect, useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";


const MusicButton = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // necesitamos que el color del boton cambie segun el tema de la pagina


  return (
    <div className="music-button-container">
      <button className="music-button" onClick={() => setIsPlaying(!isPlaying)} style={{outline:'none'}}>
        {isPlaying ? <HiSpeakerWave/> : <HiSpeakerXMark/>}
      </button>
      <audio ref={audioRef} loop>
        <source src="src\components\background-music.webm" type="audio/webm" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicButton;