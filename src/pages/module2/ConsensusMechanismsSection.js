import React, { useState, useEffect } from 'react';

const ConsensusMechanismsSection = () => {
  const [isFullyRead, setIsFullyRead] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mock progress update function
  const updateProgress = (moduleId, sectionId, completed) => {
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);

      if (scrollPercent > 95) {
        setIsFullyRead(true);
        updateProgress(2, 'consensus-mechanisms', true);
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
          Consensus Mechanisms
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Consensus mechanisms are crucial components of blockchain networks, ensuring 
            agreement on the state of the ledger across all participants. These mechanisms 
            prevent double-spending and maintain the integrity of the blockchain.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Proof of Work (PoW)</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">How PoW Works</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Miners compete to solve complex mathematical puzzles</li>
            <li>First miner to solve the puzzle gets to add the next block</li>
            <li>Other nodes verify the solution</li>
            <li>If valid, the new block is added to the blockchain</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Advantages of PoW</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Highly secure against attacks</li>
            <li>Proven track record (used by Bitcoin)</li>
            <li>Decentralized nature resistant to manipulation</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Disadvantages of PoW</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Energy-intensive mining process</li>
            <li>Potential for mining centralization</li>
            <li>Slower transaction processing</li>
            <li>Environmental concerns due to high power consumption</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Proof of Stake (PoS)</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">How PoS Works</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Validators lock up cryptocurrency as stake</li>
            <li>Protocol selects validator to create next block</li>
            <li>Honest validation rewards validators</li>
            <li>Malicious behavior risks stake loss</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Advantages of PoS</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>More energy-efficient than PoW</li>
            <li>Potentially faster transaction processing</li>
            <li>Encourages long-term holding of cryptocurrency</li>
            <li>Lower hardware requirements</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Disadvantages of PoS</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Potential for centralization (rich get richer)</li>
            <li>Less proven than PoW</li>
            <li>Possible "nothing at stake" problem</li>
            <li>Initial distribution challenges</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Comparison of PoW and PoS</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-bold mb-2">Proof of Work:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Higher energy consumption</li>
                <li>Proven security model</li>
                <li>Slower transaction speed</li>
                <li>Hardware-intensive</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Proof of Stake:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Energy efficient</li>
                <li>Newer, less tested</li>
                <li>Faster transactions</li>
                <li>Capital-intensive</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Other Consensus Mechanisms</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Delegated Proof of Stake (DPoS)</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Token holders vote for delegates to validate transactions</li>
            <li>Higher transaction throughput</li>
            <li>More centralized than traditional PoS</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Proof of Authority (PoA)</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Pre-approved validators only</li>
            <li>Suitable for private networks</li>
            <li>High performance but less decentralized</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Future of Consensus Mechanisms</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Research into more efficient mechanisms</li>
            <li>Hybrid approaches combining different methods</li>
            <li>Focus on scalability and sustainability</li>
            <li>Enhanced security features</li>
            <li>Integration with layer-2 solutions</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Choosing the Right Consensus Mechanism</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Consider network requirements (speed, security, decentralization)</li>
            <li>Evaluate resource availability</li>
            <li>Assess scalability needs</li>
            <li>Consider environmental impact</li>
            <li>Review regulatory requirements</li>
          </ul>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Consensus Mechanisms section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsensusMechanismsSection;
