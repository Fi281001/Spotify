import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from "../Context";
export default function Playsing(){
    const {Song, handleSetSong} = useContext(Songs)


   const HandleNext = ()=>{
        handleSetSong(Song.id + 1)
    }
    const HandlePrevious = ()=>{
        handleSetSong(Song.id - 1)
    }
    return(
        <div>
       <AudioPlayer  
       className="player-music" 
       src={Song.url} 
       
       showSkipControls={true} showJumpControls={false}
       onClickNext={HandleNext}
       onClickPrevious={HandlePrevious}
       onEnded={HandleNext }
       />
        </div>
    )
}