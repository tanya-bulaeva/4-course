//. Для того чтобы получать данные из store, в Redux используются селекторы. 
//Это функции, которые возвращают определенную часть состояния компонентам-подписчикам.
export const tracksSelectors = (store) => store.audioplayer.track 
export const PlaylistSelector = (store) => store.audioplayer.playlist;
export const isTrackPlayingSelector = (store) => store.audioplayer.playing;
//export const currentTrackPlaying = (store) => store.audioplayer.currentTrackPlaying;
export const pagePlaylistSelector = (store) => store.audioplayer.pagePlaylist;
export const shuffledPlaylistSelector = (store) => store.audioplayer.shuffledPlaylist