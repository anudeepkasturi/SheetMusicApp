import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//testing
import { addNote } from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();


  ReactDOM.render(<Root store={ store }/>, root);




  //testing
  window.store = store;
  window.addNote = addNote;



});
