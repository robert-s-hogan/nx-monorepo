// libs/store/checkout/checkoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutState {
  step: number;
  error: string | null;
}

const initialState: CheckoutState = {
  step: 1,
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { nextStep, previousStep, setError, clearError } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
