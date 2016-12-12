import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    let NOTE_Y_POS = {
      'F1': 50,
      'E1': 58,
      'D1': 66,
      'C1': 74,
      'B1': 82,
      'A1': 90,
      'G0': 98,
      'F0': 106,
      'E0': 114
    };

    let note = this.props.note;

    let noteName = Object.keys(note)[0];
    let noteLength = Object.values(note)[0];

    let heightAdjust = 104;
    let xAdjust = 70;

    if(noteLength === 4) {
      heightAdjust += 2;

      note = (<img
        className="whole-note"
        src="/assets/whole_note.png"
        style={{
          top: NOTE_Y_POS[noteName] + heightAdjust + 'px',
          left: 50 + xAdjust + this.props.id*28 + 'px'
        }}
        ></img>);
    } else if (noteLength === 2) {
      heightAdjust -= 48;
      note = (<img
        className="half-note"
        src="/assets/half_note.png"
        style={{
          top: NOTE_Y_POS[noteName] + heightAdjust + 'px',
          left: 50 + xAdjust + this.props.id*28 + 'px'
        }}
        ></img>);
    } else if (noteLength === 1) {
      heightAdjust -= 50;

      note = (
        <img
          className="quarter-note2"
            src="/assets/quarter_note.svg"
            style={{
              top: NOTE_Y_POS[noteName] + heightAdjust + 'px',
              left: 50 + xAdjust + this.props.id*28 + 'px'
            }}
          ></img>
      );

    }

    return (
      <div
        className="note"
        >
        { note }
      </div>
    );
  }
}

export default Note;
