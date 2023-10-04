import * as S from "./style.js"
import { Link } from "react-router-dom";
export const Register = () => {
 /* return (<div>
    <h1>Регистрация</h1>
   </div>)
*/
    return (<>
    <S.GlobalStyle />
       <S.Wrapper>
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <Link to="../">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSignupEnt>
            <Link to="/login">Зарегистрироваться</Link>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  </S.Wrapper></>
    );
    };