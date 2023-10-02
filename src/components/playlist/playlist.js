import * as S from "./style.js"
import { Tracklists } from "./tracklists.js"

export default function Playlist ({loading, tracks, tracksError, setCurrentTrack}) {
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
          {tracksError ? (<p>Плейлист не загружен, попробуйте позже</p>): (<Tracklists loading ={loading} tracks = {tracks} setCurrentTrack={setCurrentTrack}/>)}
          
      </S.CenterblockContent></>
    )
}

