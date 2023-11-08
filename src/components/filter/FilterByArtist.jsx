import * as S from "./style.js"
import { useDispatch, useSelector } from "react-redux"
import { filterSelector, pagePlaylistSelector } from "../../store/selectors/index.js"
import { filterArtist } from "../../store/actions/creators/index.js";
import { useState } from "react";
export default function FilterByArtist (){
    const tracks = useSelector(pagePlaylistSelector)
    const dispatch = useDispatch()
    const filter = useSelector(filterSelector)
    function onlyUnique(value, index, tracks) {
        return tracks.indexOf(value) === index;
      }
const ArtistChange  = (artist) => {
//dispatch(filterArtist(tracks))
console.log(1);

}

    const TrackAuthor = tracks.map((track) =>  track.author)
    const uniqueItem = TrackAuthor.filter(onlyUnique)     
    const uniqueList = uniqueItem.map((e) => <S.FilterLink key = {e.id} onClick={ArtistChange}>
      {e}</S.FilterLink>)
//console.log(uniqueList);
const [filterValue, setFilterValue] = useState (null);

    return (<S.DropStyle>

<S.DropdownContent>

{uniqueList}


</S.DropdownContent>
</S.DropStyle>
)
}

//  {tracks?.map((track) => <S.FilterLink  key = {track.id}onClick={ArtistChange}>{track.author}</S.FilterLink>)}