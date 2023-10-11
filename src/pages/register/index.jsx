import * as S from "./style.js"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const [error, setError] = useState(null)
  
  const handleRegister = async  (e) => {
   e.preventDefault();
   
try{
  
if (!email){
  setError("Введите почту")
  return
}
if (!password){
  setError("Введите пароль")
  return
}
if (!confirmPassword){
  setError("Подтвердите пароль")
  return
}
if (password !== confirmPassword){
  setError('Пароли не совпадают')
  return
}

}catch(error){
  setError(error.message)
}

}

    return (<>
    <S.GlobalStyle />
       <S.Wrapper>
    <S.ContainerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <Link to="../login">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value = {email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}


          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value = {password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}

          />
          <S.ModalInput
            type="password"
            name="confirm-password"
            placeholder="Повторите пароль"
            value = {confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}

          />
          {error ? (<S.Error>{error}</S.Error>) : ('')}
          <S.ModalBtnSignupEnt onClick={handleRegister}>
           Зарегистрироваться
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerSignup>
  </S.Wrapper></>
    );
    };