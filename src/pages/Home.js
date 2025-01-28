import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const modules = [
    { id: 1, title: 'Fundamentals of Cryptocurrency', description: 'An introduction to digital currencies and blockchain basics.' },
    { id: 2, title: 'What is a Blockchain?', description: 'Deep dive into blockchain technology and its core principles.' },
    { id: 3, title: 'Blockchain Technology', description: 'Advanced exploration of blockchain applications and development.' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Welcome to Sulla Crypto Education</h1>
      
      <section className="mb-8">
        <p className="text-xl text-gray-700 mb-4">
          Embark on a comprehensive journey through the world of cryptocurrencies and blockchain technology.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Module {module.id}: {module.title}
              </h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <Link 
                to={`/courses/${module.id}`} 
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Start Module
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
export default Home;
