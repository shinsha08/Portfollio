import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 shadow-lg bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">LOGO</Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/projects" text="Projects" />
          <NavItem to="/skills" text="Skills" />
          <NavItem to="/contact" text="Contact" />
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <NavItem to="/" text="Home" mobile onClick={toggleMenu} />
            <NavItem to="/about" text="About" mobile onClick={toggleMenu} />
            <NavItem to="/projects" text="Projects" mobile onClick={toggleMenu} />
            <NavItem to="/skills" text="Skills" mobile onClick={toggleMenu} />
            <NavItem to="/contact" text="Contact" mobile onClick={toggleMenu} />
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, text, mobile, onClick }) => (
  <li>
    <Link
      to={to}
      className={`text-white hover:text-gray-300 ${mobile ? 'block py-2' : ''}`}
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

export default Navbar;
