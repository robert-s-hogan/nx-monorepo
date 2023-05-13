import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  description: string;
  main_image: string;
  images: string[];
  price: number;
  discount: string;
  taxes: string;
  purchase_link: string;
  quantity: number;
  time: string;
}

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
  reducers: {},
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

export const {} = productsSlice.actions;

export default productsSlice.reducer;
