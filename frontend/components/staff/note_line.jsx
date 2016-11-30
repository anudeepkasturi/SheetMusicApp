import React from 'react';

class NoteLine extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.note);
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
      <div
        onClick={this.handleClick}
        >
        { el }
      </div>
    );
  }
}

export default NoteLine;
