import * as S from "./style.js"
import { useUserContext } from "../../context/user.jsx"

export default function UserAccount (){
  const { user, logout } = useUserContext();
  
  const handleLogout = () => {
    logout()
  }
console.log (user.username)
  return ( 

    <S.SidebarPersonal> <S.SidebarPersonalName >{user.username}</S.SidebarPersonalName>   
    <S.SidebarIcon to="/login" onClick = {handleLogout}>
      <svg alt="logout">
        <use xlinkHref="/img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>

  )
  } 





