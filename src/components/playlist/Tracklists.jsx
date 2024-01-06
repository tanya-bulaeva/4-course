import * as S from "./style.js";
import { formatTime } from "../../helpers.js";
import {  resetState, pagePlaylists, setTrackCurrent } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { isTrackPlayingSelector,  pagePlaylistSelector,  tracksSelectors } from "../../store/selectors/index.js";

import { useNavigate } from "react-router-dom";
import { useDislikeTrackMutation, useLikeTrackMutation } from "../../services/favoriteTrack.js";
import { useUserContext } from "../../context/user.jsx";
export function Tracklists({loading, track, tracks}){
const {user} = useUserContext()
//console.log(user)
const dispatch = useDispatch()
const tracklist = useSelector(pagePlaylistSelector)
const selectedTrack = useSelector(tracksSelectors)
const isPlaying = useSelector(isTrackPlayingSelector)
const isCurrentPlaying = selectedTrack?.id !== track.id
const navigate = useNavigate()
  const isUserLike = Boolean(track.stared_user  ?  (track.stared_user?.find((track) => track?.id === user.id)) : true)
  //   const isUserLike = useMemo(() => {
  //   const track = tracklist?.find((elem) => elem?.id === selectedTrack?.id)
  //   if (track && !track?.stared_user) return true
  //   if (track) return track.stared_user?.find((item) => item.id === user.id)
  //   else return selectedTrack?.stared_user?.find((item) => item.id === user.id)
  // }, [tracklist, selectedTrack, user])
 const [isLiked, setIsLiked] = useState(isUserLike)
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()

  useEffect(() => {
    setIsLiked(isUserLike)
  }, [isUserLike ])

  const handleLike = async (id) => {
    setIsLiked(true)
    try {
      await likeTrack({ id }).unwrap() 
      // getTrack()
      // .then((playlist) => {
      //   dispatch(pagePlaylists(playlist))//получить плейлист
  
      //   //console.log (playlist)
      // })
      const originalPlaylist = tracklist;
      const item = originalPlaylist?.find((elem) => elem.id === id)
      item.stared_user.push(user)
      dispatch(pagePlaylists(originalPlaylist))
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
        dispatch(resetState())
      }
    }
  }

  const handleDislike = async (id) => {
    setIsLiked(false)//дизлайк убирается только со 2 клика
    try {
      await dislikeTrack({ id }).unwrap()
      // getTrack()
      // .then((playlist) => {
      //   dispatch(pagePlaylists(playlist))//получить плейлист
  
      //   //console.log (playlist)
      // })
      const originalPlaylist = tracklist;
      console.log(1);
      const item = originalPlaylist?.find((elem) => elem.id === id)
      const index = item.stared_user.findIndex((i) => i.id === user.id)
      item.stared_user.splice(index, 1)
      dispatch(pagePlaylists(originalPlaylist))
    } catch (error) {
      if (error.status == 401) {
        navigate('/login')
        dispatch(resetState())
      }
    }
  }

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