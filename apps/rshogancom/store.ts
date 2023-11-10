// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
