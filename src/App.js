import { useState, useEffect } from "react";
import {AppRoutes} from "./routes"
//import { getTrack } from "./api";


function App() {
const [user, setUser] = useState(false);
//const [tracks, setTracks] = useState([]);
//const [currentTrack, setCurrentTrack] = useState (null);
   

  const handleLogin = () =>   {
    localStorage.setItem('user', true)// setItem(key, value) – сохранить пару ключ/значение.
    setUser(localStorage.getItem('user'));} //getItem(key) – получить данные по ключу key.
 console.log(localStorage);
 console.log (user);



/*useEffect(() => {
getTrack().then((tracks) => {
  console.log(tracks);
  setTracks(tracks.tracks)
})

}, [])*/
  const handleLogout = () => setUser(localStorage.clear());//clear() – удалить всё.

  /*return (
        <AppRoutes user={user} onAuthButtonClick={ user ? handleLogout : handleLogin } tracks = {tracks} setTracks ={setTracks} currentTrack = {currentTrack} setCurrentTrack ={setCurrentTrack} />

  );*/

  return (
    <AppRoutes user={user} onAuthButtonClick={ user ? handleLogout : handleLogin } />

);
}

export default App;

/*
  return (
        <>
        <S.GlobalStyle />
    <S.WrapperStyle>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <Search />
            <S.CenterclockH2>Треки</S.CenterclockH2>
          <Filter />
          <Playlist loading = {loading} />      
          </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
        <Collections loading = {loading}/>
          </S.MainSidebar>
        </S.MainStyle>
        <MediaPlayer loading = {loading}/>
        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.WrapperStyle>
</>
  );*/