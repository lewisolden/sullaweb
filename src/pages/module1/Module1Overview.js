import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

const Module1Overview = () => {
  const { getModuleCompletionPercentage } = useProgress();
  const moduleCompletion = getModuleCompletionPercentage(1);

  const sections = [
    {
      id: 'digital-currencies',
      title: 'Introduction to Digital Currencies',
      description: 'Explore the revolutionary world of digital currencies and their potential to transform financial systems.',
      icon: '💻'
    },
    {
      id: 'money-evolution',
      title: 'History and Evolution of Money',
      description: 'Trace the fascinating journey of money from barter systems to digital currencies.',
      icon: '📜'
    },
    {
      id: 'bitcoin',
      title: 'Bitcoin: The First Cryptocurrency',
      description: 'Dive deep into the origins, innovations, and impact of Bitcoin.',
      icon: '₿'
    },
    {
      id: 'altcoins-tokens',
      title: 'Altcoins and Tokens',
      description: 'Discover the diverse ecosystem of cryptocurrencies beyond Bitcoin.',
      icon: '🪙'
    },
    {
      id: 'market-dynamics',
      title: 'Cryptocurrency Market Dynamics',
      description: 'Understanding the unique characteristics and behavior of crypto markets.',
      icon: '📊'
    },
    {
      id: 'cryptography',
      title: 'Basic Cryptography Concepts',
      description: 'Explore the fundamental cryptographic principles that secure digital currencies.',
      icon: '🔐'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-100 rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Module 1: Fundamentals of Cryptocurrency
        </h1>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
            <div 
              className="bg-blue-600 h-4 rounded-full" 
              style={{ width: `${moduleCompletion}%` }}
            ></div>
          </div>
          <span className="font-bold text-blue-800">{moduleCompletion}%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-bold mb-3 text-blue-800">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <Link
              to={`/module1/${section.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start Section
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Module Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Define digital currencies and distinguish between different types</li>
          <li>Trace the evolution of money from barter systems to modern digital currencies</li>
          <li>Explain Bitcoin's fundamental innovations and impact</li>
          <li>Understand the diverse ecosystem of altcoins and tokens</li>
          <li>Analyze cryptocurrency market dynamics</li>
          <li>Grasp basic cryptographic principles underlying cryptocurrencies</li>
        </ul>
      </div>
    </div>
  );
};

export default Module1Overview;
