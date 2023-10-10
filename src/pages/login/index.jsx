import * as S from "./style.js";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
   /*return (<div>
    <h1>Логин</h1>
   </div>)*/
   const navigate = useNavigate()
   const handleButtonClick = () => {
    localStorage.getItem('user') //getItem(key) – получить данные по ключу key.
    navigate('/', {replace: true})
   }
   return ( <>
    <S.GlobalStyle/>
    <S.Wrapper>
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <Link to="/">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
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
          <S.ModalBtnEnter type="button" onClick={handleButtonClick}>
            Войти
          </S.ModalBtnEnter>
          <S.ModalBtnSignup>
            <Link to ="/register">Зарегистрироваться</Link>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  </S.Wrapper>
  </>
    );
    };