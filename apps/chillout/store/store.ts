import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import shoppingCartReducer from './shoppingCartSlice';
import { ShoppingCartState } from '../types/types';

export interface RootState {
  shoppingCart: ShoppingCartState;
}

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  // console.log("Dispatching action:", action);
  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
