import NavMenu from "../../components/navMenu/NavMenu.jsx";
import * as S from "./style.js"
import UserAccount from '../../components/userAccount/UserAccount.jsx';

export const NotFound = () => {
    return (       <>
        <S.GlobalStyle />
    <S.Wrapper>
      <S.ContainerStyle>
        <S.MainStyle>
        <NavMenu />
          <S.MainCenterblock>
        <S.NotFoundConteiner>
                <S.TitleError>404</S.TitleError>
                <S.Title>
                <S.TitleContent>Страница не найдена</S.TitleContent>
                <S.TitleImg src="/img/smile_crying.png" alt="emodji" />
                </S.Title>
                <S.TitleContentDescription>Возможно, она была удалена или перенесена на другой адрес</S.TitleContentDescription>
                
                <S.ButtonBackMain to = "/">Вернуться на главную</S.ButtonBackMain>
        </S.NotFoundConteiner>
           </S.MainCenterblock>
          <S.MainSidebar>
        <UserAccount />
          </S.MainSidebar>
        </S.MainStyle>
        <footer className="footer"></footer>
      </S.ContainerStyle>
    </S.Wrapper>
    </>
        );
    



    };