"use client"

import React, { useContext, useEffect, useState } from 'react';
import Header from './header.jsx';
import { AuthContext } from "@/AuthContext";

const ClientHeader = () => {
  const {  logout , user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  }, [user]);

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
      userData={userData}
      logout={logout}
    />
  );
};

export default ClientHeader