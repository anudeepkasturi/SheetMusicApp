import React from 'react';
import NoteLine from './note_line';

class Staff extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextState) {
    console.log(nextState);
  }

  render () {

    let notes = ['F','E','D','C','B','A','G'];

    let noteLines = [];
    for (var i = 1; i <= 9; i++) {
      let note = notes[(i - 1) % 7];
      noteLines.push(<NoteLine key={i} id={i} note={note}/>);
    }
    return (
      <div className="staff-container">
        <ol>
          {
            noteLines
          }
        </ol>
      </div>

    );
  }
}

export default Staff;
