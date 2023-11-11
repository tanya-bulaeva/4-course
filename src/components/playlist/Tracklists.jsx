import * as S from "./style.js";
import { formatTime } from "../../helpers.js";
import { setTrackCurrent } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isTrackPlayingSelector,  pagePlaylistSelector,  tracksSelectors } from "../../store/selectors/index.js";

import { useNavigate } from "react-router-dom";
import { useDislikeTrackMutation, useLikeTrackMutation } from "../../services/favoriteTrack.js";
import { useUserContext } from "../../context/user.jsx";
export function Tracklists({loading, track, tracks}){
const {user} = useUserContext()
//console.log(user)
const dispatch = useDispatch()
 
const selectedTrack = useSelector(tracksSelectors)
const isPlaying = useSelector(isTrackPlayingSelector)
const isCurrentPlaying = selectedTrack?.id !== track.id
const navigate = useNavigate()
  const isUserLike = track.stared_user  ?  (track.stared_user?.find((track) => track?.id === user.id)) : true
  const [isLiked, setIsLiked] = useState(isUserLike)
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()
  const handleLike = async (id) => {
    setIsLiked(true)
    try {
      await likeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')

      }
    }
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    try {
      await dislikeTrack({ id }).unwrap()
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
      }
    }
  }
useEffect(() => {
  setIsLiked(isUserLike)
}, [isUserLike, track])
  const toggleLikeDislike = (id) => isLiked ? handleDislike(id) : handleLike(id)

  return (
  <S.PlaylistItem >
  <S.PlaylistTrack>
    <S.TrackTitle>
    {loading ? (
         <S.TrackTitleImage>
{isCurrentPlaying ?  (<S.TrackTitleSvg alt="music">  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use></S.TrackTitleSvg>):

( isPlaying ? (<S.BlinkingDotActive/>) : (<S.BlinkingDot/>) )
}

      </S.TrackTitleImage>) : 
      ( <S.TrackTitleImageSkeleton>
    </S.TrackTitleImageSkeleton>)}


  {loading ? ( <S.TrackTitleText>
        <S.TrackTitleLink  onClick={() =>  {dispatch(setTrackCurrent(track))}}> {track.name}
          <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLink>
      </S.TrackTitleText>) : 
      (<S.TrackTitleTextSkeleton >
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
  <S.TrackTimeSvg alt="time" onClick={() => toggleLikeDislike(track.id)}>
    {isLiked ? (<use xlinkHref="/img/icon/sprite.svg#icon-like" fill = "#ad61ff"></use>) : (<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>)}
        
      </S.TrackTimeSvg>
      <S.TrackTimeText >{formatTime(track.duration_in_seconds)}</S.TrackTimeText>
    </S.TrackTime>) : 
    ( <S.TrackTimeSkeleton>
    <S.TrackTimeSvgSkeleton alt="time">
    </S.TrackTimeSvgSkeleton>
    <S.TrackTimeTextSkeleton > </S.TrackTimeTextSkeleton>
  </S.TrackTimeSkeleton>)}
  </S.PlaylistTrack>
  </S.PlaylistItem>
)


}