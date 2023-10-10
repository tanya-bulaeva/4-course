import * as S from "./style.js"

export default function UserAccount (){
  return (  <S.SidebarPersonal>
    <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
    <S.SidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>)
}