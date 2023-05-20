// productsSlice.test.ts
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '@with-nx/types';
import productsSlice, { fetchProducts } from './productsSlice';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('products reducer', () => {
  const initialState = {
    data: {
      total: 0,
      results: [],
    },
    status: 'idle',
    error: null,
  };

  it('should handle initial state', () => {
    expect(productsSlice(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  const store = configureStore({
    reducer: {
      products: productsSlice,
    },
  });

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    price: 10,
    quantity: 1,
  };

  it('should handle fetchProducts.pending action', () => {
    store.dispatch(fetchProducts.pending('products/fetchProducts'));
    expect(store.getState().products.status).toEqual('loading');
  });

  it('should handle fetchProducts.fulfilled action', () => {
    const payload = {
      total: 1,
      results: [mockProduct],
    };
    store.dispatch(
      fetchProducts.fulfilled(payload, 'products/fetchProducts', 'test-url')
    );
    expect(store.getState().products.status).toEqual('succeeded');
    expect(store.getState().products.data).toEqual(payload);
  });

  it('should handle fetchProducts.rejected action', () => {
    store.dispatch(
      fetchProducts.rejected(
        new Error('Test Error'),
        'products/fetchProducts',
        'test-url'
      )
    );
    expect(store.getState().products.status).toEqual('failed');
    expect(store.getState().products.error).toEqual('Test Error');
  });
});
