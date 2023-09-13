import { useState, useEffect } from 'react';
import './App.css';
import NavMenu from './components/navMenu.js'
import Search from './components/search.js';
import Filter from './components/filter/filter.js';
import UserAccount from './components/userAccount.js';
import Collections from './components/collections.js';
import Playlist from './components/playlist.js';
import MediaPlayer from './components/mediaPlayer.js';
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
		// Заводим таймер
		const timerId = setInterval(() => setLoading(!loading), 5000);		
		// Данная функция вызывается при удалении компонента из DOM
		return () => {
			// Наводим порядок после удаления компонента
			clearInterval(timerId);
		};
	}, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
        <NavMenu />
          <div className="main__centerblock centerblock">
        <Search />
            <h2 className="centerblock__h2">Треки</h2>
          <Filter />
          <Playlist loading = {loading} />      
          </div>
          <div className="main__sidebar sidebar">
        <UserAccount />
        <Collections loading = {loading}/>
          </div>
        </main>
        <MediaPlayer loading = {loading}/>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
