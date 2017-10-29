import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { selectNoteType } from '../../actions/note_editor_actions';

const mapStateToProps = state => ({
  noteType: state.noteType
});

const mapDispatchToProps = ( dispatch ) => ({
  selectNoteType: noteType => dispatch(selectNoteType(noteType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
