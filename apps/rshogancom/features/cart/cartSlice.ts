//libs/store/cart/cartSlice.ts
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@with-nx/types';
import { RootState } from '../../store';

interface CartState {
  items: Product[];
  error: string | null;
}

const initialState: CartState = {
  items: [],
  error: null,
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
        // If the product exists, increase the quantity
        state.items[existingProductIndex].quantity += 1;
      } else {
        // If the product doesn't exist, add it with quantity 1
        const newProduct = { ...action.payload, quantity: 1 };
        state.items.push(newProduct);
      }
    },
    changeProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.error = `Product with ID ${action.payload.id} not found.`;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.error = `Product with ID ${action.payload} not found.`;
      }
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartError = (state: RootState) => state.cart.error;

export const selectCartSubtotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartTotal = createSelector(
  selectCartSubtotal,
  (subtotal) => subtotal
);

export const selectTotalQuantity = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const {
  addProductToCart,
  changeProductQuantity,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
