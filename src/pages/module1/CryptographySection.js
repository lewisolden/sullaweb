import React, { useState, useEffect } from 'react';

const CryptographySection = () => {
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
        updateProgress(1, 'cryptography', true);
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
          Basic Cryptography Concepts
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Cryptography is the foundation of cryptocurrency security and functionality. 
            Understanding these basic concepts is crucial for grasping how cryptocurrencies 
            work and why they're considered secure.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">What is Cryptography?</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>The practice and study of techniques for secure communication in the presence of adversaries</li>
            <li>Enables data confidentiality, integrity, and authentication</li>
            <li>Essential for protecting sensitive information in digital systems</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Key Concepts in Cryptography</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Encryption and Decryption</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Encryption: Converting plaintext into ciphertext</li>
            <li>Decryption: Converting ciphertext back into plaintext</li>
            <li>Ensures data confidentiality</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Cryptographic Keys</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Pieces of information used to control the output of cryptographic algorithms</li>
            <li>Types: Symmetric keys (same key for encryption and decryption) and Asymmetric keys (public and private key pairs)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">3. Hash Functions</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>One-way functions that convert input data of any size into a fixed-size output</li>
            <li>Properties: Deterministic, quick to compute, infeasible to reverse</li>
            <li>Examples: SHA-256 (used in Bitcoin), Keccak (used in Ethereum)</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Cryptography in Cryptocurrencies</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Public Key Cryptography in Cryptocurrencies</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Public keys serve as cryptocurrency addresses</li>
            <li>Private keys are used to sign transactions and prove ownership</li>
            <li>Ensures secure and verifiable transactions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Digital Signatures</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Created using the sender's private key</li>
            <li>Verified using the sender's public key</li>
            <li>Proves authenticity and ownership of transactions</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Advanced Cryptographic Concepts</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Zero-Knowledge Proofs</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Allow one party to prove knowledge without revealing the information itself</li>
            <li>Used in privacy-focused cryptocurrencies like Zcash</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Merkle Trees</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Efficient data structure for verifying the integrity of large datasets</li>
            <li>Used in cryptocurrencies to summarize all transactions in a block</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Security Considerations</h2>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">1. Key Management</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Secure storage of private keys is crucial</li>
            <li>Loss of private keys means permanent loss of access to funds</li>
            <li>Various methods: Hardware wallets, paper wallets, brain wallets</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mt-6">2. Common Vulnerabilities</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>Weak key generation using predictable sources</li>
            <li>Implementation flaws in cryptographic software</li>
            <li>Social engineering attacks targeting key holders</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Future of Cryptography in Blockchain</h2>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>Development of quantum-resistant cryptography</li>
            <li>Improved privacy-preserving techniques</li>
            <li>Enhanced efficiency in cryptographic operations</li>
            <li>New applications in smart contracts and DeFi</li>
          </ul>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the Basic Cryptography Concepts section!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptographySection;
