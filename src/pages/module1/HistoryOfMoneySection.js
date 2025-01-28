import React, { useState, useEffect } from 'react';

const HistoryOfMoneySection = () => {
  const [isFullyRead, setIsFullyRead] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Mock progress update function
  const updateProgress = (moduleId, sectionId, completed) => {
    console.log(`Progress updated: Module ${moduleId}, Section ${sectionId}, Completed: ${completed}`);
  };

  // Quiz questions
  const questions = [
    {
      question: "What was one of the main limitations of the barter system?",
      options: [
        "Double coincidence of wants",
        "Too many currencies",
        "Lack of technology",
        "Government control"
      ],
      correctAnswer: 0,
      explanation: "The double coincidence of wants was a major limitation of barter systems, requiring both parties to have exactly what the other wanted."
    },
    {
      question: "Which of these was NOT used as an early form of commodity money?",
      options: [
        "Salt",
        "Cattle",
        "Plastic",
        "Cowrie shells"
      ],
      correctAnswer: 2,
      explanation: "Plastic is a modern material and was not used as commodity money. Salt, cattle, and cowrie shells were all historically used as forms of money."
    }
  ];

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);

      if (scrollPercent > 95) {
        setIsFullyRead(true);
        updateProgress(1, 'history-of-money', true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnswerSubmit = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log(`Final score: ${score + (selectedOption === questions[currentQuestionIndex].correctAnswer ? 1 : 0)}/${questions.length}`);
    }
  };

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
          History and Evolution of Money
        </h1>

        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Money, in its various forms, has been a cornerstone of human civilization 
            for thousands of years. To understand the significance of modern 
            cryptocurrencies, it's crucial to trace the evolution of money from its 
            earliest incarnations to the digital age.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Barter Systems: The Precursor to Money</h2>
          
          <p>
            Before the invention of money, people used barter systems to exchange 
            goods and services directly. While simple in concept, barter had 
            significant limitations:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>Double Coincidence of Wants: Both parties needed to have what the other wanted</li>
            <li>Lack of a Common Measure of Value: Difficult to compare the value of different items</li>
            <li>Indivisibility of Certain Goods: Some items couldn't be divided for smaller transactions</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Commodity Money</h2>
          
          <p>
            The first forms of money were commodities -- items with intrinsic value 
            that could be used for exchange. Examples include:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>Cowrie Shells: Used in many parts of Africa and Asia</li>
            <li>Salt: So valuable it was used to pay Roman soldiers (origin of the word "salary")</li>
            <li>Cattle: Used in many agricultural societies</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Metallic Money</h2>
          
          <p>
            Around 1000 BCE, metal coins began to appear, bringing significant 
            advantages in durability, portability, and divisibility. This period 
            saw the rise of the first global currencies, like the Roman denarius 
            and the Byzantine solidus.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Paper Money and Early Banking</h2>
          
          <p>
            Paper money emerged in China around 700 CE but didn't become widespread 
            in Europe until the 17th century. This innovation allowed for easier 
            trade and storage of wealth but required trust in the issuing institution.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-8">Electronic Money and Digital Payment Systems</h2>
          
          <p>
            The late 20th and early 21st centuries saw rapid changes in how money 
            is used and transferred, from credit cards to online payment systems 
            and mobile payments. These innovations made transactions faster and 
            more convenient but still relied on traditional banking infrastructure.
          </p>
        </div>

        {/* Completion Indicator */}
        {isFullyRead && !showQuiz && (
          <div className="mt-8 bg-green-100 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              🎉 You've completed the History of Money section! Ready for a quick quiz?
            </p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz Section */}
        {showQuiz && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h3>
            <p className="text-lg mb-4">{questions[currentQuestionIndex].question}</p>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSubmit(index)}
                  className="w-full p-4 text-left rounded border border-gray-300 hover:bg-blue-50"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Score: {score}/{questions.length}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryOfMoneySection;
};

export default HistoryOfMoneySection;
