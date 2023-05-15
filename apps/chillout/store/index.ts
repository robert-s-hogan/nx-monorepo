import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../../libs/store/products/src/lib/productsSlice';
import cartReducer from '../../../libs/store/cart/src/lib/cartSlice';
import { ChilloutProducts } from '@with-nx/types';

export interface RootState {
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
