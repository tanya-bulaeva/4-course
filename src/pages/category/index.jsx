import * as S from "../main/style";
import Playlist from "../../components/playlist/Playlist";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "../../components/collections/CategoryItems.jsx";
import { pagePlaylistSelector, tracksSelectors} from "../../store/selectors";
import { pagePlaylists } from "../../store/actions/creators";
import { getCategory  } from "../../api";
import { useUserContext } from "../../context/user.jsx";
import { useDislikeTrackMutation, useGetMyTracksQuery, useGetTracksCategoryIdQuery, useLikeTrackMutation } from "../../services/favoriteTrack.js";

export const Category = ( ) => {
  const params = useParams();
  
  const category = CategoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
  const categoryName = `${category.name}`;
  const [loading, setLoading] = useState(false);
  const { id } = useParams()
 const { data } = useGetTracksCategoryIdQuery(id)

  
   useEffect(() => {
     dispatch(pagePlaylists(data))
   console.log (data)
   }, [data])//получение


 
  const dispatch = useDispatch()
  const [tracksError, setTracksError] = useState(null)
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

        <Playlist loading = {loading} tracks = {data } tracksError = {tracksError}    title={categoryName}  hiden = {true}   /> 

</>
    );
    };