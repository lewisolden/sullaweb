import React, { createContext, useState, useContext, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});

  // Load progress from localStorage on initial load
  useEffect(() => {
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Update progress and save to localStorage
  const updateProgress = (moduleId, sectionId, completed) => {
    const newProgress = {
      ...progress,
      [moduleId]: {
        ...(progress[moduleId] || {}),
        [sectionId]: completed
      }
    };
    
    setProgress(newProgress);
    localStorage.setItem('courseProgress', JSON.stringify(newProgress));
  };

  // Check if a specific section is completed
  const isSectionCompleted = (moduleId, sectionId) => {
    return progress[moduleId]?.[sectionId] || false;
  };

  // Calculate module completion percentage
  const getModuleCompletionPercentage = (moduleId) => {
    const moduleProgress = progress[moduleId] || {};
    const totalSections = Object.keys(moduleProgress).length;
    const completedSections = Object.values(moduleProgress).filter(Boolean).length;
    
    return totalSections > 0 
      ? Math.round((completedSections / totalSections) * 100) 
      : 0;
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      updateProgress, 
      isSectionCompleted,
      getModuleCompletionPercentage 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
