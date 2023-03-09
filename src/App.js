import logo from './logo.svg';
import './App.css';
import Navbar from './componet/Navbar';
import DetailSong from './componet/DetailSong';
import ListSong from './componet/ListSong';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Playsing from './componet/Playsing';
function App() {
  return (
    <div className="App bg-black">
      <Songs.Provider value={{DataSongs}}>
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
