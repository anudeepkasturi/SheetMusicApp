import { combineReducers } from 'redux';
import SongReducer from './song_reducer';

const RootReducer = combineReducers({
  song: SongReducer
});

export default RootReducer;
