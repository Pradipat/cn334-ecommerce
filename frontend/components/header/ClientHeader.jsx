"use client"

import React, { useState } from 'react';
import Header from './header.jsx';

const ClientHeader = () => {
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setClicked(true);
  };

  const handleOut = () => {
    setClicked(false);
  };

  return (
    <Header
      clicked={clicked}
      handleHover={handleHover}
      handleOut={handleOut}
    />
  );
};

export default ClientHeader