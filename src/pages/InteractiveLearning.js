import React from 'react';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  CodeIcon, 
  ServerIcon, 
  CpuChipIcon, 
  DatabaseIcon 
} from '@heroicons/react/outline';

const InteractiveLearning = () => {
  const technologies = [
    {
      icon: ChartBarIcon,
      title: "Adaptive Learning Algorithms",
      description: "Machine learning models that dynamically adjust content difficulty and learning paths based on individual performance and engagement."
    },
    {
      icon: LightBulbIcon,
      title: "Personalized Recommendations",
      description: "AI-powered content suggestion system that identifies knowledge gaps and recommends targeted learning materials."
    },
    {
      icon: CodeIcon,
      title: "Interactive Coding Environments",
      description: "Integrated coding sandboxes that allow real-time blockchain and cryptocurrency technology experimentation."
    },
    {
      icon: ServerIcon,
      title: "Progress Tracking",
      description: "Comprehensive analytics dashboard providing insights into learning progress, strengths, and areas for improvement."
    }
  ];

  const technicalArchitecture = [
    {
      icon: CpuChipIcon,
      title: "Machine Learning Integration",
      description: "Advanced ML models trained on educational data to provide intelligent, adaptive learning experiences."
    },
    {
      icon: DatabaseIcon,
      title: "Data-Driven Learning",
      description: "Comprehensive data collection and analysis to continuously improve learning algorithms and content delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Sulla: Cutting-Edge Interactive Learning Technology
        </h1>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Our Learning Technology Framework
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition duration-300"
              >
                <tech.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {tech.title}
                </h3>
                <p className="text-blue-700">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Technical Architecture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technicalArchitecture.map((tech, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition duration-300"
              >
                <tech.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {tech.title}
                </h3>
                <p className="text-blue-700">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Our Learning Philosophy
          </h2>
          
          <div className="text-blue-700 space-y-4 text-center">
            <p>
              At Sulla, we believe that learning should be:
            </p>
            <ul className="list-disc list-inside inline-block text-left space-y-2">
              <li>Personalized to individual learning styles</li>
              <li>Adaptive to real-time understanding</li>
              <li>Engaging and interactive</li>
              <li>Continuously improving</li>
            </ul>
            <p className="mt-4">
              Our technology is designed to break down complex blockchain concepts 
              into digestible, interactive learning experiences that grow with you.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InteractiveLearning;
