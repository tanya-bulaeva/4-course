import * as S from "./style.js"
import { useSelector } from "react-redux"
import { pagePlaylistSelector } from "../../store/selectors/index.js"
export default function FilterByArtist (){
    const tracks = useSelector(pagePlaylistSelector)
    function onlyUnique(value, index, tracks) {
        return tracks.indexOf(value) === index;
      }
    const TrackAuthor = tracks.map((track) => track.author)
      const uniqueItem = TrackAuthor .filter(onlyUnique)     
      const uniqueList = uniqueItem.map((e) => <S.FilterLink key = {e.id}>
      {e}</S.FilterLink>)
    return (<S.DropStyle>
<S.DropdownContent>
{tracks.map((track) => track.author).filter(onlyUnique).map((e) => <S.FilterLink key = {e.id}>
{e}</S.FilterLink>)}
</S.DropdownContent>
</S.DropStyle>
)
}