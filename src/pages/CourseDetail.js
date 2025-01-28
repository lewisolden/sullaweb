import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courseModules from '../data/courseModules.json';
import quizzes from '../data/quizzes';
import ModuleQuiz from '../components/ModuleQuiz';

const CourseDetail = () => {
  const { moduleId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  // Find the module based on the URL parameter
  const module = courseModules.modules.find(m => m.id === parseInt(moduleId));

  if (!module) {
    return <div className="text-center text-xl">Module not found</div>;
  }

  const handleNextSection = () => {
    if (currentSection < module.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleRestartModule = () => {
    setCurrentSection(0);
    setShowQuiz(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">{module.title}</h1>

      {!showQuiz ? (
        <div className="module-content">
          <div className="section-content bg-gray-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {module.sections[currentSection].title}
            </h2>
            <p className="text-gray-700">
              {module.sections[currentSection].content}
            </p>
          </div>

          <div className="navigation-controls flex justify-between mt-6">
            {currentSection > 0 && (
              <button 
                onClick={handlePreviousSection}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Previous Section
              </button>
            )}

            <button 
              onClick={handleNextSection}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-auto"
            >
              {currentSection < module.sections.length - 1 
                ? 'Next Section' 
                : 'Start Quiz'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <ModuleQuiz 
            moduleId={`module${moduleId}`}
            onRestart={handleRestartModule}
          />
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
