import { useState, useEffect } from "react";
import {AppRoutes} from "./routes"
import { getTrack } from "./api";
import { UserProvaider } from "./context/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPlaylist } from "./store/actions/creators";


function App() {
const [user, setUser] = useState(null);
const dispatch = useDispatch()
const [loading, setLoading] = useState (false);
const [tracksError, setTracksError] = useState(null)
const navigate = useNavigate()
const [selectedTrack, setSelectedTrack] = useState()

useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 300);		
    return () => {
        clearInterval(timerId);
    };
}, []);

 const handleLogin = () =>   {
 localStorage.setItem('user', true)
 setUser(localStorage.getItem('user'));}



  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', {replace : true})
 };

useEffect(() => {

  getTrack()
    .then((playlist) => {

      dispatch(setCurrentPlaylist(playlist))
    })
    .catch(() => {
      setTracksError("Не удалось загрузить плейлист, попробуйте позже")
    })

}, [])

  return (
    <UserProvaider>
        <AppRoutes user={user} onAuthButtonClick= { handleLogin} loading = {loading}  setLoading ={setLoading}  tracksError={tracksError} selectedTrack={selectedTrack} setSelectedTrack ={setSelectedTrack}   />
        </UserProvaider>
  );
}

export default App;

