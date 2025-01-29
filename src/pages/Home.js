import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Master Cryptocurrency & Blockchain Technology
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Sulla is your comprehensive learning platform designed to demystify the complex world of digital currencies and blockchain innovation.
                </p>
                <div className="flex space-x-4">
                    <Link 
                        to="/courses" 
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Start Learning
                    </Link>
                    <Link 
                        to="/about" 
                        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
