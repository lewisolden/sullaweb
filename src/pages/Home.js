// Filename: src/pages/Home.js
// Purpose: Homepage of the Sulla platform
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <div className="bg-blue-600 text-white py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn Cryptocurrency & Blockchain
        </h1>
        <p className="text-xl mb-8">
          Comprehensive education for the digital finance revolution
        </p>
        <Link 
          to="/courses" 
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition"
        >
          Start Learning
        </Link>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Why Choose Sulla?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Curriculum</h3>
            <p>From beginner to advanced, our courses cover everything about cryptocurrencies and blockchain.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Interactive Learning</h3>
            <p>Engage with interactive modules, quizzes, and real-world case studies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Expert-Led Content</h3>
            <p>Learn from industry professionals with real-world blockchain experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
