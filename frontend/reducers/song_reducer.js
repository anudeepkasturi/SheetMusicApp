import {
  ADD_NOTE
} from '../actions/song_actions';

import merge from 'lodash/merge';

let defaultState = {};

const SongReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case ADD_NOTE:
      console.log(action);
      return action.note;
    default:
      return state;
  }
};

export default SongReducer;
