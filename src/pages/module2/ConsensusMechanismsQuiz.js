import React, { useState } from 'react';

const ConsensusMechanismsQuiz = () => {
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
      question: "What is the main purpose of a consensus mechanism in blockchain?",
      options: [
        "To speed up transactions",
        "To reduce costs",
        "To ensure agreement on the state of the network",
        "To store data"
      ],
      correctAnswer: 2,
      explanation: "Consensus mechanisms are crucial for ensuring all participants in a blockchain network agree on the valid state of the network, preventing double-spending and maintaining integrity."
    },
    {
      question: "What is the main criticism of Proof of Work (PoW) consensus?",
      options: [
        "Too slow",
        "High energy consumption",
        "Too centralized",
        "Lack of security"
      ],
      correctAnswer: 1,
      explanation: "The primary criticism of Proof of Work is its high energy consumption due to the computational power required for mining, leading to environmental concerns."
    },
    {
      question: "In Proof of Stake (PoS), how are validators chosen?",
      options: [
        "By solving complex math problems",
        "By random selection",
        "Based on the amount of cryptocurrency they stake",
        "By network administrators"
      ],
      correctAnswer: 2,
      explanation: "In PoS, validators are chosen based on the amount of cryptocurrency they stake (lock up) in the network, with larger stakes generally meaning higher chances of being selected."
    },
    {
      question: "What is the 'nothing at stake' problem in Proof of Stake systems?",
      options: [
        "Validators have no incentive to participate",
        "Validators can validate multiple chain forks without risk",
        "The network has no security",
        "Transactions are too expensive"
      ],
      correctAnswer: 1,
      explanation: "The 'nothing at stake' problem refers to validators potentially validating multiple chain forks simultaneously since it costs them nothing to do so, unlike in PoW where mining requires significant resource investment."
    },
    {
      question: "Which consensus mechanism is typically most suitable for private blockchain networks?",
      options: [
        "Proof of Work",
        "Proof of Authority",
        "Proof of Stake",
        "Delegated Proof of Stake"
      ],
      correctAnswer: 1,
      explanation: "Proof of Authority (PoA) is most suitable for private networks as it relies on pre-approved validators, making it efficient and practical for controlled environments where participants are known."
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
      updateProgress(2, 'consensus-mechanisms-quiz', score >= passThreshold);
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
                🎉 Congratulations! You've passed the Consensus Mechanisms quiz!
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
            Consensus Mechanisms Quiz
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

export default ConsensusMechanismsQuiz;
