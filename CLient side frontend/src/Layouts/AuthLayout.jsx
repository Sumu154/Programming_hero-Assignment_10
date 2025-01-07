import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';


const AuthLayout = () => {
  return (
    <div className='bg-background font-Poppins'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
  );
};

export default AuthLayout;