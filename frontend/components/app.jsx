import React from 'react';
import Sheet from './sheet/sheet';

const App = ({ children }) => (
  <div>
    <Sheet/>
    {children}
  </div>
);

export default App;
