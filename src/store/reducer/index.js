import { SET_CURRENT_TRACK, NEXT_TRACK,  PREVIOUS_TRACK, CURRENT_PLAYLIST, PLAY_TRACK, PAUSE_TRACK, SHUFFLE_PLAYLIST, REPEAT_TRACK, PAGE_PLAYLIST, RESET_STATE} from "../actions/types/index";


const initialState = {
playing: false,
playlist: [],
track: null,
shuffledPlaylist:[],
shuffled: false,
repeat: false,
pagePlaylist : [],

};


export default function trackReducer(state = initialState, action) {
  switch (action.type) {

        case SET_CURRENT_TRACK: {

 return {
        ...state,
        playing: true,
        track: action.payload,
      };
    }

    case CURRENT_PLAYLIST: {
      return {
        ...state,
        playlist: action.payload
      }
    }

    case PLAY_TRACK : {
     
     return {
      ...state,
      playing: true
     }

    }
    case PAUSE_TRACK : {
     
      return {
       ...state,
       playing: false
      }
 
     }
    case NEXT_TRACK: {
      const pagePlaylist = state.shuffled ? state.shuffledPlaylist :state.pagePlaylist
      const currentTrackIndex = pagePlaylist.findIndex((track) => {
        return track.id === state.track.id
      })

      const newTrack = pagePlaylist[currentTrackIndex + 1]


      return {
        ...state ,
        track: newTrack,
      };
    }
    case PREVIOUS_TRACK: {
      const pagePlaylist = state.shuffled ? state.shuffledPlaylist :state.pagePlaylist
      const currentTrackIndex = pagePlaylist.findIndex((track) => {
        return track.id === state.track.id
      })

      const newTrack = pagePlaylist[currentTrackIndex - 1]

      return {
        ...state,

        track: newTrack,
      };
    }
    case SHUFFLE_PLAYLIST: {
      return {
        ...state,
        shuffled: !state.shuffled,
        shuffledPlaylist: [...state.playlist].sort(() => 0.5 - Math.random()),
      };
    }
    case REPEAT_TRACK: {
      return {
        ...state,
        repeat: !state.repeat,
      };
    }

    case PAGE_PLAYLIST: {
      return {
        ...state,
        pagePlaylist: action.payload,
      };
    }

    case RESET_STATE: {
      return initialState;
      
     }
      default:
        return state;
  }
}