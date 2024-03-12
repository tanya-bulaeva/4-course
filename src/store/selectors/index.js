export const tracksSelectors = (store) => store.audioplayer.track 
export const PlaylistSelector = (store) => store.audioplayer.playlist;
export const isTrackPlayingSelector = (store) => store.audioplayer.playing;
export const shuffledPlaylistSelector = (store) => store.audioplayer.shuffled;
export const repeatTrackSelector = (store) => store.audioplayer.repeat;
export const pagePlaylistSelector = (store) => store.audioplayer.pagePlaylist;