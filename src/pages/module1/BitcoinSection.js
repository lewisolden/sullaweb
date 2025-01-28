import React, { useState, useEffect } from 'react';

const BitcoinSection = () => {
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
        updateProgress(1, 'bitcoin', true);
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
          Bitcoin: The First Cryptocurrency
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Bitcoin, launched in 2009, marked the beginning of the cryptocurrency era. It represented a radical departure from traditional forms 
            of money and payment systems. In this section, we'll explore the origins of Bitcoin, its key innovations, and its impact on the 
            financial world.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">The Genesis of Bitcoin</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Created by an anonymous person or group using the pseudonym Satoshi Nakamoto</li>
            <li>Whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System" published on October 31, 2008</li>
            <li>First Bitcoin block (the "genesis block") mined on January 3, 2009</li>
            <li>First real-world transaction: 10,000 BTC for two pizzas in May 2010</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Key Innovations</h2>
          
          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Decentralisation</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>No central authority controls Bitcoin</li>
            <li>Transactions are verified by a network of computers worldwide</li>
            <li>Eliminates the need for intermediaries like banks</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Blockchain Technology</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>A public, distributed ledger that records all transactions</li>
            <li>Ensures transparency and prevents double-spending</li>
            <li>Each block contains a group of transactions and a reference to the previous block</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Proof-of-Work Consensus</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Miners compete to solve complex mathematical problems</li>
            <li>Ensures network security and distributes new bitcoins</li>
            <li>Requires significant computational power</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Bitcoin's Monetary Policy</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Maximum supply capped at 21 million bitcoins</li>
            <li>New bitcoins are created through mining, with rewards halving approximately every four years</li>
            <li>Designed to be deflationary, contrasting with inflationary fiat currencies</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Notable Events in Bitcoin's History</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>2013: Bitcoin price surpasses $1,000 for the first time</li>
            <li>2014: Mt. Gox, the largest Bitcoin exchange, collapses due to a hack</li>
            <li>2017: Bitcoin reaches nearly $20,000, sparking widespread media attention</li>
            <li>2021: El Salvador becomes the first country to adopt Bitcoin as legal tender</li>
            <li>2021: Bitcoin reaches an all-time high of nearly $69,000</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Challenges and Controversies</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Scalability</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Bitcoin network can process only about 7 transactions per second</li>
            <li>Led to debates and proposals for scaling solutions (e.g., Lightning Network)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Energy Consumption</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Bitcoin mining requires significant electricity</li>
            <li>Raises environmental concerns and debates about sustainability</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">Regulatory Issues</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Different countries have taken varying approaches to regulating Bitcoin</li>
            <li>Concerns about its use in illegal activities and tax evasion</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Bitcoin's Impact and Legacy</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Sparked the creation of thousands of other cryptocurrencies and blockchain projects</li>
            <li>Challenged traditional notions of money and financial systems</li>
            <li>Attracted significant institutional interest and investment</li>
            <li>Influenced discussions about monetary policy and the role of central banks</li>
            <li>Demonstrated the potential of blockchain technology beyond just digital currency</li>
          </ul>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Bitcoin section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BitcoinSection;
