import * as S from "./style";
import { useState, useEffect } from 'react';
import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import Playlist from "../../components/playlist/Playlist";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { pagePlaylist } from "../../store/actions/creators";
import { getTrack } from "../../api";
export const Main = ({tracks, tracksError, setTracksError}) => {
 const  selectedTrack = useSelector(tracksSelectors);
 const dispatch = useDispatch();
 const [loading, setLoading] = useState(false);
 // const [currentTrack, setCurrentTrack] = useState (null);
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
      dispatch(pagePlaylist(playlist))//получить плейлист
    })
    .catch(() => {
      setTracksError("Не удалось загрузить плейлист, попробуйте позже")
    })
    .finally(() => setLoading(false))
}, [])


return (       <>
 <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  title={"Треки"}  /> 

</>
);
};