import { useState, useEffect } from "react";
import {AppRoutes} from "./routes"
import { getTrack } from "./api";


function App() {
const [user, setUser] = useState(false);
const [tracks, setTracks] = useState([]);
const [currentTrack, setCurrentTrack] = useState (null);
const [loading, setloading] = useState (false);
const [tracksError, setTracksError] = useState(null)


 const handleLogin = () =>   {
 localStorage.setItem('user', true)// setItem(key, value) – сохранить пару ключ/значение.
 setUser(localStorage.getItem('user'));} //getItem(key) – получить данные по ключу key.
 console.log(localStorage);
console.log (user);

  const handleLogout = () => setUser(localStorage.clear());//clear() – удалить всё.

  
useEffect(() => {
 async function getAllTracks (){
try {
  setloading (true);//состояние загрузки началось
  setTracksError(null);
  await getTrack().then((tracks) => {
  console.log(tracks);//проверка что получаем из апи
  setTracks(tracks);
})//получение из апи треков
} catch(error) {
  setTracksError(error.message)//если ошибка
} finally{
  setloading(false)//состояние загрузки закончилось после получения данных из апи
}

  }
  getAllTracks ()
}, [])


  return (
        <AppRoutes user={user} onAuthButtonClick={ user ? handleLogin : handleLogout }  loading = {loading}  tracks = {tracks} setTracks = {setTracks}  tracksError={tracksError} setCurrentTrack = {setCurrentTrack} currentTrack={currentTrack}/>
  );
}

export default App;

