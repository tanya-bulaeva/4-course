
import { CategoryList } from "./CategoryList.jsx";
import * as S from "./style.js";
//import { NavLink } from "react-router-dom";
export default function Collections({loading, tracks, tracksError, currentTrack, setCurrentTrack, Audioref }){

return (
  <S.SidebarBlock>
<S.SidebarList>
<CategoryList loading={loading} tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} ref = {Audioref}  />
  </S.SidebarList>
  </S.SidebarBlock>


)
}