import * as S from "./style.js";

export const SelectedTrack = ({currentTrack }) => {
return (
  <S.PlayerTrackPlay >
    <S.TrackPlayContain >
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>

                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>

                      <S.TrackPlayAuthorLink href="http://">{currentTrack ? (currentTrack.name) : (null)}</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">{currentTrack ? (currentTrack.author) : (null)}</S.TrackPlayAlbumLink>
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

}