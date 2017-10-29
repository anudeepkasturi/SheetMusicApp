import {
  SELECT_NOTE_LENGTH
} from '../actions/note_options_actions';
import merge from 'lodash/merge';


let defaultState = {length: null};

const NoteReducer = (state = defaultState, action) => {
  Object.freeze(state);
  var newState = merge({}, state);

  switch (action.type) {
    case SELECT_NOTE_LENGTH:
      if (action.noteLength) {
        return merge(newState, {length: action.noteLength});
      }else {
        return defaultState;
      }
    default:
      return state;
  }
};

export default NoteReducer;
