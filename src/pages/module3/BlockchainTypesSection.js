import React, { useState, useEffect } from 'react';

const BlockchainTypesSection = () => {
  const [isFullyRead, setIsFullyRead] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = (moduleId, sectionId, completed) => {
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);

      if (scrollPercent > 95) {
        setIsFullyRead(true);
        updateProgress(3, 'blockchain-types', true);
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
          Different Types of Blockchains
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Blockchains can be categorized into different types based on their 
            accessibility, level of decentralization, and purpose. Understanding these 
            different types is crucial for choosing the right blockchain solution for 
            specific use cases.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">1. Public Blockchains</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Characteristics</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Open, permissionless networks</li>
            <li>Anyone can participate without approval</li>
            <li>Fully decentralized</li>
            <li>Maximum transparency</li>
            <li>Cryptocurrency incentives for participation</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Advantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>High security through large network of participants</li>
            <li>Censorship resistance</li>
            <li>True decentralization</li>
            <li>Network effect benefits</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Disadvantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Lower transaction speed</li>
            <li>Higher energy consumption (for PoW systems)</li>
            <li>Limited privacy</li>
            <li>Scalability challenges</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">2. Private Blockchains</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Characteristics</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Permissioned networks</li>
            <li>Controlled by a single organization</li>
            <li>Limited access to approved participants</li>
            <li>Higher degree of privacy</li>
            <li>Faster transactions and lower costs</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Advantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Greater control over the network</li>
            <li>Higher transaction speed and throughput</li>
            <li>Better privacy and data confidentiality</li>
            <li>More efficient consensus mechanisms</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Disadvantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Less decentralized</li>
            <li>Potentially less secure due to fewer nodes</li>
            <li>Requires trust in the controlling organization</li>
            <li>Limited transparency</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">3. Consortium Blockchains</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Characteristics</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Semi-decentralized systems</li>
            <li>Governed by a group of organizations</li>
            <li>Permissioned network with shared control</li>
            <li>Balance between public and private features</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Advantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Increased efficiency compared to public blockchains</li>
            <li>More decentralized than private blockchains</li>
            <li>Suitable for business-to-business use cases</li>
            <li>Regulatory compliance friendly</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Disadvantages</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>More complex governance</li>
            <li>Potential for collusion among members</li>
            <li>Less open than public blockchains</li>
            <li>Requires coordination between organizations</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Comparing Blockchain Types</h2>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold mb-2">Public</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Highest decentralization</li>
                <li>Lowest speed</li>
                <li>Highest transparency</li>
                <li>Lowest privacy</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold mb-2">Private</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Lowest decentralization</li>
                <li>Highest speed</li>
                <li>Lowest transparency</li>
                <li>Highest privacy</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold mb-2">Consortium</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Medium decentralization</li>
                <li>Medium speed</li>
                <li>Medium transparency</li>
                <li>Configurable privacy</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Choosing the Right Type</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Factors to Consider</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Use case requirements</li>
            <li>Privacy needs</li>
            <li>Performance requirements</li>
            <li>Regulatory compliance</li>
            <li>Scalability needs</li>
            <li>Trust requirements</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each blockchain type serves different purposes and use cases</li>
              <li>No single type is superior for all applications</li>
              <li>Choice depends on specific requirements and constraints</li>
              <li>Hybrid approaches may combine benefits of different types</li>
            </ul>
          </div>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Blockchain Types section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockchainTypesSection;
