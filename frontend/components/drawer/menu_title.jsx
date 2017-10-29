import React from 'react';
import muiTheme from '../theme';
import Divider from 'material-ui/Divider';
import {ListItem} from 'material-ui/List';
import NavArrowDown from 'material-ui/svg-icons/navigation/expand-more';
import styles from '../styles';

class MenuTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      this.props.onClick();
      return {open: !this.state.open}
    });
  }

  render() {
    return (
      <div>
        <Divider/>
          <ListItem
            primaryText={this.props.text}
            style={{color: muiTheme.palette.primary2Color, fontWeight: "bold"}}
            onClick={this.handleClick}
            rightIcon={
              <NavArrowDown
                className="material-icons"
                color={muiTheme.palette.primary2Color}
                style={this.state.open ? styles.icon.active : styles.icon.inactive}
              ></NavArrowDown>
            }
          ></ListItem>
        <Divider/>
      </div>
    );
  }
}

export default MenuTitle;
