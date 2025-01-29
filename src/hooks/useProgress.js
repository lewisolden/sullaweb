import { useDispatch, useSelector } from 'react-redux';
import { 
  updateSectionProgress, 
  updateQuizProgress, 
  resetModuleProgress 
} from '../redux/progressSlice';

export const useProgress = () => {
  const dispatch = useDispatch();
  const progressState = useSelector(state => state.progress);

  // Update section completion status
  const markSectionComplete = (moduleId, sectionId, score = null) => {
    dispatch(updateSectionProgress({
      moduleId, 
      sectionId, 
      completed: true,
      score
    }));
  };

  // Update quiz completion status
  const markQuizComplete = (moduleId, score) => {
    dispatch(updateQuizProgress({
      moduleId,
      completed: true,
      score
    }));
  };

  // Reset progress for a specific module
  const resetProgress = (moduleId) => {
    dispatch(resetModuleProgress({ moduleId }));
  };

  // Get progress for a specific module
  const getModuleProgress = (moduleId) => {
    return progressState.modules[moduleId];
  };

  // Check if a specific section is complete
  const isSectionComplete = (moduleId, sectionId) => {
    return progressState.modules[moduleId].sections[sectionId].completed;
  };

  // Get overall user progress
  const getUserProgressSummary = () => {
    return {
      userLevel: progressState.userLevel,
      totalCompletedModules: progressState.totalCompletedModules,
      moduleProgress: progressState.modules
    };
  };

  return {
    markSectionComplete,
    markQuizComplete,
    resetProgress,
    getModuleProgress,
    isSectionComplete,
    getUserProgressSummary,
    progressState
  };
};
