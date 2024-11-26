import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">PharmaNews</div>
        <button
          className="text-blue-600 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex m-auto md:items-center md:space-x-14 text-blue-600 font-medium ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#news"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
