import * as S from "./style.js"
export function Tracklists({loading, tracks, setCurrentTrack}){
  console.log(tracks)
    return (<>
        {tracks.map((track) => (
        <> 
          <S.ContentPlaylist key = {track.id} onClick={() => setCurrentTrack(track)}>
            <S.PlaylistItem>
            <S.PlaylistTrack>
              <S.TrackTitle>
                {loading ? (                  <S.TrackTitleImage>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImage>) : (              <S.TrackTitleImageSkeleton>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImageSkeleton>)}
            {loading ? (                <S.TrackTitleText>
                  <S.TrackTitleLink href="http://"
                    > {track.name}
                    <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
                </S.TrackTitleText>) : (              <S.TrackTitleTextSkeleton>
                <S.TrackTitleLinkSkeleton  href="http://"
                  >{track.name}
                  <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLinkSkeleton>
              </S.TrackTitleTextSkeleton>)}

              </S.TrackTitle>

              {loading ? (              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
              </S.TrackAuthor>) : (            <S.TrackAuthorSkeleton>
              <S.TrackAuthorLinkSkeleton href="http://">{track.author}</S.TrackAuthorLinkSkeleton>
            </S.TrackAuthorSkeleton>)}

{loading ? (              <S.TrackAlbum  >
                <S.TrackAlbumLink href="http://"
                  > {track.album}</S.TrackAlbumLink>
              </S.TrackAlbum >) : (            <S.TrackAlbumSkeleton >
              <S.TrackAlbumLinkSkeleton href="http://"
                >{track.album}</S.TrackAlbumLinkSkeleton>
            </S.TrackAlbumSkeleton>)}

{loading ? (              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText >{track.duration_in_seconds}</S.TrackTimeText>
              </S.TrackTime>) : (            <S.TrackTimeSkeleton>
              <S.TrackTimeSvgSkeleton alt="time">
              </S.TrackTimeSvgSkeleton>
              <S.TrackTimeTextSkeleton >{track.time}</S.TrackTimeTextSkeleton>
            </S.TrackTimeSkeleton>)}


            </S.PlaylistTrack>
            </S.PlaylistItem>
            </S.ContentPlaylist></>
       )
        )}
      </>
    )
}