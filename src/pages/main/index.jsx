import * as S from "./style";
import { useState, useEffect } from 'react';
import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import Playlist from "../../components/playlist/Playlist";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import { tracksSelectors } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { pagePlaylist } from "../../store/actions/creators";
import { getTrack } from "../../api";
export const Main = ({tracks, tracksError, setTracksError, currentTrack, setCurrentTrack, Audioref, user,  }) => {
 const  selectedTrack = useSelector(tracksSelectors);
 const [playlistError, setPlaylistError ] = useState()
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
        setLoading(true)
        getTrack()
          .then((tracks) => {
            dispatch(pagePlaylist(tracks))
        //    console.log(tracks)
          })
          .catch(() => {
            setPlaylistError("Не удалось загрузить плейлист, попробуйте позже")
          })
          .finally(() => setLoading(false))
      }, [])
  




return (       <>
    <S.GlobalStyle />
<S.WrapperStyle>
  <S.ContainerStyle>
    <S.MainStyle>
    <NavMenu />
      <S.MainCenterblock>
    <Search />
        <S.CenterclockH2>Треки</S.CenterclockH2>
      <Filter tracks = {tracks} />
      {playlistError? (<p>Не удалось загрузить плейлист, попробуйте позже</p>) : (<Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  currentTrack = {currentTrack }  setCurrentTrack = {setCurrentTrack } ref = {Audioref} />      )}
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    </S.MainStyle>
     {selectedTrack  ? (<MediaPlayer loading = {loading} tracks={tracks} currentTrack = {currentTrack} setCurrentTrack = {setCurrentTrack} />) : null} 
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
);
};