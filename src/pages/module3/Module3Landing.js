import React from 'react';
import { Link } from 'react-router-dom';

const Module3Landing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Module 3: Blockchain Technology
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Introduction</h2>
          <div className="prose lg:prose-xl text-gray-700">
            <p>
              Welcome to Module 3, where we delve deep into the heart of blockchain 
              technology. Having explored the fundamentals of cryptocurrencies and 
              the basic concept of blockchain in previous modules, we now turn our 
              attention to the intricate technical aspects that make this revolutionary 
              technology possible.
            </p>
            <p>
              In this module, we will unpack the core components that comprise a 
              blockchain system. We'll examine the cryptographic principles that 
              ensure the security and integrity of the blockchain, and explore how 
              these elements work together to create a tamper-resistant, distributed 
              ledger.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Learning Objectives</h2>
          <div className="space-y-4">
            <p className="text-gray-700">At the end of this module, you will be able to:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Explain the core components and architecture of a blockchain system</li>
              <li>Analyse the role of cryptography in ensuring blockchain security and integrity</li>
              <li>Compare and contrast different types of blockchain networks (public, private, and consortium)</li>
              <li>Evaluate the scalability challenges faced by blockchain systems and potential solutions</li>
              <li>Describe the process of mining and its role in maintaining the blockchain</li>
              <li>Discuss the concept of forking in blockchain and its implications</li>
              <li>Examine real-world applications of blockchain technology across various industries</li>
              <li>Assess the advantages and limitations of blockchain technology in different use cases</li>
              <li>Explain the concept of smart contracts and their implementation on blockchain platforms</li>
              <li>Analyse the future trends and potential developments in blockchain technology</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Module Sections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                1. Blockchain Scalability and Interoperability
              </h3>
              <p className="text-gray-700 mb-4">
                Explore the challenges of scaling blockchain networks and solutions for 
                interoperability between different blockchain systems.
              </p>
              <Link 
                to="/module3/scalability" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Start Section →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                2. Types of Blockchains
              </h3>
              <p className="text-gray-700 mb-4">
                Learn about different types of blockchain networks including public, 
                private, and consortium blockchains.
              </p>
              <Link 
                to="/module3/types" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Start Section →
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                3. Blockchain Development Platforms
              </h3>
              <p className="text-gray-700 mb-4">
                Discover major blockchain platforms like Ethereum, Solana, and others, 
                understanding their unique features and capabilities.
              </p>
              <Link 
                to="/module3/platforms" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Start Section →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/module3/scalability" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            Begin Module 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Module3Landing;
