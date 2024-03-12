import { useSelector } from "react-redux";
import { tracksSelectors } from "../../store/selectors";
import * as S from "./style.js"
import NavMenu from "../navMenu/NavMenu";
import UserAccount from "../userAccount/UserAccount";
import Collections from "../collections/Collections";
import MediaPlayer from "../mediaplayer/MediaPlayer";
import { useState, useEffect } from "react";


export default function MainBlock({  tracksError, children})
{
const selectedTrack = useSelector(tracksSelectors)
const [loading, setLoading] = useState(false);

useEffect(() => {
   const timerId = setInterval(() => setLoading(!loading), 500);		
   return () => {

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