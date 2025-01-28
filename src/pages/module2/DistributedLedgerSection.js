import React, { useState, useEffect } from 'react';

const DistributedLedgerSection = () => {
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
        updateProgress(2, 'distributed-ledger', true);
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
          Distributed Ledger Technology
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Distributed Ledger Technology (DLT) is the broader category of decentralized 
            databases that blockchain belongs to. It represents a paradigm shift in how 
            data is stored, shared, and verified across a network of multiple participants.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Key Characteristics of DLT</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Decentralization</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>No single point of control or failure</li>
            <li>Enhances resilience and reduces vulnerability to attacks</li>
            <li>Distributed control among network participants</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Transparency</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>All participants can view the ledger</li>
            <li>Increases trust and accountability</li>
            <li>Creates an auditable trail of transactions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Consensus</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Network participants agree on the validity of data</li>
            <li>Various consensus mechanisms exist</li>
            <li>Ensures consistency across the network</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Types of Distributed Ledgers</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Public Distributed Ledgers</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Open for anyone to participate</li>
            <li>Example: Bitcoin blockchain</li>
            <li>Maximum transparency and decentralization</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Private Distributed Ledgers</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Restricted to authorized participants</li>
            <li>Often used in enterprise solutions</li>
            <li>Greater control over access and permissions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Consortium Distributed Ledgers</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Operated by a group of organizations</li>
            <li>Balances decentralization with some level of central control</li>
            <li>Suitable for business networks and industry collaborations</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Applications of DLT</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Supply Chain Management</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Tracking goods from manufacture to sale</li>
            <li>Enhancing transparency and reducing fraud</li>
            <li>Improving inventory management</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Financial Services</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Cross-border payments and settlements</li>
            <li>Trade finance</li>
            <li>Asset tokenization</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Healthcare</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Secure sharing of patient records</li>
            <li>Drug supply chain tracking</li>
            <li>Clinical trial management</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Challenges and Limitations</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Scalability</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Handling large volumes of transactions</li>
            <li>Balancing decentralization with efficiency</li>
            <li>Network capacity constraints</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Interoperability</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Communication between different DLT systems</li>
            <li>Standard protocols and interfaces</li>
            <li>Cross-chain transactions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Regulatory Compliance</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Adapting to existing legal frameworks</li>
            <li>Data privacy and protection</li>
            <li>Jurisdictional challenges</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Future Outlook</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Integration with emerging technologies (IoT, AI)</li>
            <li>Development of industry-specific solutions</li>
            <li>Improved scalability and interoperability</li>
            <li>Greater adoption in traditional industries</li>
            <li>Evolution of regulatory frameworks</li>
          </ul>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Distributed Ledger Technology section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistributedLedgerSection;
