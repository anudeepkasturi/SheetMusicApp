import {
  SELECT_NOTE_TYPE
} from '../actions/note_editor_actions';

import merge from 'lodash/merge';

let defaultState = null;

const NoteEditorReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SELECT_NOTE_TYPE:
      if (action.noteType) {
        return action.noteType;
      }else {
        return defaultState;
      }
    default:
      return state;
  }
};

export default NoteEditorReducer;
