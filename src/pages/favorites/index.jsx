import * as S from "../main/style";
import { useState, useEffect, useRef } from 'react';
import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import Playlist from "../../components/playlist/Playlist";

import { useDispatch, useSelector } from "react-redux";
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, tracksSelectors } from "../../store/selectors";
import { pagePlaylist } from "../../store/actions/creators";

export const Favorites = ({   tracksError,   Audioref}) => {

const dispatch = useDispatch();
const [playlistError, setPlaylistError ] = useState();
const  selectedTrack = useSelector(tracksSelectors);
const [loading, setLoading] = useState(false);
const tracks = useSelector(PlaylistSelector)
const playlist = useSelector(pagePlaylistSelector)


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
        <S.GlobalStyle />
    <S.WrapperStyle>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <Search />
            <S.CenterclockH2>Мой плейлист</S.CenterclockH2>
        <Playlist loading = {loading} tracks={tracks} tracksError = {tracksError}   ref = {Audioref} />
                    </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
          </S.MainSidebar>
              {selectedTrack  ? (<MediaPlayer loading = {loading} tracks={tracks}   />) : null} 
                  </S.MainStyle>

        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.WrapperStyle>
    </>
    );

        };