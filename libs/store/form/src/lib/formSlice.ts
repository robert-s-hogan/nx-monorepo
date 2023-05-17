import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  isValid?: boolean;
}

const initialState: FormState = {
  isValid: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
      console.log(`formSlice: setFormValid: ${state.isValid}`);
    },
  },
});

export const { setFormValid } = formSlice.actions;

export default formSlice.reducer;
