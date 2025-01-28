const courseModules = [
  {
    id: "module1",
    title: "Introduction to Cryptocurrency",
    description: "Learn the fundamentals of digital currencies and blockchain technology",
    chapters: [
      {
        id: "overview",
        title: "Overview of Cryptocurrency",
        content: `
          Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. 
          Unlike traditional currencies issued by governments, cryptocurrencies are decentralized 
          and operate on a technology called blockchain.

          Key Characteristics:
          - Decentralized: No central authority controls the currency
          - Digital: Exists only in digital form
          - Secure: Uses advanced cryptographic techniques
          - Transparent: Transactions are recorded on a public ledger
        `
      },
      {
        id: "history",
        title: "History of Money",
        content: `
          The evolution of money has been a long journey:

          1. Barter System
          - Earliest form of exchange
          - Direct trade of goods and services
          - Limited by the need for a "double coincidence of wants"

          2. Commodity Money
          - Used valuable items like salt, shells, and cattle as currency
          - Provided more flexibility than pure barter

          3. Metal Coins
          - Introduced around 1000 BCE
          - Gold and silver became standard currency
          - Allowed for more standardized value exchange

          4. Paper Money
          - Emerged in China around 700 CE
          - Represented a promise to pay in precious metals
          - Evolved into modern fiat currencies

          5. Digital Money
          - Electronic fund transfers
          - Online payment systems
          - Cryptocurrencies as the latest evolution
        `
      },
      {
        id: "bitcoin",
        title: "Bitcoin: The First Cryptocurrency",
        content: `
          Bitcoin, created in 2009 by the pseudonymous Satoshi Nakamoto, 
          revolutionized the concept of money:

          Key Innovations:
          - First decentralized digital currency
          - Solved the "double-spending" problem
          - Introduced blockchain technology
          - Limited supply of 21 million coins
          - Operates without central authority

          Milestones:
          - 2008: Bitcoin whitepaper published
          - 2009: First Bitcoin block mined
          - 2010: First real-world transaction (10,000 BTC for two pizzas)
          - 2013: Bitcoin price first exceeded $1,000
          - 2021: El Salvador adopted Bitcoin as legal tender
        `
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What is the fundamental innovation of Bitcoin?",
        options: [
          "Creating digital art",
          "Solving the double-spending problem",
          "Reducing bank fees",
          "Creating online games"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What makes cryptocurrencies different from traditional currencies?",
        options: [
          "They are printed on special paper",
          "They are controlled by a central bank",
          "They are decentralized and use blockchain technology",
          "They can only be used online"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Who created Bitcoin?",
        options: [
          "Elon Musk",
          "Bill Gates",
          "Satoshi Nakamoto",
          "Mark Zuckerberg"
        ],
        correctAnswer: 2
      }
    ]
  },
  // Other modules...
];

export default courseModules;
