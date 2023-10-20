import { useState, useEffect } from "react";
import {AppRoutes} from "./routes"
import { getTrack } from "./api";
import { UserProvaider } from "./context/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPlaylist } from "./store/actions/creators";

function App() {
const [user, setUser] = useState(null);
const dispatch = useDispatch()
const [loading, setLoading] = useState (false);
const [tracksError, setTracksError] = useState(null)
const navigate = useNavigate()

 const handleLogin = () =>   {
 localStorage.setItem('user', true)// setItem(key, value) – сохранить пару ключ/значение.
 setUser(localStorage.getItem('user'));} //getItem(key) – получить данные по ключу key.
 console.log(localStorage);


  const handleLogout = () => {
    setUser(localStorage.clear())//clear() – удалить всё.
    navigate('/login', {replace : true})
 };

useEffect(() => {
 async function getAllTracks (){
try {
  setLoading (true);//состояние загрузки началось
  setTracksError(null);
  await getTrack().then((data) => {
 console.log(data);//проверка что получаем из апи
  dispatch(addPlaylist(data))
})//получение из апи треков
} catch(error) {
  setTracksError("error.message")//если ошибка
} finally{
  setLoading(false)//состояние загрузки закончилось после получения данных из апи
}
}
  getAllTracks ()
}, [])

/*
useEffect(() => {
  setLoading(true)
  getTrack()
    .then((tracks) => {
      dispatch(addPlaylist(tracks))
      //console.log(tracks)
    })
    .catch(() => {
      setPlaylistError("Не удалось загрузить плейлист, попробуйте позже")
    })
    .finally(() => setLoading(false))
}, [])*/


//onAuthButtonClick= {user ? handleLogout : handleLogin} 
  return (
    <UserProvaider>
        <AppRoutes user={user} onAuthButtonClick= { handleLogin} loading = {loading}   tracksError={tracksError} />
        </UserProvaider>
  );
}

export default App;

