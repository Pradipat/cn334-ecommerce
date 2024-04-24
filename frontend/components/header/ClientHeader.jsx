"use client"

import React, { useContext, useEffect, useState } from 'react';
import Header from './header.jsx';
import { AuthContext } from "@/AuthContext";
import { useRouter } from 'next/navigation';

const ClientHeader = () => {
  const router = useRouter();
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

  const handleLogout = () => {
    router.push('/');
    logout();
}

  return (
    <Header
      clicked={clicked}
      handleHover={handleHover}
      handleOut={handleOut}
      userData={userData}
      logout={handleLogout}
    />
  );
};

export default ClientHeader