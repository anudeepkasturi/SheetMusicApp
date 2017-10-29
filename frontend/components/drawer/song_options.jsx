import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import NavArrowDown from 'material-ui/svg-icons/navigation/expand-more';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { editSongInfo } from '../../actions/song_info_actions';
import MenuTitle from './menu_title';
import muiTheme from '../theme';
import styles from '../styles';
import merge from 'lodash/merge';

class SongOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {songInfo: this.props.songInfo, active: false};
    this.toggleActive = this.toggleActive.bind(this);
    this.update = this.update.bind(this);
    this.updateSongInfo = this.updateSongInfo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      songInfo: nextProps.songInfo
    });
  }

  toggleActive() {
    this.setState(() => {
      return {active: !this.state.active}
    });
  }

  update(field) {
    return (e) => {
      var value = e.currentTarget.value;
      this.setState(() => {
        if(field === 'title') {
          return {
            songInfo: {
              title: value,
              artist: this.state.songInfo.artist
            }
          };
        } else {
          return {
            songInfo: {
              title: this.state.songInfo.title,
              artist: value
            }
          };
        }
      });
    }
  }

  updateSongInfo() {
    this.props.editSongInfo(this.state.songInfo);
  }

  render() {
    return (
      <div>
        <MenuTitle text="Song Options" onClick={this.toggleActive}></MenuTitle>
          <TextField
            floatingLabelText="Title"
            underlineShow={false}
            floatingLabelStyle={{color: muiTheme.palette.textColor}}
            floatingLabelShrinkStyle={{color: muiTheme.palette.primary1Color}}
            style={this.state.active ? styles.songOptions.active : styles.songOptions.inactive}
            inputStyle={styles.songOptions.inputStyle}
            value={this.state.songInfo.title}
            onChange={this.update('title')}
            onBlur={this.updateSongInfo}
          />
          <TextField
            floatingLabelText="Artist"
            underlineShow={false}
            floatingLabelStyle={{color: muiTheme.palette.textColor}}
            floatingLabelShrinkStyle={{color: muiTheme.palette.primary1Color}}
            style={this.state.active ? styles.songOptions.active : styles.songOptions.inactive}
            inputStyle={styles.songOptions.inputStyle}
            value={this.state.songInfo.artist}
            onChange={this.update('artist')}
            onBlur={this.updateSongInfo}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songInfo: state.songInfo
});
const mapDispatchToProps = ( dispatch ) => ({
  editSongInfo: songInfo => dispatch(editSongInfo(songInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongOptions);
