import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { 
  AcademicCapIcon, 
  CheckCircleIcon, 
  LightningBoltIcon 
} from '@heroicons/react/solid';

const ProgressDashboard = () => {
  const { getUserProgressSummary } = useProgress();
  const { userLevel, totalCompletedModules, moduleProgress } = getUserProgressSummary();

  const renderModuleProgress = (moduleId, moduleName) => {
    const module = moduleProgress[moduleId];
    const completedSections = Object.values(module.sections).filter(section => section.completed).length;
    const totalSections = Object.keys(module.sections).length;

    return (
      <div 
        key={moduleId} 
        className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-xl transition duration-300"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-blue-800">
            Module {moduleId}: {moduleName}
          </h3>
          {module.quizCompleted ? (
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          ) : (
            <LightningBoltIcon className="h-8 w-8 text-yellow-500" />
          )}
        </div>

        <div className="mb-4">
          <div className="bg-blue-100 rounded-full h-4 mb-2">
            <div 
              className="bg-blue-600 rounded-full h-4" 
              style={{ width: `${module.overallProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-blue-700">
            Completed {completedSections} of {totalSections} sections
          </p>
        </div>

        {module.quizCompleted && (
          <p className="text-sm text-blue-700">
            Quiz Score: {module.quizScore}%
          </p>
        )}

        <div className="mt-4">
          <Link 
            to={`/modules/module${moduleId}`} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Continue Module
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center mb-8">
          <AcademicCapIcon className="h-12 w-12 text-blue-600 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              Your Learning Journey
            </h1>
            <p className="text-blue-700">
              Current Level: {userLevel} | Completed Modules: {totalCompletedModules}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {renderModuleProgress(1, "Fundamentals of Cryptocurrency")}
          {renderModuleProgress(2, "What is a Blockchain?")}
          {renderModuleProgress(3, "Blockchain Technology")}
        </div>

        {totalCompletedModules === 3 && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-6">
            <p className="text-green-800 font-semibold">
              Congratulations! You've completed all modules and reached the Advanced level!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressDashboard;
