import { connect } from 'react-redux';
import NoteLine from './note_line';
import { addNote } from '../../actions/song_actions';

const mapStateToProps = state => ({
  noteType: state.noteType
});

const mapDispatchToProps = ( dispatch ) => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteLine);
