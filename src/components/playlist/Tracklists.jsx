import * as S from "./style.js";
import { useState } from "react";
import { formatTime } from "../../helpers.js";
import { pagePlaylist, playTrack, setTrackCurrent } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { PlaylistSelector,  tracksSelectors } from "../../store/selectors/index.js";
export function Tracklists({loading}){
const dispatch = useDispatch()
const tracks = useSelector(PlaylistSelector)
const selectedTrack = useSelector(tracksSelectors)
   //     {isCurrentlyPlaying && <S.BlinkingDot></S.BlinkingDot>}
/*return (
  //загрузка данных их апи
<> 
 {tracks.map((track) => (
    <S.ContentPlaylist key = {track.id}  >
      <S.PlaylistItem >
      <S.PlaylistTrack>
        <S.TrackTitle>
          {loading ? (
            
            <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music"> 
             <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              
            </S.TrackTitleSvg>
          </S.TrackTitleImage>) : 
          ( <S.TrackTitleImageSkeleton>
        </S.TrackTitleImageSkeleton>)}

      {loading ? ( <S.TrackTitleText>
            <S.TrackTitleLink  onClick={() =>  {dispatch(setTrackCurrent(track))}}> {track.name}
              <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
          </S.TrackTitleText>) : 
          (<S.TrackTitleTextSkeleton>
          <S.TrackTitleLinkSkeleton>{track.name}
           </S.TrackTitleLinkSkeleton>
        </S.TrackTitleTextSkeleton>)}

        </S.TrackTitle>

        {loading ? ( <S.TrackAuthor>
          <S.TrackAuthorLink >{track.author}</S.TrackAuthorLink>
        </S.TrackAuthor>) : 
        ( <S.TrackAuthorSkeleton>
        <S.TrackAuthorLinkSkeleton >{track.author}</S.TrackAuthorLinkSkeleton>
      </S.TrackAuthorSkeleton>)}

{loading ? ( <S.TrackAlbum  >
          <S.TrackAlbumLink href="http://"
            > {track.album}</S.TrackAlbumLink>
        </S.TrackAlbum >) : (            <S.TrackAlbumSkeleton >
        <S.TrackAlbumLinkSkeleton 
          >{track.album}</S.TrackAlbumLinkSkeleton>
      </S.TrackAlbumSkeleton>)}

{loading ? (  <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText >{formatTime(track.duration_in_seconds)}</S.TrackTimeText>
        </S.TrackTime>) : 
        ( <S.TrackTimeSkeleton>
        <S.TrackTimeSvgSkeleton alt="time">
        </S.TrackTimeSvgSkeleton>
        <S.TrackTimeTextSkeleton >{track.time}</S.TrackTimeTextSkeleton>
      </S.TrackTimeSkeleton>)}


      </S.PlaylistTrack>
      </S.PlaylistItem>
      </S.ContentPlaylist>
 )
  )}
  </>)*/

  const AllTrackPlaylist = tracks.map((track, id) =>{
    const { name, author, album, duration_in_seconds } = track;
    const isCurrentPlaying = selectedTrack  && track.id === selectedTrack.id;
return (
  <S.PlaylistItem key ={id}>
  <S.PlaylistTrack>
    <S.TrackTitle>
      {loading ? (
         <S.TrackTitleImage>
         {isCurrentPlaying ? (<S.BlinkingDot/>) : (<S.TrackTitleSvg alt="music">  <use xlinkHref="img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>)}

      </S.TrackTitleImage>) : 
      ( <S.TrackTitleImageSkeleton>
    </S.TrackTitleImageSkeleton>)}

  {loading ? ( <S.TrackTitleText>
        <S.TrackTitleLink  onClick={() =>  {dispatch(setTrackCurrent(track))}}> {name}
          <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
      </S.TrackTitleText>) : 
      (<S.TrackTitleTextSkeleton>
      <S.TrackTitleLinkSkeleton>{name}
       </S.TrackTitleLinkSkeleton>
    </S.TrackTitleTextSkeleton>)}

    </S.TrackTitle>

    {loading ? ( <S.TrackAuthor>
      <S.TrackAuthorLink >{author}</S.TrackAuthorLink>
    </S.TrackAuthor>) : 
    ( <S.TrackAuthorSkeleton>
    <S.TrackAuthorLinkSkeleton >{author}</S.TrackAuthorLinkSkeleton>
  </S.TrackAuthorSkeleton>)}

{loading ? ( <S.TrackAlbum  >
      <S.TrackAlbumLink href="http://"
        > {album}</S.TrackAlbumLink>
    </S.TrackAlbum >) : (            <S.TrackAlbumSkeleton >
    <S.TrackAlbumLinkSkeleton 
      >{album}</S.TrackAlbumLinkSkeleton>
  </S.TrackAlbumSkeleton>)}

{loading ? (  <S.TrackTime>
      <S.TrackTimeSvg alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </S.TrackTimeSvg>
      <S.TrackTimeText >{formatTime(duration_in_seconds)}</S.TrackTimeText>
    </S.TrackTime>) : 
    ( <S.TrackTimeSkeleton>
    <S.TrackTimeSvgSkeleton alt="time">
    </S.TrackTimeSvgSkeleton>
    <S.TrackTimeTextSkeleton > </S.TrackTimeTextSkeleton>
  </S.TrackTimeSkeleton>)}


  </S.PlaylistTrack>
  </S.PlaylistItem>
)
  })
  return (<S.ContentPlaylist>{AllTrackPlaylist}</S.ContentPlaylist>  )
}


