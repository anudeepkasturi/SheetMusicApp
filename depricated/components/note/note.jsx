import React from 'react';
import SVGInline from "react-svg-inline";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    let note = this.props.note;

    let noteName = note[note];
    let noteLength = note[noteLength];

    return (
      { note }
    );
  }
}

export default Note;
