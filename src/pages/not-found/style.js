import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../../../public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("../../../public/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

`
export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
font-family: "StratosSkyeng", sans-serif;
overflow: hidden;
`
export const ContainerEnter  = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: rgba(0, 0, 0, 0.85);
color: white;
`

export const NotFoundConteiner  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
left: calc(50% - (366px / 2));
top: calc(50% - (439px / 2));
`

export const Title = styled.h1`
font-size: 100px
`

export const TitleContent = styled.p`
font-size: 20px
`

export const TitleContentDescription = styled.p`
font-size: 16px;
margin-top: 20px;
color: #4e4e4e
`
export const ButtonBackMain = styled(NavLink)`
width: 278px;
font-size: 16px;
height: 52px;
background-color: #580ea2;
border-radius: 6px;
margin-top: 60px;
color: white;
margin-bottom: 20px;
border: none;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
:hover {
 background-color: #3f007d;
 }
 :active {
   background-color: #271a58;
   }
`