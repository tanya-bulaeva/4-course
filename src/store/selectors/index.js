//. Для того чтобы получать данные из store, в Redux используются селекторы. 
//Это функции, которые возвращают определенную часть состояния компонентам-подписчикам.
export const trackSelector = (store) => store.player;
export const currentTrackSelector = (store) => store.player.track;
export const isTrackPlayingSelector = (store) => store.player.playing;

