import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Icon as Icon} from './icon';
import muiTheme from './theme';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="header">
          <AppBar
            title="Echo"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            >
          </AppBar>
      <Icon/>
      </div>
    );
  }
}

export default Header;
