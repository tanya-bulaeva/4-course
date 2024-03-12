
import { useState, useEffect} from 'react';
import Playlist from "../../components/playlist/Playlist";
import { useDispatch, useSelector } from "react-redux";
import { pagePlaylistSelector} from "../../store/selectors";
import { pagePlaylists} from "../../store/actions/creators";
import { useGetMyTracksQuery } from "../../services/favoriteTrack";


export const Favorites = ({   tracksError, tracks}) => {
const [loading, setLoading] = useState(false);
const { data } = useGetMyTracksQuery()
const dispatch = useDispatch()

useEffect(() => {
  dispatch(pagePlaylists(data))
}, [data])




    return (        <>

{data?.length > 0 ? ( <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  title={"Мои треки"} hiden={true}/> ) : ("В плейлист не добавлены треки либо произошла ошибка загрузки")}
    </>
    );
 };

