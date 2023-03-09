import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function Playsing(){
    return(
        <div>
       <AudioPlayer  className="player-music" src="" showSkipControls={true} showJumpControls={false}/>
        </div>
    )
}