import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { PlaylistSelector, filterSelector, isTrackPlayingSelector, pagePlaylistSelector, searchSelector, tracksSelectors } from "../../store/selectors/index.js"
import Search from "../search/Search.jsx"
import { filterYear, pagePlaylists, setCurrentPlaylist, setTrackCurrent } from "../../store/actions/creators/index.js"
import { useEffect, useMemo, useState } from "react"
import { useUserContext } from "../../context/user.jsx"
import { useNavigate } from "react-router-dom"
import Filter from "../filter/Filter.jsx"
import FilterByArtist from "../filter/FilterByArtist.jsx"


export default function Playlist ({loading, title, hiden}) {
  const playlist = useSelector(pagePlaylistSelector)
  const filter = useSelector(filterSelector)
  const originalPlaylist = playlist
  const search = useSelector(searchSelector)
  const dispatch = useDispatch() 
  const setUpTrack = (track) => {
    dispatch(setTrackCurrent(track))
    dispatch(setCurrentPlaylist(playlist))
  }

  const [filterItems, setFilterItems] = useState([
    { id: 1, text: "По умолчанию" },
    { id: 2, text: "Сначала новые" },
    { id: 3, text: "Сначала старые" },
  ]);

const tracks = useMemo(() => {
  const newPlaylist = originalPlaylist
  .filter((track) => {
    if (search === '') return originalPlaylist;
    else  {
    return  track.name.toLowerCase().includes(search.toLowerCase()) || track.author.toLowerCase().includes(search.toLowerCase()) 
    }
    //реализовать Ничего не найдено
    }).sort((a, b) => {
      let dateA = new Date(a.release_date)
      let dateB = new Date(b.release_date)
    if (filter.year === "<") return dateA - dateB
    else if (filter.year === ">") return dateB - dateA
    else return originalPlaylist
    })
  // console.log(newPlaylist )
    return newPlaylist
}, [ filter, originalPlaylist, search])  
   return (<>
        <S.CenterblockH2>{title}</S.CenterblockH2>
        <S.CenterblockContent >
        
         {hiden ? ('') : (<Filter data = {true} />)}
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
          {tracks?.map((track) =>  <Tracklists key = {track.id}  track= {track} loading = {loading}  onclick = {() => setUpTrack(track)}/>)}
          </S.ContentPlaylist>
      </S.CenterblockContent></>
    )
}