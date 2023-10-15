/*import * as S from "./style.js";
import { playTrack,  pauseTrack } from "../../store/actions/creators/index.js";
import { trackCurrent } from "../../store/actions/creators/index.js";
import { useSelector } from "react-redux";
import { trackSelector, isTrackPlayingSelector } from "../../store/selectors/index.js";
export const SelectedTrack = () => {

return (
  <S.PlayerTrackPlay >
    <S.TrackPlayContain >
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>

                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>

                      <S.TrackPlayAuthorLink href="http://">{selectedTrack? (selectedTrack.name) : (null)}</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">{selectedTrack ? (selectedTrack.author) : (null)}</S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                  
                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike className="_btn-icon">
                      <S.TrackPlayLikeSvg  alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike className="_btn-icon">
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                      
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>  
                  
                         </S.PlayerTrackPlay>
)

}*/