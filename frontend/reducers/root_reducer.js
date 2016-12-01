import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import NoteEditorReducer from './note_editor_reducer';
import SongInfoReducer from './song_info_reducer';

const RootReducer = combineReducers({
  song: SongReducer,
  noteType: NoteEditorReducer,
  songInfo: SongInfoReducer
});

export default RootReducer;
