import React from 'react';
import StaffContainer from '../staff/staff_container';
import SongInfoContainer from './song_info_container';

const Sheet = () => (
  <div className="sheet-container">
    <SongInfoContainer />
    <StaffContainer />
  </div>
);

export default Sheet;
