//libs/store/form/src/lib/formSlice.test.ts
import formReducer, { setFormValid } from './formSlice';

describe('form reducer', () => {
  const initialState = {
    isValid: false,
  };

  it('should handle initial state', () => {
    expect(formReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setFormValid', () => {
    const actual = formReducer(initialState, setFormValid(true));
    expect(actual.isValid).toEqual(true);
  });

  it('should handle setFormValid back to false', () => {
    const state = formReducer(initialState, setFormValid(true));
    const actual = formReducer(state, setFormValid(false));
    expect(actual.isValid).toEqual(false);
  });
});
