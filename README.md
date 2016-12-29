# Ekho: Sheet Music Editor

## Features
### Create Sheet Music

  Users can create pages of sheet music with this editor. Simply select the type of note and place it on the staff. At the moment, users can only place whole, half and quarter notes on the staff, but will soon be able to add all types of notes.

![Ekho]
[Ekho]: ./app/assets/images/ekho.gif

### Built Using React.js

  The DOM of this application is handled by React, which optimizes how adding and deleting notes is optimized.

### Uses Inline SVGs instead of images

  The notes displayed on the staff are inline SVGs. This is better than using an image because the size of the SVG is significantly smaller. It is also more optimized because it reduces the amount of HTTP requests made. If an image was used instead, an HTTP request would be fired every time a note was added to the staff. Instead, the SVG is written out in the application, and added to the DOM every time a note is added.

## Upcoming Features
### Add key signatures and change clef

  Users will soon be able to add key signatures to the staff and the song will be adjusted accordingly. In addition to that, users can create sheets for different instruments by changing the clef.

### Ekho: Take a recording and convert it to sheet music

  The main goal of this application is to convert recordings of a single instrument (e.g. a piano solo) into sheet music.

  The process of accomplishing this can get quite complex, so the first step is to transpose a single note frequency to a note on the staff. This is done using a Fourier Transform. A single note frequency is just a simple sine wave. The output of the Fourier Transform of the sine wave is its frequency. The frequency can then be used to generate a note and be placed on the staff.
