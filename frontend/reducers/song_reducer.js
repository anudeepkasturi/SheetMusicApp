import {
  ADD_NOTE
} from '../actions/song_actions';

import merge from 'lodash/merge';

let defaultState = [];

const SongReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = state;

  switch (action.type) {
    case ADD_NOTE:
      return newState.concat(action.note);
    default:
      return state;
  }
};

export default SongReducer;
