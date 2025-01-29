// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img 
            src="/sulla-logo.png" 
            alt="Sulla Logo" 
            className="h-8 mr-2"
          />
          Sulla
        </Link>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/modules" className="hover:text-blue-200 transition duration-300">
            Modules
          </Link>
          <Link to="/curriculum" className="hover:text-blue-200 transition duration-300">
            Curriculum
          </Link>
          <Link to="/interactive-learning" className="hover:text-blue-200 transition duration-300">
            Learning Tech
          </Link>
          <Link to="/about" className="hover:text-blue-200 transition duration-300">
            About
          </Link>

          {/* Authentication Links */}
          {currentUser ? (
            <>
              <Link 
                to="/progress" 
                className="hover:text-blue-200 transition duration-300"
              >
                My Progress
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="hover:text-blue-200 transition duration-300"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-blue-700">
            <Link 
              to="/" 
              className="block hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/modules" 
              className="block hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Modules
            </Link>
            <Link 
              to="/curriculum" 
              className="block hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              to="/interactive-learning" 
              className="block hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Learning Tech
            </Link>
            <Link 
              to="/about" 
              className="block hover:bg-blue-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Authentication Links */}
            {currentUser ? (
              <>
                <Link 
                  to="/progress" 
                  className="block hover:bg-blue-600 px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  My Progress
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left hover:bg-blue-600 px-3 py-2 rounded-md"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block hover:bg-blue-600 px-3 py-2 rounded-md"
             onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  to="/signup" 
                  className="block hover:bg-blue-600 px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
