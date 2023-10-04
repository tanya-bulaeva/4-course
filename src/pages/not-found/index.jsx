import Logo from "../../components/logo/logo.js";
import NavMenu from "../../components/navMenu/navMenu.js";
import * as S from "./style.js"
import Search from '../../components/search/search.js';
import UserAccount from '../../components/userAccount/userAccount.js';
import MediaPlayer from '../../components/mediaplayer/mediaPlayer.js';
export const NotFound = () => {
 /*   return (<div>
        <h1>Страница не найдена</h1>
       </div>)*/
  /*  return (
    <><S.GlobalStyle />
    <S.Wrapper>
        <S.ContainerEnter>
           <NavMenu />      
            <S.NotFoundConteiner>
                <S.Title>404</S.Title>
                <S.TitleContent>Страница не найдена</S.TitleContent>
                <S.TitleContentDescription>Возможно, она была удалена или перенесена на другой адрес</S.TitleContentDescription>
                <S.ButtonBackMain to = "/">Вернуться на главную</S.ButtonBackMain>
        </S.NotFoundConteiner>
        </S.ContainerEnter>
    </S.Wrapper>
    </>
    );*/
    return (       <>
        <S.GlobalStyle />
    <S.Wrapper>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <Search />
        <S.NotFoundConteiner>
                <S.TitleError>404</S.TitleError>
                <S.Title>
                <S.TitleContent>Страница не найдена</S.TitleContent>
                <S.TitleImg src="../img/crying.png" alt="emodji" />
                </S.Title>
                <S.TitleContentDescription>Возможно, она была удалена или перенесена на другой адрес</S.TitleContentDescription>
                
                <S.ButtonBackMain to = "/">Вернуться на главную</S.ButtonBackMain>
        </S.NotFoundConteiner>
           </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
          </S.MainSidebar>
        </S.MainStyle>
        <MediaPlayer />
        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.Wrapper>
    </>
        );
    



    };