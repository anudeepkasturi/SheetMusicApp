import React from 'react';
import Sheet from './sheet/sheet';
import NoteEditorContainer from './note_editor/note_editor_container';


const App = ({ children }) => (
  <div className="app-page">
    <NoteEditorContainer />
    <Sheet/>
    {children}
  </div>
);

export default App;
