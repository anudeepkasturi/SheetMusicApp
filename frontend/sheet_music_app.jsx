import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import muiTheme from './components/theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


//testing
import { addNote } from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();


  ReactDOM.render(<Root store={ store }/>, root);




  //testing
  window.store = store;
  window.muiTheme = muiTheme;

});
