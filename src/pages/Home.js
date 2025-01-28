// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Cryptocurrency & Blockchain Technology
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sulla is your comprehensive learning platform designed to demystify the complex world of digital currencies and blockchain innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/courses" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg"
            >
              Start Learning
            </Link>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16" id="about">
        <h2 className="text-3xl font-bold mb-12">Why Choose Sulla?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition hover:scale-105">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.214 2.054-.787 2.287-1.562.379-1.562 2.6 0 2.979.781.196 1.107 1.009.787 2.287-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.787c.379 1.562 2.6 1.562 2.979 0a1.532 1.532 0 012.287-.787c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.787-2.287c1.562-.379 1.562-2.6 0-2.979a1.532 1.532 0 01-.787-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.787zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              From blockchain basics to advanced cryptocurrency strategies, our curated content covers every aspect of the digital finance revolution.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transform transition hover:scale-105">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-semibold mb-4">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage with immersive modules, hands-on quizzes, and real-world case studies that transform complex concepts into practical knowledge.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transform transition hover:scale-105">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.5 17c0 .628-.544 1.296-1.764 1.76C9.566 19.227 8.32 19.5 7 19.5s-2.566-.273-3.736-.74C1.994 18.295 1.5 17.628 1.5 17c0-2.645 2.012-4.79 4.572-5.748a3.337 3.337 0 01-.572-1.252c-.124-.602.007-1.213.324-1.729.317-.516.813-.895 1.404-1.024.59-.129 1.207.017 1.723.334.516.317.895.813 1.024 1.404.129.59-.017 1.207-.334 1.723a2.85 2.85 0 01-1.383 1.151c.199.32.333.695.375 1.103a3.68 3.68 0 011.42 1.487c.295.527.419 1.133.329 1.724-.09.59-.381 1.123-.833 1.527C14.389 14.216 12.501 15.615 12.5 17zM16.5 16h-1v-1a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1z" />
            </svg>
            <h3 className="text-2xl font-semibold mb-4">Expert Community</h3>
            <p className="text-gray-600">
              Learn from industry professionals, network with blockchain enthusiasts, and stay ahead of the latest trends in digital finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
