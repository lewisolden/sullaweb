import React, { useState } from 'react'; // Remove useEffect
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
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: selectedAnswer
    });
  };

  const submitQuiz = () => {
    const correctAnswers = module.quiz.filter(
      q => quizAnswers[q.id] === q.correctAnswer
    ).length;
    
    const score = Math.round((correctAnswers / module.quiz.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
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
        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">
              {module.chapters[activeChapter].title}
            </h1>
            <div className="prose max-w-none">
              <p>{module.chapters[activeChapter].content}</p>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Module Quiz</h2>
            {!quizSubmitted ? (
              <>
                {module.quiz.map((question) => (
                  <div key={question.id} className="mb-6">
                    <p className="font-semibold mb-2">{question.question}</p>
                    {question.options.map((option, index) => (
                      <div key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={index}
                            onChange={() => handleQuizAnswer(question.id, index)}
                            checked={quizAnswers[question.id] === index}
                            className="form-radio"
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
                <button
                  onClick={submitQuiz}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit Quiz
                </button>
              </>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">Quiz Results</h3>
                <p className="text-lg">
                  Your Score: {quizScore}%
                  {quizScore >= 70 
                    ? " - Congratulations! You passed." 
                    : " - Keep studying and try again."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
