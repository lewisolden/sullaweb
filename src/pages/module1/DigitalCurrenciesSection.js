import React, { useState, useEffect } from 'react';

const DigitalCurrenciesSection = () => {
  // Mock progress update function
  const updateProgress = (moduleId, sectionId, completed) => {
    // In a real implementation, this would update progress tracking
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  const [isFullyRead, setIsFullyRead] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mock data - in a real app, this would come from a more robust content management system
  const sectionContent = {
    title: 'Introduction to Digital Currencies',
    overview: 'Digital currencies represent a fundamental shift in how we conceive and use money. This section explores their revolutionary potential.',
    keyPoints: [
      {
        title: 'What are Digital Currencies?',
        description: 'Digital currencies are intangible money systems that exist electronically, leveraging technology to enable financial transactions.',
        visualElement: 'A digital representation of money flowing through electronic circuits'
      },
      {
        title: 'Decentralization',
        description: 'Unlike traditional currencies, many digital currencies operate on decentralized networks, free from central bank control.',
        visualElement: 'A network diagram showing distributed nodes instead of a central point'
      },
      {
        title: 'Global Accessibility',
        description: 'Digital currencies have the potential to provide financial services to billions of unbanked people worldwide.',
        visualElement: 'A world map showing financial connectivity'
      }
    ],
    challenges: [
      'Volatile prices',
      'Regulatory uncertainties',
      'Technological complexity'
    ]
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);

      // Mark as fully read if scrolled to bottom
      if (scrollPercent > 95) {
        setIsFullyRead(true);
        updateProgress(1, 'digital-currencies', true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div 
          className="h-full bg-blue-600" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          {sectionContent.title}
        </h1>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-xl text-gray-700">{sectionContent.overview}</p>
        </div>

        {/* Interactive Key Points */}
        <div className="space-y-8 mb-12">
          {sectionContent.keyPoints.map((point, index) => (
            <div 
              key={point.title} 
              className="bg-white shadow-md rounded-lg p-6 transform transition-all hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {point.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <p className="text-gray-600">{point.description}</p>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  {point.visualElement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Challenges in Digital Currencies
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {sectionContent.challenges.map(challenge => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Digital Currencies section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalCurrenciesSection;
