import { SET_CURRENT_TRACK, NEXT_TRACK,  PREVIOUS_TRACK, ADD_PLAYLIST} from "../actions/types/index";

// 1.В переменной initialState хранится логика.
const initialState = {
playing: false,
playlist: [],  
track: null,
currentTrack: null,
shuffledPlaylist: []
};

// 2.это чистая функция, принимающая два аргумента: state и пришедший action. 
//Если нет state, мы назначаем default в виде переменной initialState

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    // 3.Внутри редьюсера мы делаем switch-case, чтобы отловить пришедший нам action, понять, 
    //что он известен системе, и написать обработку для этого action, то есть что нам сделать со store.
        case SET_CURRENT_TRACK: {
          const {track} = action.payload
//4. Redux должен понять, что store изменился, и тогда Redux оповещает подписчиков о том, что состояние изменилось.
 //А далее идет механизм предоставления подписчикам нового состояния.
      return {
        ...state,
        playing: true,
        currentTrack: track
      };
    }

    case ADD_PLAYLIST: {
      const {playlist} = action.payload
      return {
        ...state,
        playlist,
        playing: false
      }
    }

    case NEXT_TRACK: {
      const {track} = action.payload
      return {
        ...state,
        playing: true,
        currentTrack: track
      };
    }
    case PREVIOUS_TRACK: {
      const {track} = action.payload
      return {
        ...state,
        playing: true,
        currentTrack: track
      };
    }

    default:
      return state;
  }
}