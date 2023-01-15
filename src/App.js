import React from 'react';
import { ipcRenderer } from 'electron';

const App = () => {
  return (
    <button
      onClick={() => {
        ipcRenderer.send('toMain', 'Integration Is Work!');
      }}
    >
      Click Alert
    </button>
  );
};

export default App;
