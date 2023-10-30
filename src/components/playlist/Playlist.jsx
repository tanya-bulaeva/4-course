import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, searchSelector, tracksSelectors } from "../../store/selectors/index.js"
import Search from "../search/Search.jsx"
import { pagePlaylists, setCurrentPlaylist, setTrackCurrent } from "../../store/actions/creators/index.js"
import { useEffect, useMemo } from "react"
import { useUserContext } from "../../context/user.jsx"
import { useNavigate } from "react-router-dom"
import Filter from "../filter/Filter.jsx"


export default function Playlist ({loading, title, hiden}) {
  const playlist = useSelector(pagePlaylistSelector)
  const search = useSelector(searchSelector)
  const dispatch = useDispatch() 
  const setUpTrack = (track) => {
    dispatch(setTrackCurrent(track))
    dispatch(setCurrentPlaylist(playlist))
  }

   return (<>
        <S.CenterblockH2>{title}</S.CenterblockH2>
        <S.CenterblockContent >
        
         {hiden ? ('') : (<Filter />)}
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
          <S.ContentPlaylist>
          {playlist?.map((track) =>  <Tracklists key = {track.id}  track= {track} loading = {loading} onclick = {() => setUpTrack(track)}/>)}
          </S.ContentPlaylist>
      </S.CenterblockContent></>
    )
}