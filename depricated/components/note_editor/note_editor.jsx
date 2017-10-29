import React, { PropTypes } from 'react';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(noteType) {
    if (noteType === this.props.noteType){
      this.props.selectNoteType();
    } else {
      this.props.selectNoteType(noteType);
    }
  }

  render () {
    let type = this.props.noteType;

    return (
      <div className="note-editor-container">
        <div className="note-editor">          
          <button
            className={type === 4 ? "active" : ""}
            onClick={() => this.handleClick(4)}
            >Whole</button>

          <button
            className={type === 2 ? "active" : ""}
            onClick={() => this.handleClick(2)}
            >Half</button>

          <button
            className={type === 1 ? "active" : ""}
            onClick={() => this.handleClick(1)}
            >Quarter</button>
        </div>
      </div>

    );
  }
}

export default NoteEditor;
