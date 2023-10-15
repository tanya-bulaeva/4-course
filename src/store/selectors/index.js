//. Для того чтобы получать данные из store, в Redux используются селекторы. 
//Это функции, которые возвращают определенную часть состояния компонентам-подписчикам.
export const PlaylistSelector = (store) => store.audioplayer.playlist;
export const currentTrackSelector = (store) => store.audioplayer.track;
export const isTrackPlayingSelector = (store) => store.audioplayer.playing;

