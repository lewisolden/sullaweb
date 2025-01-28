// Filename: src/pages/CourseDetail.js
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import courseModules from '../data/courseModules';

const CourseDetail = () => {
  const { moduleId } = useParams();
  const module = courseModules.find(m => m.id === moduleId);
  
  const [activeChapter, setActiveChapter] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  if (!module) return <div>Module not found</div>;

  const handleQuizAnswer = (questionId, selectedAnswer) => {
    setQuizAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedAnswer
    }));
  };

  const submitQuiz = () => {
    const correctAnswers = module.quiz.filter(
      q => quizAnswers[q.id] === q.correctAnswer
    ).length;
    
    const score = Math.round((correctAnswers / module.quiz.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const renderChapterContent = () => {
    const chapter = module.chapters[activeChapter];
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">{chapter.title}</h1>
        <div className="prose max-w-none">
          <p>{chapter.content}</p>
        </div>
      </div>
    );
  };

  const renderQuizContent = () => {
    if (quizSubmitted) {
      return (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
          <p className="text-xl mb-4">Your Score: {quizScore}%</p>
          <div className={`
            p-4 rounded-lg 
            ${quizScore >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}>
            {quizScore >= 70 
              ? "Congratulations! You passed the module." 
              : "Keep studying and try again."}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {module.quiz.map((question) => (
          <div 
            key={question.id} 
            className="bg-gray-100 p-4 rounded-lg"
          >
            <p className="text-lg font-semibold mb-4">{question.question}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleQuizAnswer(question.id, optionIndex)}
                  className={`
                    px-4 py-2 rounded-lg text-left transition-all 
                    ${quizAnswers[question.id] === optionIndex 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white hover:bg-blue-100 border'}
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
          disabled={Object.keys(quizAnswers).length !== module.quiz.length}
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
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Chapter Navigation */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Chapters</h2>
          {module.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(index)}
              className={`w-full text-left p-2 mb-2 rounded ${
                activeChapter === index 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-blue-100'
              }`}
            >
              {chapter.title}
            </button>
          ))}
        </div>

        {/* Chapter Content */}
        <div className="md:col-span-3 space-y-8">
          {renderChapterContent()}

          {/* Quiz Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Module Quiz</h2>
            {renderQuizContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
