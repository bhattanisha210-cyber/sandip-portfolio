import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/" className="text-2xl font-bold tracking-tight text-[#111111]">
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
