import React, { useState } from 'react';

const HistoryOfMoneyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What was a key limitation of the barter system?",
      options: [
        "It was too complex",
        "Double Coincidence of Wants",
        "It was too expensive",
        "Lack of digital technologies"
      ],
      correctAnswer: 1,
      explanation: "The Double Coincidence of Wants was a major limitation of barter systems, meaning both parties needed to have exactly what the other wanted."
    },
    {
      question: "What was the first widespread form of commodity money?",
      options: [
        "Gold coins",
        "Paper money",
        "Cowrie shells",
        "Credit cards"
      ],
      correctAnswer: 2,
      explanation: "Cowrie shells were widely used as a form of commodity money in many parts of Africa and Asia."
    },
    // Add more questions following the same structure
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const moveToNextQuestion = () => {
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
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
          {score >= 2 ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">
                🎉 Congratulations! You've passed the History of Money quiz!
              </p>
            </div>
          ) : (
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">
                You didn't pass this time. Review the content and try again.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
          History of Money Quiz
        </h2>
        
        <div className="mb-6">
          <p className="text-xl mb-4">{currentQuizQuestion.question}</p>
          
          <div className="space-y-4">
            {currentQuizQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  w-full p-3 text-left rounded-lg transition-colors
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

          {selectedAnswer !== null && (
            <div className="mt-4">
              <p className="font-bold">
                {selectedAnswer === currentQuizQuestion.correctAnswer 
                  ? '✅ Correct!' 
                  : '❌ Incorrect'}
              </p>
              <p className="text-gray-600 mt-2">
                {currentQuizQuestion.explanation}
              </p>
              
              <button
                onClick={moveToNextQuestion}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                {currentQuestion < quizQuestions.length - 1 
                  ? 'Next Question' 
                  : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryOfMoneyQuiz;
