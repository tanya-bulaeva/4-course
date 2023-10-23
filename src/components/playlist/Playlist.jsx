import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { PlaylistSelector, isTrackPlayingSelector, pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js"
import Search from "../search/Search.jsx"
import { pagePlaylists, setCurrentPlaylist } from "../../store/actions/creators/index.js"
import { useEffect } from "react"
import { useUserContext } from "../../context/user.jsx"
import { useNavigate } from "react-router-dom"


export default function Playlist ({loading, title}) {
  const playlist = useSelector(pagePlaylistSelector)
   /*1.useSelector(pagePlaylistSelector) + (setCurrentPlaylist(playlist)) - на онс странице загружабся все треки, 
  но при переходе на стр мой плейлист возникает ошибка TypeError: Cannot read properties of undefined (reading 'map')
    at Tracklists (Tracklists.jsx:14:1)*/

  //2. если использовать useSelector(tracksSelectors) + (setCurrentPlaylist(playlist)) = сразу Uncaught TypeError: Cannot read properties of null (reading 'map')
  //3. если useSelector(PlaylistSelector) + (setCurrentPlaylist(playlist)) = на гланой отобр треки и на моем плейлисте отобр тоже самое (все треки из массива)
  //4. useSelector(PlaylistSelector) + (pagePlaylists(playlist)) - на главной отобр все треки, в моей плейлист также отображабтся все треки из массива
  //5.useSelector(PlaylistSelector) + //(setCurrentPlaylist(playlist))/ = на главной все треки, в моей плейлист также все треки подгр + const tracks = useSelector(pagePlaylistSelector) на стр мой плейлист
  const dispatch = useDispatch() 
  useEffect(() => {
  dispatch(setCurrentPlaylist(playlist))//(setCurrentPlaylist(playlist))/получить плейлист
  console.log(playlist)//(pagePlaylists(playlist))/в консоли отобрадается корректно - если зайти в учетку test - в консоли отображается колво треков в плейлисте
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
           <Tracklists   loading = {loading} ></Tracklists>
      </S.CenterblockContent></>
    )
}


//{playlist.map((track) =>  track.name)}