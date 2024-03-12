
import { CategoryList } from "./CategoryList.jsx";
import * as S from "./style.js";
export default function Collections({loading, tracks, tracksError }){

return (
  <S.SidebarBlock>
<S.SidebarList>
<CategoryList loading={loading} tracks = {tracks} tracksError={tracksError}   />
  </S.SidebarList>
  </S.SidebarBlock>


)
}