import * as S from "./style.js"

export default function FilterByArtist ({tracks}){
    return (<S.DropStyle>
<S.DropdownContent>
{tracks.map((track) => (<S.FilterLink key = {track.id}>
    {track.author}
</S.FilterLink>
))}
</S.DropdownContent>
</S.DropStyle>
)
}