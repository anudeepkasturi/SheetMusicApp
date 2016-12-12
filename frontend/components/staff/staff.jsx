import React from 'react';
import Note from './note';
import NoteLineContainer from './note_line_container';
import NotePointContainer from './note_point_container';

class Staff extends React.Component {
  constructor(props) {
    super(props);
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
      notes.push(<Note key={j} id={j} note={note}/>);
    }

    let grid = [];

    for (var l = 0; l < NOTES.length; l++) {
      let gridRow = [];
      for (var k = 0; k < 17; k++) {
        let id = `${l} ${k}`;
        gridRow.push(
          <NotePointContainer
            key={id}
            id={id}
            note={NOTES[l]}
            ></NotePointContainer>);
      }

      grid.push(
        <tr id={NOTES[l]} key={l}>
          { gridRow }
        </tr>
      );
    }

    return (
      <div className="staff-container">
        <ol>
          { noteLines }
        </ol>
        <div className="staff-props">
          <img id="clef" src="/assets/treble_clef.png"></img>
          <img id="time-sig" src="/assets/time_signature.png"></img>
        </div>
        { notes }
        <table className="grid">
          <tbody>
            { grid }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Staff;
