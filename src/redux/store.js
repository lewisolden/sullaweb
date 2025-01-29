import { configureStore } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import progressReducer from './progressSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['progress'] // Only persist progress state
};

const persistedProgressReducer = persistReducer(persistConfig, progressReducer);

export const store = configureStore({
  reducer: {
    progress: persistedProgressReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
