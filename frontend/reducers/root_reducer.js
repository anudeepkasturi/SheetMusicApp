import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import NoteReducer from './note_reducer';
import SongInfoReducer from './song_info_reducer';

const RootReducer = combineReducers({
  song: SongReducer,
  note: NoteReducer,
  songInfo: SongInfoReducer
});

export default RootReducer;
