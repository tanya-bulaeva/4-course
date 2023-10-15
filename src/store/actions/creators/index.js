import {ADD_PLAYLIST, NEXT_TRACK, PAGE_PLAYLIST, PREVIOUS_TRACK, SET_CURRENT_TRACK, SHUFFLE_PLAYLIST, TOGGLE_SHUFFLE} from '../types/index'
import { PLAY_TRACK, PAUSE_TRACK } from '../types/index';

export const addPlaylist = (playlist) => ({
  type: ADD_PLAYLIST,
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

export const toggleShuffle = (track) => ({
  type: TOGGLE_SHUFFLE,
  payload: track,
})

export const shufflePlaylist = () => ({
  type: SHUFFLE_PLAYLIST,
  payload: track,
})

export const pagePlaylist = (playlist) => ({
  type: PAGE_PLAYLIST,
  payload: playlist,
})

export const playTrack = () => ({
  type: PLAY_TRACK,
//  payload: track,
})

export const pauseTrack = () => ({
  type: PAUSE_TRACK,
//  payload: track,
})