import React from 'react';

const VerticalNavbar = ({ isOpen, toggleNavbar }) => {
    return (
      <div className={`${isOpen ? 'w-2/12' : 'w-0'} bg-blue-800 text-white py-5 pl-2 shadow-lg transition-width duration-300 hidden md:block verticalNav`} style={{ backgroundColor: '#1A2035' }} >
            
      </div>
    );
  };
  

export default VerticalNavbar;
