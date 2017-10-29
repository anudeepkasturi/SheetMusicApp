export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});
export const deleteNote = (note) => ({
  type: DELETE_NOTE,
  note
});
export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  note
});
