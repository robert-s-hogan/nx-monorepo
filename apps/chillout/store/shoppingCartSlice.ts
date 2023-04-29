// shoppingCartSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ShoppingCartData,
  ShoppingCartState,
  AddItemToServerArgs,
} from '../types/types';
import { RootState } from './store';

const initialState: ShoppingCartState = {
  data: [],
  total: 0,
  step: 1,
  status: 'idle',
  error: null,
};

export const fetchShoppingCart = createAsyncThunk(
  'shoppingCart/fetchShoppingCart',
  async () => {
    const response = await fetch('/api/cart');
    if (!response.ok) {
      throw new Error('Failed to fetch shopping cart data');
    }
    const data = await response.json();
    return data;
  }
);

export const removeItemFromServer = createAsyncThunk(
  'shoppingCart/removeItemFromServer',
  async ({ itemId }: { itemId: number }, { rejectWithValue }) => {
    console.log('Received Item ID:', itemId);

    try {
      const response = await fetch(`/api/cart`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });

      if (!response.ok) {
        throw new Error('Error removing item from server');
      }

      return itemId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItemToServer = createAsyncThunk(
  'shoppingCart/addItemToServer',
  async ({ item }: AddItemToServerArgs, { getState, rejectWithValue }) => {
    console.log(`sliceAddToCart: ${item.id}`);

    const cartItems = (getState() as RootState).shoppingCart.data;
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      return rejectWithValue('Item already in cart');
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: item.id }),
      });

      if (!response.ok) {
        throw new Error('Error adding item to server');
      }

      const data = await response.json();
      return { item, data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCart: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      console.log('Reducer - setStep:', action);

      console.log('Setting step to:', action.payload);

      state.step = action.payload;
    },
    addItem: (state, action: PayloadAction<any>) => {
      if (!state.data) state.data = [];
      const { item } = action.payload;
      state.data.push(item);
    },
    updateItem: (state, action: PayloadAction<any>) => {
      const { item } = action.payload;
      const index = state.data.findIndex((cartItem) => cartItem.id === item.id);
      if (index >= 0) {
        state.data[index] = item;
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{
        itemId: number;
      }>
    ) => {
      const { itemId } = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingCart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchShoppingCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchShoppingCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeItemFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeItemFromServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const itemId = action.payload;

        state.data = state.data.filter((item) => item.id !== itemId);
      })
      .addCase(removeItemFromServer.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(addItemToServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addItemToServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { item } = action.payload;
        state.data.push(item);
      })

      .addCase(addItemToServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addItem, updateItem, removeItem, setStep } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
