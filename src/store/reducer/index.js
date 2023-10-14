import { CURRENT_TRACK, PAUSE_TRACK, PLAY_TRACK } from "../actions/types/index";
//import { CURRENT_TRACK, PAUSE_TRACK, PLAY_TRACK } from "../actions/types ";
// 1.В переменной initialState хранится логика.
const initialState = {
playing: false,  
track: null,

};

// 2.это чистая функция, принимающая два аргумента: state и пришедший action. 
//Если нет state, мы назначаем default в виде переменной initialState

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    // 3.Внутри редьюсера мы делаем switch-case, чтобы отловить пришедший нам action, понять, 
    //что он известен системе, и написать обработку для этого action, то есть что нам сделать со store.
        case CURRENT_TRACK: {
//4. Redux должен понять, что store изменился, и тогда Redux оповещает подписчиков о том, что состояние изменилось.
 //А далее идет механизм предоставления подписчикам нового состояния.
      return {
        ...state,
        playing: true,
        track: action.payload
      };
    }

    case PLAY_TRACK: {
      return {
        ...state,
        playing: true,

      };
    }
    case PAUSE_TRACK: {

      return {
        ...state,
        playing: false,

      };
    }


    default:
      return state;
  }
}