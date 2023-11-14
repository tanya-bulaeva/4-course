import * as S from "./style.js"
import { useUserContext } from "../../context/user.jsx"

import { useDispatch } from "react-redux";
import { resetState } from "../../store/actions/creators/index.js";

export default function UserAccount (){
  const { user, logout } = useUserContext();
  const dispatch = useDispatch() 
  const handleLogout = () => {
    logout()
    dispatch(resetState())
  }
//console.log (user.username)
  return ( 

    <S.SidebarPersonal> 
      <S.SidebarPersonalName >{user.username}</S.SidebarPersonalName>   
    <S.SidebarIcon to="/login" onClick = {handleLogout}>
      <svg alt="logout">
        <use xlinkHref="/img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>

  )
  } 





