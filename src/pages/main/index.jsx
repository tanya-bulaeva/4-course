import * as S from "./style";
import { useState, useEffect } from 'react';
import NavMenu from "../../components/navMenu/navMenu.js"
import Search from '../../components/search/search.js';
import Filter from '../../components/filter/filter.js';
import UserAccount from '../../components/userAccount/userAccount.js';
import Collections from '../../components/collections/collections';
import Playlist from '../../components/playlist/playlist.js';
import MediaPlayer from '../../components/mediaplayer/mediaPlayer.js';
export const Main = ({tracks, tracksError, currentTrack, setCurrentTrack }) => {
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
      {tracksError ? (<p>Возникла ошибка, попробуйте позже</p>) : (<Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}  currentTrack = {currentTrack }  setCurrentTrack = {setCurrentTrack } />      )}
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    </S.MainStyle>
    {currentTrack ? (<MediaPlayer loading = {loading} tracks={tracks} currentTrack = {currentTrack} setCurrentTrack = {setCurrentTrack} />) : (null)}
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
);
};