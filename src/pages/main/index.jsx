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
import { Outlet } from "react-router-dom";
export const Main = ({tracks, tracksError, setTracksError,  Audioref }) => {
 const  selectedTrack = useSelector(tracksSelectors);
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
        setLoading(true)
        getTrack()
          .then((tracks) => {
            dispatch(pagePlaylist(tracks))
        //    console.log(tracks)
          })
          .catch(() => {
            setTracksError("Не удалось загрузить плейлист, попробуйте позже")
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
      <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError} ref = {Audioref} /> 
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    </S.MainStyle>
     {selectedTrack  ? (<MediaPlayer loading = {loading} tracks={tracks}     />) : null} 
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
);
};