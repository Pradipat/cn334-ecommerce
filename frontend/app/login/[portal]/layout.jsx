// components/layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='w-full h-[calc(100vh-100px)] flex'>
        <div className='bg-gradient-to-r from-[#FFB200] to-[#FFFFFF] w-1/2 h-full'></div>
        <div className='bg-white w-1/2 h-full flex justify-center items-center'>{children}</div>
    </div>  
  );
};

export default Layout;