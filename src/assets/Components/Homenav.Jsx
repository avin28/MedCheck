import React, { useState } from 'react';
import Home from '../../Home.jsx';
import Overview from './Overview'
import Dataint from './Dataint'

const Homenav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <button
                className="lg:hidden p-2 text-gray-800 hover:text-gray-600 focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Menu (Mobile) */}
            <div
                className={`lg:hidden absolute left-0 top-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
                <ul className="flex flex-col items-center p-4 space-y-4">
                    <li>
                        <a
                            href="#Dataint"
                            className="text-lg text-gray-800 hover:text-blue-500"
                            onClick={toggleMenu}
                        >
                            Data Interaction
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Dataint"
                            className="text-lg text-gray-800 hover:text-blue-500"
                            onClick={toggleMenu}
                        >
                            
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-lg text-gray-800 hover:text-blue-500"
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-lg text-gray-800 hover:text-blue-500"
                            onClick={toggleMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default Homenav;
