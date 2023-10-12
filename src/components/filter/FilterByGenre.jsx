import * as S from "./style.js"

export default function FilterByGenre ({tracks}){

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