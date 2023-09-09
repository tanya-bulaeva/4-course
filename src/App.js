import './App.css';
import NavMenu from './components/navMenu.js'
import Search from './components/search.js';
import Filter from './components/filter.js';
import UserAccount from './components/userAccount.js';
import Collections from './components/collections.js';
import Playlist from './components/playlist.js';
import MediaPlayer from './components/mediaPlayer.js';
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
        <NavMenu />
          <div className="main__centerblock centerblock">
        <Search />
            <h2 className="centerblock__h2">Треки</h2>
          <Filter />
          <Playlist />      
          </div>
          <div className="main__sidebar sidebar">
        <UserAccount />
        <Collections />
          </div>
        </main>
        <MediaPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
