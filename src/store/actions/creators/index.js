import { PAUSE_TRACK, PLAY_TRACK, CURRENT_TRACK } from "../types";


export const playTrack = () => ({
  type: PLAY_TRACK,

});

export const pauseTrack = () => ({
  type: PAUSE_TRACK,

});

export const trackCurrent = (track) => ({
  type: CURRENT_TRACK,
  payload: track,
})

