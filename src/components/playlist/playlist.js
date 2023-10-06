import * as S from "./style.js"
import { Tracklists } from "./tracklists.js"

export default function Playlist ({loading, tracks, setCurrentTrack, currentTrack }) {
    return (<>
        <S.CenterblockContent >
          <S.ContentTitle>
            <S.PlaylistTitleCol01 className="col01">Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02 className="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03 className="col03">АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04 className="col04">
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitle>
          <Tracklists loading ={loading} tracks = {tracks}  currentTrack  = {currentTrack } setCurrentTrack = {setCurrentTrack}     />
      </S.CenterblockContent></>
    )
}

