import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../../libs/store/products/src/lib/productsSlice';
// import productsReducer from '@with-nx/store';
import { ChilloutProducts } from '../types';

export interface RootState {
  products: ReturnType<typeof productsReducer>;
}
console.log(productsReducer);
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
