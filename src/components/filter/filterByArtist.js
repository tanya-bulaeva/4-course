import * as S from "./style.js"
import { tracks } from "../playlist/tracks.js"

export default function FilterByArtist (){
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