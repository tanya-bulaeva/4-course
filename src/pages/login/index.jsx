import * as S from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  
  const handleLogin= async  (e) => {
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
            value = {email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <S.Modalinput
            type="password"
            name="password"
            placeholder="Пароль"
            value = {password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
           {error ? (<S.Error>{error}</S.Error>) : ('')}
          <S.ModalBtnEnter type="button" onClick={handleLogin}>
            Войти
          </S.ModalBtnEnter >
          <S.ModalBtnSignup >
            <Link to ="/register">Зарегистрироваться</Link>
          </S.ModalBtnSignup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  </S.Wrapper>
  </>
    );
    };