import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js"
import Search from "../search/Search.jsx"
import { pagePlaylists, setCurrentPlaylist } from "../../store/actions/creators/index.js"
import { useEffect } from "react"

export default function Playlist ({loading, title}) {
  const playlist = useSelector(pagePlaylistSelector)
  const tracks = useSelector(PlaylistSelector)
  const selectedTrack = useSelector(tracksSelectors)
  const isPlaying = useSelector(isTrackPlayingSelector)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(pagePlaylists(playlist))//получить плейлист
  console.log(playlist)
  })
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
          <Tracklists loading = {loading}></Tracklists>
      </S.CenterblockContent></>
    )
}


//{playlist.map((track) =>  track.name)}