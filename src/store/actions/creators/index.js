import {CURRENT_PLAYLIST, NEXT_TRACK, PREVIOUS_TRACK, SET_CURRENT_TRACK, SHUFFLE_PLAYLIST, PLAY_TRACK, PAUSE_TRACK, REPEAT_TRACK, PAGE_PLAYLIST, SEARCH, FILTER_BY_ARTIST, FILTER_BY_GENRE, FILTER_BY_YEAR} from '../types/index'

export const setCurrentPlaylist = (playlist) => ({
  type: CURRENT_PLAYLIST,
  payload: playlist,
})

export const nextTrack = (track) => ({
  type: NEXT_TRACK,
  payload: track,
});

export const prevTrack = (track) => ({
  type: PREVIOUS_TRACK,
  payload: track,
});


export const setTrackCurrent = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
})


export const shufflePlaylist = () => ({
  type: SHUFFLE_PLAYLIST,

})

export const playTrack = () => ({
  type: PLAY_TRACK,
})

export const pauseTrack = () => ({
  type: PAUSE_TRACK,
})

export const repeatTrack = () => ({
  type: REPEAT_TRACK,
})

export const pagePlaylists = (playlist) => ({
  type: PAGE_PLAYLIST,
  payload: playlist,
})

export const searchPage = (value) => ({
  type: SEARCH,
  payload: value,
})

export const filterArtist = (value ) => ({
  type: FILTER_BY_ARTIST,
  payload: ListArtist ,
})

export const filterGenre = (value) => ({
  type: FILTER_BY_GENRE,
  payload: value,
})

export const filterYear = (value) => ({
  type: FILTER_BY_YEAR,
  payload: value,
})