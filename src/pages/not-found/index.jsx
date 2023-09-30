import * as S from "./style.js"

export const NotFound = () => {
 /*   return (<div>
        <h1>Страница не найдена</h1>
       </div>)*/
    return (
    <><S.GlobalStyle />
    <S.Wrapper>
        <S.ContainerEnter>
            <S.NotFoundConteiner>
                <S.Title>404</S.Title>
                <S.TitleContent>Страница не найдена</S.TitleContent>
                <S.TitleContentDescription>Возможно, она была удалена или перенесена на другой адрес</S.TitleContentDescription>
                <S.ButtonBackMain to = "/">Вернуться на главную</S.ButtonBackMain>
        </S.NotFoundConteiner>
        </S.ContainerEnter>
    </S.Wrapper>
    </>
    );
    };