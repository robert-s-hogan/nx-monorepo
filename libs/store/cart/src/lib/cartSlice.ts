//libs/store/cart/cartSlice.ts
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@with-nx/types';
import { RootState } from '../../../src';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        state.items[existingProductIndex].quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.items.push(newProduct);
      }
      console.log(`Added ${action.payload.name} to cart`);
    },

    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalQuantity = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const {
  addProductToCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
  updateProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
