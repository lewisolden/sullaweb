import React, { useState, useEffect } from 'react';
import { useProgress } from '../contexts/ProgressContext';

const Module1Quiz = () => {
  const { updateProgress } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const quizQuestions = [
    {
      question: "What is the fundamental innovation of digital currencies?",
      options: [
        "Creating digital art",
        "Decentralization and peer-to-peer transactions",
        "Replacing physical money completely",
        "Reducing bank fees"
      ],
      correctAnswer: 1,
      explanation: "Digital currencies introduce decentralization, allowing peer-to-peer transactions without intermediaries like banks."
    },
    {
      question: "What problem did Bitcoin specifically aim to solve?",
      options: [
        "Slow internet speeds",
        "Global communication challenges",
        "The double-spending problem in digital transactions",
        "Reducing carbon emissions"
      ],
      correctAnswer: 2,
      explanation: "Bitcoin was designed to solve the double-spending problem, ensuring that a digital token cannot be spent more than once without a central authority."
    },
    {
      question: "What makes cryptocurrencies different from traditional fiat currencies?",
      options: [
        "They are printed on special paper",
        "They are controlled by a central bank",
        "They use blockchain technology and are decentralized",
        "They can only be used online"
      ],
      correctAnswer: 2,
      explanation: "Cryptocurrencies are unique because they use decentralized blockchain technology, operating without a central controlling authority."
    },
    {
      question: "What is a key characteristic of blockchain technology?",
      options: [
        "It's completely anonymous",
        "It can be easily modified",
        "It provides transparency and is immutable",
        "It requires no computational power"
      ],
      correctAnswer: 2,
      explanation: "Blockchain technology ensures transparency and immutability, meaning once data is recorded, it cannot be easily changed."
    },
    {
      question: "What is the primary purpose of a stablecoin?",
      options: [
        "To make quick profits",
        "To minimize price volatility",
        "To replace traditional banking",
        "To create digital art"
      ],
      correctAnswer: 1,
      explanation: "Stablecoins are designed to minimize price volatility by pegging their value to a stable asset like a fiat currency."
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
      // Update module progress based on final score
      const passThreshold = quizQuestions.length * 0.6;
      updateProgress(1, 'quiz', score >= passThreshold);
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
                🎉 Congratulations! You've passed the module quiz!
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
