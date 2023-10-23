import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { PlaylistSelector, pagePlaylistSelector } from "../../store/selectors/index.js"
import Search from "../search/Search.jsx"
import { pagePlaylist, setCurrentPlaylist } from "../../store/actions/creators/index.js"

export default function Playlist ({loading, title }) {
  const setUpTrack = (track) => {
    dispatch(setCurrentTrack(track))
    dispatch(setCurrentPlaylist(list))
  }
   return (<>
        <S.CenterclockH2>{title}</S.CenterclockH2>
        <S.CenterblockContent >
         
          <S.ContentTitle>
            <S.PlaylistTitleCol01 className="col01">Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02 className="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03 className="col03">АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04 className="col04">
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitle>
          <Tracklists loading ={loading} onclick={() => setUpTrack(track)} />
      </S.CenterblockContent></>
    )
}


