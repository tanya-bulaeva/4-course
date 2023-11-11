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
import { useDislikeTrackMutation, useGetMyTracksQuery, useLikeTrackMutation } from "../../services/favoriteTrack";
import { useUserContext } from "../../context/user";


export const Favorites = ({   tracksError, setTracksError, tracks}) => {
//const [playlistError, setPlaylistError ] = useState();
//const  selectedTrack = useSelector(tracksSelectors);
const [loading, setLoading] = useState(false);
//const tracks = useSelector(tracksSelectors)
const playlist = useSelector(pagePlaylistSelector)
const { data } = useGetMyTracksQuery()
const dispatch = useDispatch()
const track = useSelector(tracksSelectors)
useEffect(() => {
  dispatch(pagePlaylists(data))
//console.log (data)
}, [data])//получение
const {user} = useUserContext()
const isUserLike = track.stared_user  ?  (track.stared_user?.find((track) => track?.id === user.id)) : true
  const [isLiked, setIsLiked] = useState(isUserLike)
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()
  const handleLike = async (id) => {
    setIsLiked(true)
    try {
      await likeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')

      }
    }
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    try {
      await dislikeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
      }
    }
  }
  useEffect(() => {
    setIsLiked(isUserLike)
  }, [isUserLike, track])

//без этого не убираются скелетоны
useEffect(() => {
  // Заводим таймер
  const timerId = setInterval(() => setLoading(!loading), 3000);		
  // Данная функция вызывается при удалении компонента из DOM
  return () => {
      // Наводим порядок после удаления компонента
      clearInterval(timerId);
  };
}, []);


    return (        <>

 <Playlist loading = {loading} tracks={data} tracksError = {tracksError}  title={"Мои треки"} hiden={true}    /> 
    </>
    );
 };