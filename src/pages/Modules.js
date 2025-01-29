import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  LightningBoltIcon 
} from '@heroicons/react/outline';

const Modules = () => {
  const moduleDetails = [
    {
      id: 1,
      icon: BookOpenIcon,
      title: "Fundamentals of Cryptocurrency",
      description: "Explore the foundational concepts of digital currencies, their history, and technological underpinnings.",
      difficulty: "Beginner",
      sections: [
        "Introduction to Digital Currencies",
        "History of Money",
        "Bitcoin: First Cryptocurrency",
        "Altcoins and Tokens",
        "Cryptocurrency Market Dynamics",
        "Basic Cryptography"
      ],
      learningOutcomes: [
        "Understand the evolution of digital currencies",
        "Grasp the basics of cryptocurrency technology",
        "Analyze cryptocurrency market dynamics"
      ]
    },
    {
      id: 2,
      icon: AcademicCapIcon,
      title: "What is a Blockchain?",
      description: "Dive deep into blockchain technology, understanding its structure, mechanisms, and revolutionary potential.",
      difficulty: "Intermediate",
      sections: [
        "Blockchain Basics",
        "Distributed Ledger Technology",
        "Consensus Mechanisms",
        "Smart Contracts"
      ],
      learningOutcomes: [
        "Comprehend blockchain's core technological principles",
        "Understand different consensus mechanisms",
        "Explore smart contract functionality"
      ]
    },
    {
      id: 3,
      icon: LightningBoltIcon,
      title: "Blockchain Technology",
      description: "Advanced exploration of blockchain applications, development platforms, and future innovations.",
      difficulty: "Advanced",
      sections: [
        "Blockchain Scalability",
        "Types of Blockchain Networks",
        "Blockchain Development Platforms",
        "Advanced Blockchain Concepts"
      ],
      learningOutcomes: [
        "Analyze different blockchain platforms",
        "Understand blockchain scalability challenges",
        "Explore real-world blockchain applications"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Sulla Learning Modules
        </h1>

        {moduleDetails.map((module) => (
          <div 
            key={module.id} 
            className="bg-white shadow-lg rounded-lg p-8 mb-8 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-start mb-6">
              <module.icon className="h-12 w-12 text-blue-600 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-blue-800">
                  {module.title}
                </h2>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-4">
                    Difficulty: {module.difficulty}
                  </span>
                  <p className="text-blue-700">
                    {module.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 border-t border-blue-100 pt-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Module Sections
                </h3>
                <ul className="space-y-2 text-blue-700">
                  {module.sections.map((section, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="h-4 w-4 text-blue-500 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      {section}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-2 text-blue-700">
                  {module.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="h-4 w-4
