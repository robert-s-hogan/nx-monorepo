import encounterReducer from './encounterSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    encounter: encounterReducer,
  },
});

export default store;
