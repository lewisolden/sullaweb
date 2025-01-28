// More interactive and visually appealing quiz design
{!quizSubmitted ? (
  <div className="space-y-6">
    {module.quiz.map((question, index) => (
      <div 
        key={question.id} 
        className={`bg-white p-6 rounded-lg shadow-md transition-all ${
          quizAnswers[question.id] !== undefined 
            ? 'border-2 border-blue-500' 
            : 'border border-gray-200'
        }`}
      >
        <p className="text-xl font-semibold mb-4">{question.question}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {question.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleQuizAnswer(question.id, optionIndex)}
              className={`
                px-4 py-3 rounded-lg text-left transition-all 
                ${quizAnswers[question.id] === optionIndex 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-blue-100'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ))}
    
    <button
      onClick={submitQuiz}
      disabled={!Object.keys(quizAnswers).length === module.quiz.length}
      className={`
        w-full py-3 rounded-lg text-white font-bold transition-all
        ${Object.keys(quizAnswers).length === module.quiz.length
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 cursor-not-allowed'}
      `}
    >
      Submit Quiz
    </button>
  </div>
) : (
  // Quiz results with more interactive design
)}
