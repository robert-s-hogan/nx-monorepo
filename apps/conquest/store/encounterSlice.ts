import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  playerExperienceStart: 0,
  playerCount: 0,
  encounterAdjustedExperience: 0,
  encounterExperience: 0,
};

export const encounterSlice = createSlice({
  name: 'encounter',
  initialState: { value: initialStateValue },
  reducers: {
    setEncounterInformation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEncounterInformation } = encounterSlice.actions;

export default encounterSlice.reducer;
