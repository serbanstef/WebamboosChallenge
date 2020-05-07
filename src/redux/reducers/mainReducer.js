import {
  SET_ERROR,
} from '../constants/actionTypes';

const initialState = {
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;  