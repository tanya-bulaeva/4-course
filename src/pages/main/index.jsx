
import { useState, useEffect } from 'react';
import Playlist from "../../components/playlist/Playlist";
import { useDispatch} from "react-redux";
import { pagePlaylists } from "../../store/actions/creators";
import { getTrack } from "../../api";
export const Main = ({tracks, tracksError, setTracksError}) => {
  const dispatch = useDispatch();
 const [loading, setLoading] = useState(false);



 useEffect(() => {
  setLoading(true)
  getTrack()
    .then((playlist) => {

      dispatch(pagePlaylists(playlist))

    })
    .catch((error) => {
      setTracksError("Не удалось загрузить плейлист, попробуйте позже")
    })
    .finally(() => setLoading(false))
}, [])

return (       <>
 <Playlist loading = {loading} setLoading ={setLoading} tracks={tracks} tracksError = {tracksError}  title={"Треки"}   /> 

</>
);
};