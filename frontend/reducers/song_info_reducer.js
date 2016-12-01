import {
  EDIT_SONG_INFO
} from '../actions/song_info_actions';

import merge from 'lodash/merge';

let defaultState = {
  title: "Title",
  artist: "Artist"
};

const SongInfoReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case EDIT_SONG_INFO:
      newState = merge(newState, action.songInfo);
      return newState;
    default:
      return state;
  }
};

export default SongInfoReducer;
