const RESET_STATE = 'RESET_STATE';
const resetState = () => ({ type: RESET_STATE });
const initialState = { /* your initial state */ };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};