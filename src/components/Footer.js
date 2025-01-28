import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Sulla</h3>
          <p>Democratizing cryptocurrency education for everyone.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <nav className="space-y-2">
            <Link to="/" className="block hover:text-blue-200">Home</Link>
            <Link to="/courses" className="block hover:text-blue-200">Courses</Link>
            <Link to="/about" className="block hover:text-blue-200">About</Link>
          </nav>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Twitter</a>
            <a href="#" className="hover:text-blue-200">LinkedIn</a>
            <a href="#" className="hover:text-blue-200">Email</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-blue-700 pt-4">
        <p>&copy; 2024 Sulla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
