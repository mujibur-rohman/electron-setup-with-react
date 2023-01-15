import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from '../components/Greeting';
import Home from '../components/Home';

const SetupRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default SetupRoute;
