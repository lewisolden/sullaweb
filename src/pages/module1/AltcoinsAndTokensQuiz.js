import React, { useState } from 'react';

const AltcoinsAndTokensQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const updateProgress = (moduleId, sectionId, completed) => {
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  const quizQuestions = [
    {
      question: "What is the primary purpose of stablecoins?",
      options: [
        "To maximize profits through trading",
        "To minimize price volatility",
        "To replace traditional banking systems",
        "To create digital art"
      ],
      correctAnswer: 1,
      explanation: "Stablecoins are designed to minimize price volatility by pegging their value to a stable asset like a fiat currency or commodities."
    },
    {
      question: "Which of these is NOT a major category of altcoins?",
      options: [
        "Platform Coins",
        "Privacy Coins",
        "Entertainment Coins",
        "Payment Coins"
      ],
      correctAnswer: 2,
      explanation: "The main categories of altcoins include platform coins (like Ethereum), privacy coins (like Monero), payment coins (like Litecoin), and stablecoins. Entertainment coins is not a major category."
    },
    {
      question: "What is the key characteristic of Non-Fungible Tokens (NFTs)?",
      options: [
        "They are always worth the same amount",
        "They are highly volatile",
        "They represent unique digital assets",
        "They are used for payments only"
      ],
      correctAnswer: 2,
      explanation: "NFTs are unique digital assets, meaning each token is different and cannot be exchanged on a like-for-like basis, unlike cryptocurrencies where each unit is identical."
    },
    {
      question: "What is the main purpose of platform coins like Ethereum?",
      options: [
        "To provide complete anonymity",
        "To support development of decentralized applications",
        "To replace Bitcoin",
        "To store digital art"
      ],
      correctAnswer: 1,
      explanation: "Platform coins like Ethereum are designed to support the development of decentralized applications (DApps) and smart contracts on their blockchain."
    },
    {
      question: "What is a primary characteristic of utility tokens?",
      options: [
        "They represent ownership in a company",
        "They provide access to a specific service or product",
        "They are always stable in value",
        "They are issued by governments"
      ],
      correctAnswer: 1,
      explanation: "Utility tokens provide access to a specific service or product within a blockchain ecosystem, like using Basic Attention Token (BAT) in the Brave browser ecosystem."
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
  };

  const moveToNextQuestion = () => {
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
      const passThreshold = quizQuestions.length * 0.6;
      updateProgress(1, 'altcoins-quiz', score >= passThreshold);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setShowExplanation(false);
  };

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">
            Quiz Completed!
          </h2>
          <p className="text-xl mb-4">
            You scored {score} out of {quizQuestions.length}
          </p>
          {score >= 3 ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">
                🎉 Congratulations! You've passed the Altcoins and Tokens quiz!
              </p>
            </div>
          ) : (
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">
                You didn't pass this time. Review the content and try again.
              </p>
            </div>
          )}
          <button 
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Altcoins and Tokens Quiz
            <span className="text-sm ml-4 text-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </h2>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-lg text-gray-700">
              {currentQuizQuestion.question}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {currentQuizQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  w-full p-4 rounded-lg text-left transition-all duration-300
                  ${selectedAnswer === null 
                    ? 'bg-gray-100 hover:bg-blue-100' 
                    : index === currentQuizQuestion.correctAnswer 
                      ? 'bg-green-200' 
                      : selectedAnswer === index 
                        ? 'bg-red-200' 
                        : 'bg-gray-100'}
                `}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className={`
              mt-6 p-4 rounded-lg
              ${selectedAnswer === currentQuizQuestion.correctAnswer 
                ? 'bg-green-100 border-l-4 border-green-500' 
                : 'bg-red-100 border-l-4 border-red-500'}
            `}>
              <h3 className="font-bold mb-2">
                {selectedAnswer === currentQuizQuestion.correctAnswer 
                  ? '✅ Correct!' 
                  : '❌ Incorrect'}
              </h3>
              <p>{currentQuizQuestion.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <button
              onClick={moveToNextQuestion}
              className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              {currentQuestion < quizQuestions.length - 1 
                ? 'Next Question' 
                : 'Finish Quiz'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AltcoinsAndTokensQuiz;
