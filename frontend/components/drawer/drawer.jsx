import React from 'react';
import Drawer from 'material-ui/Drawer';
import NoteOptions from './note_options';
import SongOptions from './song_options';
import AppBar from 'material-ui/AppBar';
import muiTheme from '../theme';

class Sidebar extends React.Component {
  render() {
    return (
        <Drawer className="drawer">
          <AppBar showMenuIconButton={false}></AppBar>
          <NoteOptions/>
          <SongOptions/>
        </Drawer>
    );
  }
}

export default Sidebar;
