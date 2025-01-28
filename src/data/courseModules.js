// Filename: src/data/courseModules.js
const courseModules = [
  {
    id: "module1",
    title: "Introduction to Cryptocurrency",
    description: "Learn the fundamentals of digital currencies and blockchain technology",
    chapters: [
      {
        id: "overview",
        title: "Overview of Cryptocurrency",
        content: `Cryptocurrency is a revolutionary form of digital or virtual currency that uses cryptography for security. 
        Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.

        Key Characteristics:
        - Decentralized: No central authority controls the currency
        - Digital: Exists only in digital form
        - Secure: Uses advanced cryptographic techniques
        - Transparent: Transactions are recorded on a public ledger`
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
      }
    ]
  }
];

export default courseModules;
