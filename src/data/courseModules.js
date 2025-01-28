// src/pages/CourseDetail.js
import module1 from '../data/courseModules';

const CourseDetail = () => {
  const { moduleId } = useParams();
  const module = moduleId === 'module1' ? module1 : null;
  id: "module1",
  title: "Fundamentals of Cryptocurrency";
  description: "A comprehensive introduction to digital currencies, blockchain technology, and the revolutionary world of cryptocurrencies",
  introduction: `Welcome to the first module of our journey into the world of cryptocurrencies and blockchain technology. In this foundational module, we'll explore the basic concepts that underpin this revolutionary technology and set the stage for the more advanced topics we'll cover later in the course.

We'll begin by delving into the nature of digital currencies, understanding what they are and how they differ from traditional forms of money. You'll learn about the historical context that led to the creation of cryptocurrencies, tracing the evolution of money from ancient barter systems to modern digital tokens.

Next, we'll focus on Bitcoin, the world's first and most famous cryptocurrency. We'll examine its creation, underlying technology, and the problems it was designed to solve. This will lead us into a broader discussion of other cryptocurrencies (often called "altcoins") and tokens, giving you a comprehensive view of the current cryptocurrency landscape.

As we progress, we'll explore the dynamic and often volatile world of cryptocurrency markets. You'll gain insights into how these markets function, the factors that influence cryptocurrency prices, and the tools used to analyse them.

Finally, we'll round off the module with an introduction to the cryptographic principles that make cryptocurrencies possible. While we won't delve too deeply into mathematics, you'll gain a solid understanding of concepts like hash functions and public-key cryptography.

By the end of this module, you'll have a strong foundation in the fundamental concepts of cryptocurrencies. This knowledge will be crucial as we move forward to explore more complex topics in subsequent modules.

Remember, the world of cryptocurrencies is vast and constantly evolving. This module is your first step into this exciting field, so let's begin our exploration with curiosity and an open mind.`,
  moduleKeyPoints: {
    revolutionaryNature: `Cryptocurrencies represent a fundamental shift in how we conceive and use money. Unlike traditional fiat currencies issued by central banks, cryptocurrencies are decentralised, digital assets that use cryptography for security. They operate on blockchain technology, which ensures transparency, immutability, and eliminates the need for intermediaries in transactions. This innovation has the potential to democratise finance, enable faster and cheaper cross-border transactions, and provide financial services to the unbanked population worldwide.`,
    bitcoinAsPioneer: `Bitcoin, launched in 2009, is not just the first cryptocurrency but also the blueprint for many that followed. It introduced key concepts like blockchain, proof-of-work consensus mechanism, and a fixed supply monetary policy. Understanding Bitcoin's structure, including its transaction model, mining process, and halving events, provides a crucial foundation for grasping how most cryptocurrencies function. While newer cryptocurrencies have introduced variations and improvements, Bitcoin remains the most valuable and widely recognized cryptocurrency, often serving as a benchmark for the entire crypto market.`
  },
  chapters: [
    {
      id: "digital-currencies",
      title: "Understanding Digital Currencies",
      sections: [
        {
          title: "Types of Digital Currencies",
          content: `Digital currencies encompass various forms of electronic money:
          1. Virtual Currencies: Digital representations of value within specific ecosystems
          2. Cryptocurrencies: Decentralized digital currencies using cryptography
          3. Central Bank Digital Currencies (CBDCs): Digital forms of fiat money issued by central banks`,
          learningObjectives: [
            "Define and distinguish between different types of digital currencies",
            "Understand the unique characteristics of each digital currency type"
          ]
        }
      ]
    },
    {
      id: "money-evolution",
      title: "Evolution of Money",
      sections: [
        {
          title: "From Barter to Digital Tokens",
          content: `A comprehensive journey through monetary systems:
          1. Barter System: Direct exchange of goods and services
          2. Commodity Money: Using valuable items as currency
          3. Metal Coins: Standardized value representation
          4. Paper Money: Promises of value
          5. Digital Currencies: Electronic and cryptographic money`,
          learningObjectives: [
            "Trace the historical development of monetary systems",
            "Identify key milestones in the evolution of money"
          ]
        }
      ]
    },
    {
      id: "bitcoin-fundamentals",
      title: "Bitcoin and the Double-Spending Problem",
      sections: [
        {
          title: "Solving the Double-Spending Challenge",
          content: `Bitcoin's primary innovation was solving the double-spending problem in digital currencies:
          - Double-Spending: The risk of digital money being spent more than once
          - Blockchain Solution: A decentralized, immutable ledger that verifies and records all transactions
          - Consensus Mechanism: Proof of Work ensures transaction validity
          
          Key Architectural Components:
          - Proof of Work Consensus
          - UTXO (Unspent Transaction Output) Model
          - Fixed Supply Monetary Policy`,
          learningObjectives: [
            "Explain the double-spending problem",
            "Understand how blockchain technology addresses this issue",
            "Analyze Bitcoin's key architectural components"
          ]
        }
      ]
    },
    {
      id: "cryptocurrency-ecosystem",
      title: "Cryptocurrency Ecosystem",
      sections: [
        {
          title: "Coins vs. Tokens",
          content: `Understanding the cryptocurrency landscape:
          - Coins: Native blockchain cryptocurrencies (e.g., Bitcoin, Ethereum)
          - Tokens: Digital assets built on existing blockchain platforms
          
          Initial Coin Offerings (ICOs):
          - A fundraising method for cryptocurrency projects
          - Similar to traditional initial public offerings (IPOs)
          - Process of creating and selling tokens to investors`,
          learningObjectives: [
            "Differentiate between coins and tokens",
            "Understand the concept and process of ICOs"
          ]
        }
      ]
    },
    {
      id: "market-analysis",
      title: "Cryptocurrency Market Analysis",
      sections: [
        {
          title: "Market Metrics and Fundamental Analysis",
          content: `Key Market Indicators:
          - Market Capitalization: Total value of circulating coins
          - Trading Volume: Amount of currency traded in a specific period
          - Price Volatility: Rate of price fluctuations
          
          Fundamental Analysis Techniques:
          - Evaluating project team and technology
          - Assessing market potential and use cases
          - Analyzing technological innovation and adoption`,
          learningObjectives: [
            "Interpret basic cryptocurrency market metrics",
            "Apply fundamental analysis techniques to evaluate projects"
          ]
        }
      ]
    },
    {
      id: "cryptography-basics",
      title: "Cryptographic Foundations",
      sections: [
        {
          title: "Cryptographic Principles in Cryptocurrencies",
          content: `Core Cryptographic Concepts:
          - Hash Functions: Converting input data to fixed-size outputs
          - Public-Key Cryptography: Secure communication using key pairs
          
          Cryptocurrency Wallet Security:
          - Private and Public Keys
          - Secure Key Management Practices
          - Wallet Types: Hardware, Software, Paper`,
          learningObjectives: [
            "Describe basic cryptographic principles",
            "Demonstrate ability to set up and secure a cryptocurrency wallet"
          ]
        }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "What problem did Bitcoin originally solve?",
      options: [
        "Creating digital art",
        "Double-spending in digital currencies",
        "Reducing bank fees",
        "Creating online games"
      ],
      correctAnswer: 1,
      explanation: "Bitcoin solved the double-spending problem by introducing blockchain technology, which prevents digital currencies from being spent more than once."
    },
    // Additional quiz questions can be added here
  ]
};

export default [module1];
