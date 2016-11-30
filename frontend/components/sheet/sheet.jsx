import React from 'react';
import StaffContainer from '../staff/staff_container';
import NoteEditor from '../staff/notes/note_editor';

const Sheet = () => (
  <div className="sheet-container">
    <NoteEditor />
    <StaffContainer />
  </div>
);

export default Sheet;
