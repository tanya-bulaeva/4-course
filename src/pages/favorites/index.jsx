import * as S from "../main/style";
import { useState, useEffect, useRef } from 'react';
import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";

export const Favorites = ({loading, currentTrack, tracks, tracksError, setCurrentTrack, user}) => {
 /* return (
    <div>
      <h1>Мой плейлист</h1>
    </div>
  )*/
   /* const [loading, setLoading] = useState(false)
    useEffect(() => {
          // Заводим таймер
          const timerId = setInterval(() => setLoading(!loading), 5000);		
          // Данная функция вызывается при удалении компонента из DOM
          return () => {
              // Наводим порядок после удаления компонента
              clearInterval(timerId);
          };
      }, []);*/
    return (        <>
        <S.GlobalStyle />
    <S.WrapperStyle>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <Search />
            <S.CenterclockH2>Мой плейлист</S.CenterclockH2>
                    </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
          </S.MainSidebar>
                  </S.MainStyle>

        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.WrapperStyle>
    </>
    );

        };