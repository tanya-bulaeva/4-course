import * as S from "./style.js";
import { useState } from "react";
import { formatTime } from "../../helpers.js";
import { pagePlaylists, playTrack, setTrackCurrent } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { PlaylistSelector,  isTrackPlayingSelector,  pagePlaylistSelector,  tracksSelectors } from "../../store/selectors/index.js";
import { useUserContext } from "../../context/user.jsx";
import { useDislikeTrackMutation, useLikeTrackMutation } from "../../services/favoriteTrack.js";
import { useNavigate } from "react-router-dom";
export function Tracklists({loading}){
const dispatch = useDispatch()
const tracks = useSelector(PlaylistSelector)//все работает, но получаем все треки,нет избр//
//но если сделать  useSelector(pagePlaylistSelector) чтобы получить данные конкретного плейлиста, 
//то сначала оказывает правильно количество треков (это видно в консоли), но потом возникает ошибка Cannot read properties of undefined (reading 'map') Tracklists
const selectedTrack = useSelector(tracksSelectors)
const isPlaying = useSelector(isTrackPlayingSelector)
    const user = useUserContext()
    const navigate = useNavigate()

  const AllTrackPlaylist = tracks.map((track, id) =>{
    const { name, author, album, duration_in_seconds } = track;
    const isCurrentPlaying = selectedTrack  && track.id === selectedTrack.id;
    
return (
  <S.PlaylistItem key ={id}>
  <S.PlaylistTrack>
    <S.TrackTitle>
      {loading ? ( <S.TrackTitleImage>
{isCurrentPlaying ?  

( isPlaying ? (<S.BlinkingDotActive/>) : (<S.BlinkingDot/>) )
: (<S.TrackTitleSvg alt="music">  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>)

}

      </S.TrackTitleImage>) : 
      ( <S.TrackTitleImageSkeleton/>)
    }

  {loading ? ( <S.TrackTitleText>
        <S.TrackTitleLink  onClick={() =>  {dispatch(setTrackCurrent(track))}}> {name}
          <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
      </S.TrackTitleText>) : 
      (<S.TrackTitleTextSkeleton >
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
      <S.TrackTimeSvg alt="time" >
      <use xlinkHref="/img/icon/sprite.svg#icon-like" ></use> )
       
        
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
