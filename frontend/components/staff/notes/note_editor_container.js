import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { addNote } from '../../actions/song_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  addNote: dispatch(addNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
