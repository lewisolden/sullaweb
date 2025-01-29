import React, { useState, useEffect } from 'react';

const BlockchainScalabilitySection = () => {
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
        updateProgress(3, 'scalability', true);
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
          Blockchain Scalability and Interoperability
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            As blockchain technology gains wider adoption, two critical challenges have 
            emerged: scalability and interoperability. These issues are crucial to 
            address for blockchain to reach its full potential and achieve mainstream 
            adoption across various industries.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">The Scalability Challenge</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">The Scalability Trilemma</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Decentralization: Maintaining a distributed network of nodes</li>
            <li>Security: Ensuring the network remains resistant to attacks</li>
            <li>Scalability: Handling increased transaction volume</li>
          </ul>
          <p>
            Blockchain networks typically must prioritize two of these aspects at the 
            expense of the third.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Scalability Issues</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Transaction Speed:</strong> Limited transactions per second compared 
              to traditional systems
            </li>
            <li>
              <strong>Block Size:</strong> Larger blocks increase throughput but require 
              more storage and bandwidth
            </li>
            <li>
              <strong>Network Congestion:</strong> High transaction volumes lead to 
              longer confirmation times
            </li>
            <li>
              <strong>Data Storage:</strong> Growing blockchain size challenges node 
              operators
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Scalability Solutions</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Layer 2 Solutions</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Process transactions outside the main blockchain</li>
            <li>Examples: Lightning Network (Bitcoin), Plasma (Ethereum)</li>
            <li>Significantly increases transaction throughput</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Sharding</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Divides network into smaller parts (shards)</li>
            <li>Enables parallel transaction processing</li>
            <li>Implemented in Ethereum 2.0 and other projects</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Consensus Mechanism Improvements</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Moving from Proof of Work to more efficient mechanisms</li>
            <li>Proof of Stake reduces resource requirements</li>
            <li>New consensus algorithms focus on scalability</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Blockchain Interoperability</h2>

          <p>
            Interoperability enables different blockchain networks to communicate and 
            share data, crucial for widespread adoption and integration.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Interoperability Challenges</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Different consensus mechanisms between chains</li>
            <li>Varying data formats and standards</li>
            <li>Cross-chain communication security</li>
            <li>Governance differences between networks</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Interoperability Solutions</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Cross-Chain Bridges:</strong> Enable communication between 
              blockchain networks
            </li>
            <li>
              <strong>Atomic Swaps:</strong> Direct exchange of cryptocurrencies 
              across chains
            </li>
            <li>
              <strong>Interledger Protocol:</strong> Standard for cross-ledger 
              transactions
            </li>
            <li>
              <strong>Multi-chain Networks:</strong> Platforms like Polkadot and 
              Cosmos enabling interoperability
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Future Outlook</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Continued research into scaling solutions</li>
            <li>Development of standardized protocols</li>
            <li>Integration of multiple scaling approaches</li>
            <li>Focus on user experience and adoption</li>
            <li>Growing ecosystem of interoperable networks</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scalability and interoperability are crucial for mainstream adoption</li>
              <li>Multiple solutions are being developed and implemented</li>
              <li>No single solution fits all use cases</li>
              <li>Future success depends on combining multiple approaches</li>
            </ul>
          </div>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Blockchain Scalability and Interoperability section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockchainScalabilitySection;
