import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Explore Our Modules</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Module 1 */}
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Module 1: Introduction to Cryptocurrency</h2>
                    <p className="text-gray-600 mb-4">Learn the basics of cryptocurrency, its history, and how it works.</p>
                    <Link 
                        to="/module1" 
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Start Module 1
                    </Link>
                </div>

                {/* Module 2 */}
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Module 2: Blockchain Technology</h2>
                    <p className="text-gray-600 mb-4">Dive into blockchain technology, consensus mechanisms, and smart contracts.</p>
                    <Link 
                        to="/module2" 
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Start Module 2
                    </Link>
                </div>

                {/* Placeholder for Module 3 */}
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Module 3: Coming Soon</h2>
                    <p className="text-gray-600 mb-4">Stay tuned for more exciting content in our upcoming module.</p>
                    <button 
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
