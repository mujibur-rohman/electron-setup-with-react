import React from 'react';
import { ipcRenderer } from 'electron';
import { useNavigate } from 'react-router-dom';

const Greeting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Hello</p>
      <button
        onClick={() => {
          ipcRenderer.send('toMain', 'Integration Is Work!');
          navigate('/home');
        }}
      >
        Click Alert & Link to Home
      </button>
    </div>
  );
};

export default Greeting;
