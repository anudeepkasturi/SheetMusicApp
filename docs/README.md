# Sheet Music App

## Background

Writing sheet music can be tedious work. Especially for music teachers, the volume of sheets can be very large for a course. This application will allow users to easily create sheet music using friendly user interfaces. Music teachers and musicians can create and edit their sheet music easily with this application.

## Minimum Viable Product

The minimum viable product will render a a page with editable staffs on it:
* Users can add, edit and delete whole, half, and quarter notes to the staff
* It will display a treble clef and a common time signature
* Songs will be in the key of C major (no sharps or flats)

## Wireframes

The basic skeleton of the minimum viable product is shown below:

![sheet_wireframe]
[sheet_wireframe]: wireframes/sheet_wireframe.png

## Technologies & Technical Challenges

This application will be built using React and Redux. The sample state is shown below:

```js
{
  song: {
    //keys will be the note ID, values contain the pitch, position, note length, and any other properties
    1: {id: 1, pitch: A, length: 1, position: [1,3] },
    2: {id: 2, pitch: C, length: 1, position: [1,5], accidental: "sharp"},
    3: {id: 3, pitch: E, length: 1, position: [1,7] },
    4: {id: 4, pitch: F, length: 1/2, position: [2,1], dotted: true},
  },
  songInfo: {
    title: "Claire De Lune",
    artist: "Claude Debussy"
  }
  //The selected noteType is a whole note.
  //This type of note will be added at a particular
  //pitch when the staff is clicked
  note: {id: 0, pitch: C, length: 1/4, position: [2,5], accidental: "sharp", dotted: true}
  errors: {}
}
```

Technical challenges will include rendering notes in the correct position on the staff.

## Implementation Timeline

**Day 1:** Set up the state and create redux loops for creating, updating and deleting notes.

**Day 2:** Create and style UI buttons to create, edit and delete notes.

**Day 3 & 4:** Render notes on the screen on the correct position on the staff
