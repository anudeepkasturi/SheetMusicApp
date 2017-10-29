import React from 'react';
import transitions from 'material-ui/styles/transitions';
import makeSelectable from 'material-ui/List/makeSelectable';
import muiThemeable from 'material-ui/styles/muiThemeable';
import muiTheme from './theme';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import ExpandTransitionChild from 'material-ui/internal/ExpandTransitionChild';


class Test extends React.Component {
  render() {
    return (
      <ExpandTransition>
        <div>test
          <ExpandTransitionChild>
            <div>test1</div>
          </ExpandTransitionChild>
          <ExpandTransitionChild>
            <div>test2</div>
          </ExpandTransitionChild>
          <ExpandTransitionChild>
            <div>test3</div>
          </ExpandTransitionChild>
          <ExpandTransitionChild>
            <div>test4</div>
          </ExpandTransitionChild>
        </div>
      </ExpandTransition>
    );
  }
}

export default muiThemeable()(Test);
