import * as S from "./style.js"
import { NavLink } from "react-router-dom";
export const Login = () => {
   /*return (<div>
    <h1>Логин</h1>
   </div>)*/
   return ( <>
    <S.GlobalStyle />
    <S.Wrapper>
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <NavLink to="/">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </NavLink>
          <S.ModalinputLogin
           type="text"
            name="login"
            placeholder="Почта"
          />
          <S.Modalinput
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalBtnEnter>
            <NavLink to ="/" >Войти</NavLink>
          </S.ModalBtnEnter>
          <S.ModalBtnSignup>
            <NavLink to ="/register">Зарегистрироваться</NavLink>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  </S.Wrapper>
  </>
    );
    };