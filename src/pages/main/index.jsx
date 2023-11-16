import * as S from "./style";
import { useState, useEffect } from 'react';
import Playlist from "../../components/playlist/Playlist";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { pagePlaylists } from "../../store/actions/creators";
import { getTrack } from "../../api";
import { useGetTracksQuery } from "../../services/favoriteTrack";
export const Main = ({tracks, tracksError, setTracksError}) => {
 const dispatch = useDispatch();
 const [loading, setLoading] = useState(false);
//const [playlist, setPlaylist] = useState(data)
useEffect(() => {
    // Заводим таймер
    const timerId = setInterval(() => setLoading(!loading), 3000);		
    // Данная функция вызывается при удалении компонента из DOM
    return () => {
        // Наводим порядок после удаления компонента
        clearInterval(timerId);
    };
}, []);

//  useEffect(() => {
//   getTrack()
//     .then((playlist) => {
//       dispatch(pagePlaylists(playlist))//получить плейлист

//       //console.log (playlist)
//     })
//    // .catch(() => {
//     //  setTracksError("Не удалось загрузить плейлист, попробуйте позже")
//   //  })
//  //   .finally(() => setLoading(false))
// }, [])
  const { data } = useGetTracksQuery()
 

  useEffect(() => {
   dispatch(pagePlaylists(data))
   //console.log (data)
   }, [data])//получение


return (       <>
 <Playlist loading = {loading} tracks={data} data = {data} tracksError = {tracksError}  setTracksError = {setTracksError}title={"Треки"}   /> 

</>
);
};