import { useSelector } from "react-redux";
import { tracksSelectors } from "../../store/selectors";
import * as S from "./style.js"
import Sidebar from "../sidebar/Sidebar";
import NavMenu from "../navMenu/NavMenu";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import UserAccount from "../userAccount/UserAccount";
import Collections from "../collections/Collections";
import Playlist from "../playlist/Playlist";
import MediaPlayer from "../mediaplayer/MediaPlayer";



export default function MainBlock({loading, tracksError, children})
{
const selectedTrack = useSelector(tracksSelectors)


return (<>
    <S.GlobalStyle />
<S.WrapperStyle>
  <S.ContainerStyle>
    <S.MainStyle>
    <NavMenu />
      <S.MainCenterblock>
    <Search />

      <Filter  />
      <p>{tracksError}</p>
      {children}
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    
    </S.MainStyle>
     {selectedTrack  ? (<MediaPlayer loading = {loading}   />) : null} 
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
)
}