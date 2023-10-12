import * as S from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, getToken } from "../../api.js";
import { useUserContext } from "../../context/user.jsx";
export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const {login} = useUserContext()
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


await loginUser({email, password}).then ((loginData) => {
getToken({email, password}).then ((tokenData) => {
  login(loginData, tokenData.access)
})

//   window.location.href ='/'
   console.log (user)
})
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
          <Link to="/login">
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