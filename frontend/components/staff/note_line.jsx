import React from 'react';

class NoteLine extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.noteType) {
      this.props.addNote({[this.props.note]: this.props.noteType});
    }
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
      <div className="noteLines"
        onClick={this.handleClick}
        >
        { el }
      </div>
    );
  }
}

export default NoteLine;
