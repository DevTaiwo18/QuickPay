// src/components/StickyMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobeAltIcon, HomeIcon, UserIcon, WalletIcon } from '@heroicons/react/24/outline'; 

const StickyMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-transparent-300 stickyNav shadow-lg">
      <div className="flex justify-around items-center h-12">
        <NavLink
          to="/dashboard/"
          className="relative flex flex-col items-center"
          activeclassname="active"
        >
          <HomeIcon className="stroke-current text-blue-600 w-6 h-6 icon" />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          to="/dashboard/services"
          className="relative flex flex-col items-center "
          activeclassname="active"
        >
          <GlobeAltIcon className="stroke-current text-blue-600 w-6 h-6 icon " />
          <span className="text-xs">Services</span>
        </NavLink>

        <NavLink
          to="/dashboard/wallet"
          className="relative flex flex-col items-center"
          activeclassname="active"
        >
          <WalletIcon className="stroke-current text-blue-600 w-6 h-6 icon" />
          <span className="text-xs">Wallet</span>
        </NavLink>

        <NavLink
          to="/dashboard/user"
          className="relative flex flex-col items-center"
          activeclassname="active"
        >
          <UserIcon className="stroke-current text-blue-600 w-6 h-6 icon" />
          <span className="text-xs">Me</span>
        </NavLink>
      </div>
    </div>
  );
};

export default StickyMenu;
