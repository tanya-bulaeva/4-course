import * as S from "./style.js"
import { useSelector } from "react-redux";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js"
export default function FilterByGenre (){
       const tracks = useSelector(pagePlaylistSelector) 
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