import * as S from "./style.js"
import { useState } from 'react';
import Logo from "../logo/Logo.jsx";
import { NavLink } from "react-router-dom";
export default function NavMenu (){
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
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
            <S.MenuItem>
              <S.Menulink to="/login">Войти</S.Menulink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>) 
        : ('')}
      </S.MainNav>
    )
}
