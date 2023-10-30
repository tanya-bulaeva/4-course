import * as S from "../main/style";
import Playlist from "../../components/playlist/Playlist";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "../../components/collections/CategoryItems.jsx";
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, tracksSelectors} from "../../store/selectors";
import { pagePlaylists, setCurrentPlaylist } from "../../store/actions/creators";
import { getCategory, getTrack, getTrackCategory } from "../../api";
import Collections from "../../components/collections/Collections";
export const Category = ({}) => {
  const params = useParams();
  
  const category = CategoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
  const categoryName = `${category.name}`;
  const [loading, setLoading] = useState(false);
  const tracks = useSelector(tracksSelectors)
  const playlist = useSelector(pagePlaylistSelector)
  const dispatch = useDispatch()
  const [tracksError, setTracksError] = useState(null)
console.log (playlist)
  useEffect(() => {
   // setLoading(true)
        getCategory(category.id)
      .then((playlist) => {
        dispatch(pagePlaylists(playlist))//получить плейлист
      })
      .catch(() => {
        setTracksError("Не удалось загрузить плейлист, попробуйте позже")
      })
 //     .finally(() => setLoading(false))
  }, [category.id])
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
  return (       <>

        <Playlist loading = {loading}  tracksError = {tracksError}  title={categoryName}  hiden = {true}   /> 

</>
    );
    };