import * as S from "./style.js"

export default function FilterByGenre ({tracks}){
   /* return (
<S.DropStyle>
<S.DropdownContent>
<S.FilterLink>Рок</S.FilterLink>
<S.FilterLink>Хип-хоп</S.FilterLink>
<S.FilterLink> Поп-музыка</S.FilterLink>
<S.FilterLink>Техно</S.FilterLink>
<S.FilterLink>Инди</S.FilterLink>
<S.FilterLink>Металл</S.FilterLink>
<S.FilterLink>Классическая музыка</S.FilterLink>
</S.DropdownContent>
</S.DropStyle>
    )*/
    return (<S.DropStyle>
        <S.DropdownContent>
        {tracks.map((track) => (<S.FilterLink key = {track.id}>
            {track.genre}
        </S.FilterLink>
        ))}
        </S.DropdownContent>
        </S.DropStyle>
        )

}