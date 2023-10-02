import * as S from "./style.js"
export function Tracklists({tracks, setCurrentTrack}){
  console.log(tracks)
    return (<>
        {tracks.map((track) => (
        <> 
          <S.ContentPlaylist key = {track.id} onClick={() => setCurrentTrack(track)}>
            <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                  <S.TrackTitleImage>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="http://"
                    > {track.name}
                    <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
              </S.TrackAuthor>

              <S.TrackAlbum  >
                <S.TrackAlbumLink href="http://"
                  > {track.album}</S.TrackAlbumLink>
              </S.TrackAlbum >

              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText >${track.duration_in_seconds}</S.TrackTimeText>
              </S.TrackTime>

            </S.PlaylistTrack>
            </S.PlaylistItem>
            </S.ContentPlaylist></>
       )
        )}
      </>
    )
}