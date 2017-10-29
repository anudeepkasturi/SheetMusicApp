import React from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import NavArrowDown from 'material-ui/svg-icons/navigation/expand-more';
import MenuTitle from './menu_title';
import { selectNoteLength } from '../../actions/note_options_actions';
import styles from '../styles';

class NoteOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addNote: false, active: false, noteLength: this.props.noteLength}
    this.handleAddNote = this.handleAddNote.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleSelectNote = this.handleSelectNote.bind(this);
    this.noteLengths = {
      "Quarter": 1/4,
      "Half": 1/2,
      "Whole": 1
    }
  }

  handleSelectNote(noteLength) {
    return () => {
      if(this.props.noteLength === this.noteLengths[noteLength]) {
        return this.props.selectNoteLength(null);
      }
      return this.props.selectNoteLength(this.noteLengths[noteLength]);
    }
  }

  handleAddNote() {
    this.setState(() => {
      return {addNote: !this.state.addNote}
    });
  }

  toggleActive() {
    this.setState(() => {
      if(this.state.active) {
        return {active: false, addNote: false}
      }
      return {active: true}
    });
  }

  render() {
    var notes = Object.keys(this.noteLengths).map((note, i) => {
      return (
        <NoteLength
          select={this.props.noteLength === this.noteLengths[note]}
          key={i}
          active={this.state.addNote}
          noteLength={note + " Note"}
          onClick={this.handleSelectNote(note)}
        ></NoteLength>
      );
    });

    return (
      <div className="note-options">
        <MenuTitle text="Note Options" onClick={this.toggleActive}/>
        <MenuItem
          primaryText="Add Note"
          onClick={this.handleAddNote}
          rightIcon={
            <NavArrowDown
              className="material-icons"
              style={this.state.addNote ? styles.icon.active : styles.icon.inactive}
            ></NavArrowDown>
          }
          style={this.state.active ? styles.noteOptions.active : styles.noteOptions.inactive}
        ></MenuItem>
        {notes}
        <MenuItem
          primaryText="Delete Note"
          style={this.state.active ? styles.noteOptions.active : styles.noteOptions.inactive}
        ></MenuItem>
      </div>
    );
  }
}

class NoteLength extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuItem
        onClick={this.props.onClick}
        style={this.props.active ? styles.noteOptions.active : styles.noteOptions.inactive}
        innerDivStyle={this.props.select ? styles.noteOptions.select : styles.noteOptions.unselect}
        insetChildren={true}
        primaryText={this.props.noteLength}
      ></MenuItem>
    );
  }
}

const mapStateToProps = state => ({
  noteLength: state.note.length
});

const mapDispatchToProps = ( dispatch ) => ({
  selectNoteLength: noteLength => dispatch(selectNoteLength(noteLength))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteOptions);
