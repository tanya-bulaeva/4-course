import { useState, useEffect } from "react";
import {AppRoutes} from "./routes"
import { getTrack } from "./api";


function App() {
const [user, setUser] = useState(false);
const [tracks, setTracks] = useState([]);
const [currentTrack, setCurrentTrack] = useState (null);
const [isTrackLoading, setIsTrackLoading ] = useState (false);
const [tracksError, setTracksError] = useState(null)

useEffect(() => {
try {
  setIsTrackLoading (true);//состояние загрузки началось
  setTracksError(null);
  getTrack().then((tracks) => {
  console.log(tracks);//проверка что получаем из апи
  setTracks(tracks);
})//получение из апи треков
} catch(error) {
  setTracksError(error.message)//если ошибка
} finally{
  setIsTrackLoading (false)//состояние загрузки закончилось после получения данных из апи
}

}, [])

  const handleLogin = () =>   {
 localStorage.setItem('user', true)// setItem(key, value) – сохранить пару ключ/значение.
 setUser(localStorage.getItem('user'));} //getItem(key) – получить данные по ключу key.
 console.log(localStorage);
 console.log (user);



  const handleLogout = () => setUser(localStorage.clear());//clear() – удалить всё.

  return (
        <AppRoutes user={user} onAuthButtonClick={ user ? handleLogout : handleLogin } tracks = {tracks}  tracksError={tracksError} />
  );
}

export default App;

