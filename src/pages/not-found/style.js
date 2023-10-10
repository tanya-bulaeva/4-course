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
    url("../fonts/StratosSkyeng.woff2") format("woff2"),
    url("../fonts/StratosSkyeng.woff") format("woff");
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
width: 431px;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
color: white;
left: calc(50% - (366px / 2));
top: calc(50% - (439px / 2));
`

export const TitleError = styled.h1`
font-size: 160px;
font-style: normal;
font-weight: 400;
line-height: 168px
`
export const Title = styled.div`
display: flex;
gap: 10px
`
export const TitleContent = styled.p`
font-family: StratosSkyeng;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 40px;
`
export const TitleImg = styled.img`
width: 52px;
height: 52px;
`
export const TitleContentDescription = styled.p`
width: 245px;
color: #4E4E4E;
text-align: center;
font-variant-numeric: lining-nums proportional-nums;
/* Desk • 1366/Text M */
font-family: StratosSkyeng;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.054px;
margin-top: 19px;
`
export const ButtonBackMain = styled(NavLink)`
width: 278px;
font-size: 18px;
height: 52px;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.054px;
flex-shrink: 0;
background-color: #580ea2;
border-radius: 6px;
margin-top: 36px;
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
export const MainStyle = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`

export const ContainerStyle = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`
export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`