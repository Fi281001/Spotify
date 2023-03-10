import logo from './logo.svg';
import './App.css';
import Navbar from './componet/Navbar';
import DetailSong from './componet/DetailSong';
import ListSong from './componet/ListSong';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Playsing from './componet/Playsing';
import { useState } from 'react';
function App() {
  const [Song,setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong)=>{
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
    <div className="App ">
      <Songs.Provider value={{DataSongs, Song, handleSetSong}}>
      <Navbar/>
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        
          <DetailSong/>
         
          <ListSong/>
        </div>
        <Playsing/>
      </Songs.Provider>
       
    </div>
  );
}

export default App;
