import { connect } from 'react-redux';
import SongInfo from './song_info';
import { editSongInfo } from '../../actions/song_info_actions';

const mapStateToProps = state => ({
  songInfo: state.songInfo
});

const mapDispatchToProps = ( dispatch ) => ({
  editSongInfo: songInfo => dispatch(editSongInfo(songInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongInfo);
