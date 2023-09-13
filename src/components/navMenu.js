import { useState } from 'react';
export default function NavMenu (){
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div className="nav__burger burger" onClick ={toggleVisibility}>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
        {openMenu ? 
        (<div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">Главное</a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">Мой плейлист</a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">Войти</a>
            </li>
          </ul>
        </div>) 
        : ('')}
      </nav>
    )
}
