import * as S from "./style";
import { useState, useEffect } from 'react';
import Playlist from "../../components/playlist/Playlist";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { pagePlaylists } from "../../store/actions/creators";
import { getTrack } from "../../api";
export const Main = ({tracks, tracksError, setTracksError}) => {
 const dispatch = useDispatch();
 const [loading, setLoading] = useState(false);

useEffect(() => {
    // Заводим таймер
    const timerId = setInterval(() => setLoading(!loading), 5000);		
    // Данная функция вызывается при удалении компонента из DOM
    return () => {
        // Наводим порядок после удаления компонента
        clearInterval(timerId);
    };
}, []);

 useEffect(() => {
  getTrack()
    .then((playlist) => {
      dispatch(pagePlaylists(playlist))//получить плейлист
      //console.log (playlist)
    })
    .catch(() => {
      setTracksError("Не удалось загрузить плейлист, попробуйте позже")
    })
    .finally(() => setLoading(false))
}, [])



return (       <>
 <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  title={"Треки"}   /> 

</>
);
};