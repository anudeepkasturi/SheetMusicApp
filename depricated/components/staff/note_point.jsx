import React from 'react';

class NotePoint extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.noteType) {
      this.props.addNote({
        note: this.props.note,
        noteLength: this.props.noteType,
        notePoint: this.props.id
      });
    }
  }

  render () {
    return (
        <td
          id={this.props.id}
          onClick={this.handleClick}
        ></td>
    );
  }
}

export default NotePoint;
