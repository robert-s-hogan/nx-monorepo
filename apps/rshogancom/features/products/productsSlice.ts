import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '@with-nx/types';

export interface ProductsState {
  data: {
    total: number;
    results: Product[];
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  data: {
    total: 0,
    results: [],
  },
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<{
        total: number;
        results: Product[];
      }>(url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.data.results.push(action.payload);
      state.data.total += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          action: PayloadAction<{ total: number; results: Product[] }>
        ) => {
          state.status = 'succeeded';
          state.data.total = action.payload.total;
          state.data.results = action.payload.results;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
