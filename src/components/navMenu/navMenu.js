import * as S from "./style.js"
import { useState } from 'react';
export default function NavMenu (){
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
    return (
        <S.MainNav>
        <S.NavLogo>
          <S.LogoImage src="img/logo.png" alt="logo" />
        </S.NavLogo>
        <S.NavBurger onClick ={toggleVisibility}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
        {openMenu ? 
        (<S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.Menulink href="#">Главное</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink href="#">Мой плейлист</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink href="#">Войти</S.Menulink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>) 
        : ('')}
      </S.MainNav>
    )
}
