import React from 'react';
import SVGInline from "react-svg-inline";

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
    let xAdjust = 80;

    if(noteLength === 4) {
      heightAdjust -= 24;
      note = (
        <SVGInline className="whole-note" svg={`<svg style="top: ${NOTE_Y_POS[noteName] + heightAdjust}px;left: ${xAdjust + this.props.id*30}px;" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.56626 132.98281"><path id="path4738" d="m161.43 34.192a48.035 78.971 70.066 0 1 -46.22 73.778 48.035 78.971 70.066 0 1 -97.073 -9.179 48.035 78.971 70.066 0 1 46.218 -73.782 48.035 78.971 70.066 0 1 97.075 9.183z" stroke="#000" stroke-width="27.81" fill="none"/></svg>`} />
      );
    } else if (noteLength === 2) {
      heightAdjust -= 72;
      note = (
        <SVGInline className="half-note" svg={ `<svg style="top: ${NOTE_Y_POS[noteName] + heightAdjust}px;left: ${xAdjust + this.props.id*30}px;" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.56627 512.34423"><g id="g4200" transform="translate(-.069771 6.7309)"><path id="path4738" d="m161.5 406.82a48.035 78.971 70.066 0 1 -46.218 73.782 48.035 78.971 70.066 0 1 -97.074 -9.183 48.035 78.971 70.066 0 1 46.218 -73.782 48.035 78.971 70.066 0 1 97.074 9.183z" stroke="#000" stroke-width="27.81" fill="none"/><path id="rect4740" d="m152.16-6.7309h27.3v428.18h-27.3z"/></g></svg>`} />
      );
    } else if (noteLength === 1) {
      heightAdjust -= 72;
      note = (
        <SVGInline className="quarter-note" svg={ `<svg style="top: ${NOTE_Y_POS[noteName] + heightAdjust}px;left: ${xAdjust + this.props.id*30}px;" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.56627 512.34423"><path id="path4738" d="m161.43 413.55a48.035 78.971 70.066 0 1 -46.218 73.782 48.035 78.971 70.066 0 1 -97.074 -9.183 48.035 78.971 70.066 0 1 46.218 -73.782 48.035 78.971 70.066 0 1 97.074 9.183z" stroke="#000" stroke-width="27.81"/><path id="rect4740" d="m152.09 0h27.3v428.18h-27.3z"/></svg>` } />
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
