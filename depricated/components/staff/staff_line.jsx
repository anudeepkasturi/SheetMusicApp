import React from 'react';

class StaffLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let el;

    if(this.props.id % 2 === 0) {
      el = (<li></li>);
    }
    else {
      el = (<li><hr></hr></li>);
    }

    return (
      <div className="staffLines"
        >
        { el }
      </div>
    );
  }
}

export default StaffLine;
