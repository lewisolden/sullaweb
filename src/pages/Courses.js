// Filename: src/pages/Courses.js
import React from 'react';
import { Link } from 'react-router-dom';
import courseModules from '../data/courseModules';

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Cryptocurrency Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseModules.map((module) => (
          <div 
            key={module.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{module.title}</h2>
              <p className="text-gray-600 mb-6">{module.description}</p>
              <Link 
                to={`/courses/${module.id}`} 
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Start Module
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
