import React, { useState } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const SuperheroMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    'Marvel': ['Spider-Man', 'Iron Man', 'Thor', 'Black Widow'],
    'DC Comics': ['Batman', 'Superman', 'Wonder Woman', 'Flash'],
    'Other Heroes': ['Hellboy', 'Spawn', 'The Mask']
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">SuperHero Hub</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {Object.keys(menuItems).map((category) => (
              <div key={category} className="relative group">
                <button
                  onClick={() => toggleDropdown(category)}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                >
                  {category}
                  <ChevronDownIcon />
                </button>
                <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {menuItems[category].map((hero) => (
                      <a
                        key={hero}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {hero}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.keys(menuItems).map((category) => (
              <div key={category} className="relative">
                <button
                  onClick={() => toggleDropdown(category)}
                  className="w-full text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between"
                >
                  {category}
                  <span className={`transform transition-transform duration-200 ${
                    activeDropdown === category ? 'rotate-180' : ''
                  }`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                <div
                  className={`${
                    activeDropdown === category ? 'block' : 'hidden'
                  } pl-4 space-y-1`}
                >
                  {menuItems[category].map((hero) => (
                    <a
                      key={hero}
                      href="#"
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
                    >
                      {hero}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SuperheroMenu;