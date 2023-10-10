import * as S from "./style.js";
import { NavLink } from "react-router-dom";
export default function Logo(){
  return (  <S.NavLogo>
    <NavLink to = "/">
    <S.LogoImage src="/img/logo.png" alt="logo" />
    </NavLink>
  </S.NavLogo>)

}