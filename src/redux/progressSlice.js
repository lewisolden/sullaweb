import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    modules: {
      1: {
        sections: {
          'digital-currencies': { completed: false, score: null },
          'history-of-money': { completed: false, score: null },
          'bitcoin': { completed: false, score: null },
          'altcoins-and-tokens': { completed: false, score: null },
          'market-dynamics': { completed: false, score: null },
          'cryptography': { completed: false, score: null }
        },
        overallProgress: 0,
        quizCompleted: false,
        quizScore: null
      },
      2: {
        sections: {
          'blockchain-basics': { completed: false, score: null },
          'distributed-ledger': { completed: false, score: null },
          'consensus-mechanisms': { completed: false, score: null },
          'smart-contracts': { completed: false, score: null }
        },
        overallProgress: 0,
        quizCompleted: false,
        quizScore: null
      },
      3: {
        sections: {
          'scalability': { completed: false, score: null },
          'blockchain-types': { completed: false, score: null },
          'blockchain-platforms': { completed: false, score: null }
        },
        overallProgress: 0,
        quizCompleted: false,
        quizScore: null
      }
    },
    userLevel: 'Beginner',
    totalCompletedModules: 0
  },
  reducers: {
    updateSectionProgress: (state, action) => {
      const { moduleId, sectionId, completed, score } = action.payload;
      
      // Update section progress
      state.modules[moduleId].sections[sectionId] = {
        completed,
        score: score !== undefined ? score : null
      };

      // Recalculate module overall progress
      const sections = state.modules[moduleId].sections;
      const completedSections = Object.values(sections).filter(section => section.completed);
      state.modules[moduleId].overallProgress = 
        (completedSections.length / Object.keys(sections).length) * 100;
    },
    updateQuizProgress: (state, action) => {
      const { moduleId, completed, score } = action.payload;
      
      state.modules[moduleId].quizCompleted = completed;
      state.modules[moduleId].quizScore = score;

      // Update user level based on overall progress
      if (state.modules[1].overallProgress === 100 && 
          state.modules[2].overallProgress === 100 && 
          state.modules[3].overallProgress === 100) {
        state.userLevel = 'Advanced';
        state.totalCompletedModules = 3;
      } else if (state.modules[1].overallProgress === 100) {
        state.userLevel = 'Intermediate';
        state.totalCompletedModules = 1;
      }
    },
    resetModuleProgress: (state, action) => {
      const { moduleId } = action.payload;
      
      // Reset all sections and quiz for specific module
      Object.keys(state.modules[moduleId].sections).forEach(sectionId => {
        state.modules[moduleId].sections[sectionId] = {
          completed: false,
          score: null
        };
      });
      
      state.modules[moduleId].overallProgress = 0;
      state.modules[moduleId].quizCompleted = false;
      state.modules[moduleId].quizScore = null;
    }
  }
});

export const { 
  updateSectionProgress, 
  updateQuizProgress, 
  resetModuleProgress 
} = progressSlice.actions;

export default progressSlice.reducer;
