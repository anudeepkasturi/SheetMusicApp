import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let note = this.props.note;
    if(Object.values(note)[0] === 4) {
      note = (<img src="/assets/whole_note.png"></img>);
    }
    console.log(this.props);
    return (
      <div>
        { note }
      </div>
    );
  }
}

export default Note;
