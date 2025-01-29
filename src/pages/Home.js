import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, AcademicCapIcon, LightningBoltIcon } from '@heroicons/react/outline';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Master Cryptocurrency & Blockchain Technology
        </h1>
        <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
          Sulla is your comprehensive learning platform designed to demystify the complex world of digital currencies and blockchain innovation.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            to="/modules" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Start Learning
          </Link>
          <Link 
            to="/about" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Comprehensive Curriculum Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Comprehensive Cryptocurrency Curriculum
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <BookOpenIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Module 1: Fundamentals of Cryptocurrency
              </h3>
              <p className="text-blue-700 mb-4">
                Dive into the world of digital currencies, exploring their history, technology, and potential.
              </p>
              <Link 
                to="/modules/module1" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore Module →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <AcademicCapIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Module 2: What is a Blockchain?
              </h3>
              <p className="text-blue-700 mb-4">
                Understand the core technology behind cryptocurrencies and its revolutionary potential.
              </p>
              <Link 
                to="/modules/module2" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore Module →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <LightningBoltIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Module 3: Blockchain Technology
              </h3>
              <p className="text-blue-700 mb-4">
                Explore advanced blockchain concepts, platforms, and real-world applications.
              </p>
              <Link 
                to="/modules/module3" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore Module →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/curriculum" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              View Full Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Learning Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cutting-Edge Interactive Learning
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Experience personalized, AI-driven learning that adapts to your unique learning style and pace.
          </p>
          <Link 
            to="/interactive-learning" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold"
          >
            Discover Our Learning Technology
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sulla</h3>
            <p>Democratizing cryptocurrency education for everyone.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-blue-200">Home</Link>
              <Link to="/modules" className="block hover:text-blue-200">Modules</Link>
              <Link to="/curriculum" className="block hover:text-blue-200">Curriculum</Link>
              <Link to="/about" className="block hover:text-blue-200">About</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/sulla_crypto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-200"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/company/sulla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-200"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:contact@sulla.com" 
                className="hover:text-blue-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-blue-700 pt-4">
          <p>&copy; 2024 Sulla. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
