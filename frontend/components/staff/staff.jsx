import React from 'react';
import Note from './note';
import NoteLineContainer from './note_line_container';

class Staff extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextState) {

  }

  render () {

    let NOTES = ['F1','E1','D1','C1','B1','A1','G0','F0','E0'];

    let noteLines = [];
    for (var i = 1; i <= 9; i++) {
      let note = NOTES[(i - 1)];
      noteLines.push(<NoteLineContainer key={i} id={i} note={note}/>);
    }

    let notes = [];
    let song = this.props.song;

    for (var j = 0; j < song.length; j++) {
      let note = song[j];
      notes.push(<Note key={j} note={note}/>);
    }


    return (
      <div className="staff-container">
        <ol>
          { noteLines }
        </ol>
        { notes }
      </div>

    );
  }
}

export default Staff;
