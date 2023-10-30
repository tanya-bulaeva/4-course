import * as S from "./style.js"
import { useSelector } from "react-redux"
import { pagePlaylistSelector } from "../../store/selectors/index.js"
export default function FilterByArtist (){
    const tracks = useSelector(pagePlaylistSelector)

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