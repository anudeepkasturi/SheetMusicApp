import React from 'react';

class NotePoint extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    if (this.props.noteType) {
      this.props.addNote({[this.props.note]: this.props.noteType});
    }
  }

  render () {
    return (
        <td
          onClick={this.handleClick}
          ></td>
    );
  }
}

export default NotePoint;
