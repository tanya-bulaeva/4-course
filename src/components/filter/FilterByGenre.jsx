import * as S from "./style.js"
import { useSelector } from "react-redux";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js"
export default function FilterByGenre (){
       const tracks = useSelector(pagePlaylistSelector) 
       function onlyUnique(value, index, tracks) {
        return tracks.indexOf(value) === index;
      }

      const TrackGenre = tracks.map((track) =>track.genre)
      const uniqueItem = TrackGenre.filter(onlyUnique).map((e) => <S.FilterLink key = {e.id}>{e}</S.FilterLink>)     

   //   {tracks.map((track) => track.genre).filter(onlyUnique).map((e) => <S.FilterLink key = {e.id}>
//{e}</S.FilterLink>) }
    return (<S.DropStyle>
        <S.DropdownContent >
{uniqueItem}
        </S.DropdownContent>
        </S.DropStyle>
        )

}