import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const modules = [
    { 
      id: 1, 
      title: 'Fundamentals of Cryptocurrency', 
      description: 'Learn the basics of digital currencies, their history, and core concepts.',
      difficulty: 'Beginner'
    },
    { 
      id: 2, 
      title: 'What is a Blockchain?', 
      description: 'Deep dive into blockchain technology, its structure, and fundamental principles.',
      difficulty: 'Beginner to Intermediate'
    },
    { 
      id: 3, 
      title: 'Blockchain Technology', 
      description: 'Advanced exploration of blockchain development, applications, and future trends.',
      difficulty: 'Intermediate to Advanced'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Sulla Courses</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div 
            key={module.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-3 text-blue-600">
              Module {module.id}: {module.title}
            </h2>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {module.difficulty}
              </span>
              <Link 
                to={`/courses/${module.id}`} 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Start Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
