import React, { useState, useEffect } from 'react';

const BlockchainPlatformsSection = () => {
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
        updateProgress(3, 'blockchain-platforms', true);
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
          Blockchain Development Platforms
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Blockchain development platforms provide the necessary infrastructure and tools 
            for creating decentralized applications (DApps) and implementing blockchain 
            solutions. Each platform offers unique features, advantages, and trade-offs.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">1. Ethereum</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Overview</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>First and most popular smart contract platform</li>
            <li>Launched in 2015 by Vitalik Buterin</li>
            <li>Uses Solidity programming language</li>
            <li>Transitioning to Proof of Stake (ETH 2.0)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Smart contract functionality</li>
            <li>Large developer community</li>
            <li>Extensive tooling and resources</li>
            <li>ERC token standards</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Challenges</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Scalability limitations</li>
            <li>High gas fees during network congestion</li>
            <li>Complex upgrade process</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">2. Solana</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Overview</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>High-performance blockchain platform</li>
            <li>Uses Proof of History (PoH) consensus</li>
            <li>Focuses on scalability and speed</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>High transaction throughput (65,000+ TPS)</li>
            <li>Low transaction costs</li>
            <li>Rust-based smart contracts</li>
            <li>Single global state</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">3. Cardano</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Overview</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Research-driven development approach</li>
            <li>Uses Ouroboros Proof of Stake protocol</li>
            <li>Focus on sustainability and scalability</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Academic peer review of all features</li>
            <li>Multi-layer architecture</li>
            <li>Formal verification of smart contracts</li>
            <li>Native token support</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">4. Polkadot</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Overview</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Multi-chain network focusing on interoperability</li>
            <li>Created by Ethereum co-founder Gavin Wood</li>
            <li>Uses nominated Proof of Stake</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Parallel processing through parachains</li>
            <li>Cross-chain message passing</li>
            <li>Shared security model</li>
            <li>Governance mechanism</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">5. Binance Smart Chain (BSC)</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Overview</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Ethereum-compatible smart contract platform</li>
            <li>Operated by Binance</li>
            <li>Uses Proof of Staked Authority consensus</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Low transaction fees</li>
            <li>High performance</li>
            <li>EVM compatibility</li>
            <li>Cross-chain integration with Binance Chain</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Platform Comparison</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Performance</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Transaction Speed: Solana > BSC > Polkadot > Cardano > Ethereum</li>
            <li>Decentralization: Ethereum > Cardano > Polkadot > Solana > BSC</li>
            <li>Developer Tools: Ethereum > BSC > Solana > Cardano > Polkadot</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Choosing a Platform</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Factors to Consider</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Project requirements and goals</li>
            <li>Performance needs</li>
            <li>Developer expertise</li>
            <li>Community support</li>
            <li>Platform maturity</li>
            <li>Cost considerations</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each platform offers unique advantages and trade-offs</li>
              <li>Platform choice should align with project requirements</li>
              <li>Consider ecosystem maturity and community support</li>
              <li>Evaluate long-term sustainability and growth potential</li>
            </ul>
          </div>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Blockchain Development Platforms section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockchainPlatformsSection;
