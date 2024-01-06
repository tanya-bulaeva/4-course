import * as S from "../main/style";
import { useState, useEffect, useRef } from 'react';
import NavMenu from "../../components/navMenu/NavMenu";

import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import Playlist from "../../components/playlist/Playlist";

import { useDispatch, useSelector } from "react-redux";
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, tracksSelectors} from "../../store/selectors";
import { pagePlaylists, setCurrentPlaylist } from "../../store/actions/creators";
import { useGetMyTracksQuery } from "../../services/favoriteTrack";


export const Favorites = ({   tracksError, setTracksError, tracks}) => {
const [loading, setLoading] = useState(false);
const playlist = useSelector(pagePlaylistSelector)
const { data } = useGetMyTracksQuery()
const dispatch = useDispatch()

useEffect(() => {
  dispatch(pagePlaylists(data))
  console.log (data)
}, [data])//получение



//без этого не убираются скелетоны
useEffect(() => {
  // Заводим таймер
  const timerId = setInterval(() => setLoading(!loading), 5000);		
  // Данная функция вызывается при удалении компонента из DOM
  return () => {
      // Наводим порядок после удаления компонента
      clearInterval(timerId);
  };
}, []);


    return (        <>

{data?.length > 0 ? ( <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  title={"Мои треки"} hiden={true}/> ) : ("В плейлист не добавлены треки либо произошла ошибка загрузки")}
    </>
    );
 };