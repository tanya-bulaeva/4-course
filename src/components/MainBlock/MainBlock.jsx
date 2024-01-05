import { useSelector } from "react-redux";
import { tracksSelectors } from "../../store/selectors";
import * as S from "./style.js"
import Sidebar from "../sidebar/Sidebar";
import NavMenu from "../navMenu/NavMenu";

import UserAccount from "../userAccount/UserAccount";
import Collections from "../collections/Collections";
import Playlist from "../playlist/Playlist";
import MediaPlayer from "../mediaplayer/MediaPlayer";
import { useState, useEffect } from "react";


export default function MainBlock({  tracksError, children})
{
const selectedTrack = useSelector(tracksSelectors)
const [loading, setLoading] = useState(false);
// const [currentTrack, setCurrentTrack] = useState (null);
useEffect(() => {
   // Заводим таймер
   const timerId = setInterval(() => setLoading(!loading), 3000);		
   // Данная функция вызывается при удалении компонента из DOM
   return () => {
       // Наводим порядок после удаления компонента
       clearInterval(timerId);
   };
}, []);
return (<>
    <S.GlobalStyle />
<S.WrapperStyle>
  <S.ContainerStyle>
    <S.MainStyle>
    <NavMenu />
      <S.MainCenterblock>


      <p>{tracksError}</p>
      {children}
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    
    </S.MainStyle>
     {selectedTrack  ? (<MediaPlayer loading = {loading} selectedTrack = {selectedTrack }  />) : null} 
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
)
}