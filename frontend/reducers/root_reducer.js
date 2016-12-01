import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import NoteEditorReducer from './note_editor_reducer';

const RootReducer = combineReducers({
  song: SongReducer,
  noteType: NoteEditorReducer
});

export default RootReducer;
