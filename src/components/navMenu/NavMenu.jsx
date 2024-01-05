import * as S from "./style.js"
import { useState } from 'react';
import Logo from "../logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/user.jsx"
import { resetState } from "../../store/actions/creators/index.js";
export default function NavMenu (){
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
  const { logout } = useUserContext();
  const handleLogout = () => {
    logout()
    dispatch(resetState())
  }
    return (
        <S.MainNav>
        <Logo />
        <S.NavBurger onClick ={toggleVisibility}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
        {openMenu ? 
        (<S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.Menulink to="/">Главное</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink to="/favorites">Мой плейлист</S.Menulink>
            </S.MenuItem>
            <S.MenuItem onClick = {handleLogout}>
              <S.Menulink to="/login">Выйти</S.Menulink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>) 
        : ('')}
      </S.MainNav>
    )
}
