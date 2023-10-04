import { CategoryList } from "./categoryList.js";
import * as S from "./style.js";
//import { NavLink } from "react-router-dom";
export default function Collections({loading}){

return (
  <S.SidebarBlock>
<S.SidebarList>
<CategoryList loading={loading} />
  </S.SidebarList>
  </S.SidebarBlock>


)
}