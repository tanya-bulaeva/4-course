
import Playlist from "../../components/playlist/Playlist";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "../../components/collections/CategoryItems.jsx";
import { pagePlaylistSelector} from "../../store/selectors";
import { pagePlaylists} from "../../store/actions/creators";
import { getCategory } from "../../api";
export const Category = ({tracks}) => {
  const params = useParams();
  const category = CategoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
  const categoryName = `${category.name}`;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const [tracksError, setTracksError] = useState(null)

  useEffect(() => {

        getCategory(category.id)
      .then((playlist) => {
        dispatch(pagePlaylists(playlist))
      })
      .catch(() => {
       setTracksError("Не удалось загрузить плейлист, попробуйте позже")
      })
  }, [category.id])

  return (       <>

<Playlist loading = {loading} tracksError = {tracksError}tracks={tracks} title={categoryName} hiden = {true} />

</>
    );
    };